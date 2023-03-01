import icPalette    from '../../theme/images/icons/palette.svg';
import icSearch     from '../../theme/images/icons/search.svg';
import icUnsplash   from '../../theme/images/icons/unsplash.svg';

import Preview  from './Preview.jsx';
import Download from './Download.jsx';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState } from 'react';

import { createApi } from 'unsplash-js';

import generateBio from '../../tools/bios.js';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
});

export default function Form() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    interest: '',
    selectedPortrait: '',
    selectedBanner: '',
  });

  // * Handle Updates to formData
  function usernameChange (event) {
    setFormData({
      ...formData,
      username: event.target.value
    });
  }

  const [fetchData, setFetchData] = useState([]);
  const [fetchDataBanner, setFetchDataBanner] = useState([]);
  
  const [noResultsPortrait, setNoResultsPortrait] = useState(false);
  const [noResultsBanner, setNoResultsBanner] = useState(false);

  const [queryPortrait, setQueryPortrait] = useState('');
  const [queryBanner, setQueryBanner] = useState('');
  const [selectedPortrait, setSelectedPortrait] = useState('');
  const [selectedBanner, setSelectedBanner] = useState('');

  const [interest, setInterest] = useState('');
  const [bio, setBio] = useState('');

  const [warnUser, setWarnUser] = useState(false);

  function unsplashSearch(argPortrait) {

    unsplash.search.getPhotos({
      query: argPortrait,
      page: 1,
      perPage: 4,
    })
      .then(response => {
        if (response.response.results.length >= 4) {
          setFetchData(response.response.results);
          setNoResultsPortrait(false);
        } else {
          setNoResultsPortrait(true);
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  function searchSubmit(event) {
    
    event.preventDefault();
    if(queryPortrait === ''){
      setNoResultsPortrait(true);
      return; 
    }
    unsplashSearch(queryPortrait)

  }

  function unsplashSearchBanner(queryBanner) {

    unsplash.search.getPhotos({
      query: queryBanner,
      page: 1,
      perPage: 4,
    })
      .then(response => {
        if (response.response.results.length >= 4) {
          setFetchDataBanner(response.response.results);
          setNoResultsBanner(false);
        } else {
          setNoResultsBanner(true);
        }
      })
      .catch(error => {
        console.log(error);
      });

  }
  function searchSubmitBanner(event) {
    event.preventDefault();
    if(queryBanner === ''){
      setNoResultsBanner(true);
      return;
    }
    unsplashSearchBanner(queryBanner);
  }

  // 'target', 'profile', 'banner', 'interest'
  async function handleSubmit(event) {
    event.preventDefault();
  
    if (selectedPortrait !== '' && selectedBanner !== '') {
      setFormSubmitted(true);
      setWarnUser(false);
  
      try {
        const response1 = await fetch(`${fetchData[selectedPortrait].links.download_location}/?client_id=${UNSPLASH_ACCESS_KEY}`);
        const response2 = await fetch(`${fetchDataBanner[selectedBanner].links.download_location}/?client_id=${UNSPLASH_ACCESS_KEY}`);
  
        // If the response status is OK (200-299), the download is successful.
        if (response1.ok && response2.ok) {
          console.log('Unsplash API downloads successfully triggered.');
          console.log(`${fetchData[selectedPortrait].links.download_location}/?client_id=${UNSPLASH_ACCESS_KEY}`);
          console.log(`${fetchDataBanner[selectedBanner].links.download_location}/?client_id=${UNSPLASH_ACCESS_KEY}`);
        } else {
          console.log('ERR: API downloads failed.');
        }
      } catch (error) {
        console.log('ERR: Could not get API download_location.', error);
      }
    } else {
      setWarnUser(true);
    }
  }
  

  function interestChange (event) {
    setInterest(event.target.value);
    setBio(generateBio(event.target.value));
  }

  return <main>
    <section id="sec-form" className="p-3 mb-3">
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <section className="flex flex-row">
        <h2 className="mb-8">Mould a Profile</h2>
      </section>
      </AnimationOnScroll>

      <form onSubmit={handleSubmit} id="form-container" className="flex flex-col">

        {/* Username */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <section className="mb-8 flex flex-col gap-2">

          <h4 className="font-bold">What username would you like?</h4>
          <input required type="text" name="username" placeholder="Enter a username."
          className="max-w-xs"
          onChange={usernameChange}
          />

        </section>
        </AnimationOnScroll>

        {/* Portrait */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <section className="mb-8 flex flex-col gap-2">

          <h4 className="font-bold">What profile picture suits you?</h4>
          
          <div className="flex flex-row gap-1">
            <input type="text" placeholder="Search Portraits"
            value={queryPortrait} onChange={(e) => setQueryPortrait(e.target.value)}
            />
            <button onClick={searchSubmit} type="submit" className="px-3">
              <img src={icSearch} alt="Search Icon"/>
            </button>
          </div>

          { noResultsPortrait && <section className="
          animate__animated animate__fadeInLeft animate__faster
          ">
            <p className="warning">No results were found. Try searching a different term.</p>
          </section> }

          {/* Portrait Results */}
          { fetchData.length > 0 && <div className="
          unsplash-results-container
          flex flex-wrap w-full justify-center items-center
          ">
            { fetchData.map((item, index) => (
              <div key={item.id} className="
              unsplash-image-container flex flex-col animate__animated animate__fadeIn
              ">
                <section className="unsplash-image-container-2 flex flex-col text-center justify-center items-center">
                  <img src={item.urls.regular} alt={item.description} className="unsplash-image-preview
                  animate__animated animate__rotateIn animate__fast"
                  />
                  <h6 className="text-center">Author:</h6>

                  <span>
                    <a rel="noreferrer" target="_blank" 
                    href={`${item.user.links.html}?utm_source=SocialMould&utm_medium=referral`}>
                      {`${item.user.name} `}
                    </a>
                    {`on `}
                    <a rel="noreferrer" target="_blank" href="https://unsplash.com/?utm_source=SocialMould&utm_medium=referral">
                      Unsplash
                    </a>
                  </span>

                  <div className="image-select-zone">
                  </div>
                </section>
                <section className="m-2 p-2 flex flex-col items-center">
                  <input type="radio"
                    name="selectedPortrait"
                    id={item.id}
                    value={item.id}
                    checked={selectedPortrait === index}
                    onChange={() => setSelectedPortrait(index)}
                  />
                </section>
              </div>
            ))}
          </div>
          }

          <p className="caption">
            <img src={icUnsplash} className="w-4" alt="Unsplash Icon"/>
            Powered by Unsplash API.
          </p>

        </section>
        </AnimationOnScroll>

        {/* Banner */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <section className="mb-8 flex flex-col gap-2">

          <h4 className="font-bold">What banner suits you?</h4>

          <div className="flex flex-row gap-1">
            <input type="text" placeholder="Search Banners"
            value={queryBanner} onChange={(e) => setQueryBanner(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === 'Enter') searchSubmitBanner(e);
            }}
            />
            <button onClick={searchSubmitBanner} type="submit" className="px-3">
              <img src={icSearch} alt="Search Icon"/>
            </button>
          </div>
          <p className="caption">
            <img src={icUnsplash} className="w-4" alt="Unsplash Icon"/>
            Powered by Unsplash API.
          </p>

          { noResultsBanner && <section className="
          animate__animated animate__fadeInLeft animate__faster
          ">
            <p className="warning">No results were found. Try searching a different term.</p>
          </section> }

          {/* Banner Results */}
          { fetchDataBanner.length > 0 && <div className="
          unsplash-results-container
          flex flex-wrap w-full justify-center items-center
          ">
            { fetchDataBanner.map((bannerItem, bannerIndex) => (
                <div key={bannerItem.id} className="
                unsplash-banner-container flex flex-col animate__animated animate__fadeIn
                ">
                  <section className="unsplash-image-container-2 flex flex-col text-center justify-center items-center">
                    <img src={bannerItem.urls.regular} alt={bannerItem.description} className="unsplash-banner-preview
                    animate__animated animate__fadeIn animate__fast
                    "/>
                    <h6 className="text-center">Author:</h6>

                    <span>
                      <a rel="noreferrer" target="_blank" 
                      href={`${bannerItem.user.links.html}?utm_source=SocialMould&utm_medium=referral`}>
                        {`${bannerItem.user.name} `}
                      </a>
                      {`on `}
                      <a rel="noreferrer" target="_blank" href="https://unsplash.com/?utm_source=SocialMould&utm_medium=referral">
                        Unsplash
                      </a>
                    </span>

                    <div className="image-select-zone">
                    </div>
                  </section>
                  <section className="m-2 p-2 flex flex-col items-center">
                    <input required type="radio"
                      name="selectedBanner"
                      id={bannerItem.id}
                      value={bannerItem.id}
                      checked={selectedBanner === bannerIndex}
                      onChange={() => setSelectedBanner(bannerIndex)}
                    />
                  </section>
                </div>
            ))} 
          </div>
          }

        </section>
        </AnimationOnScroll>
        
        {/* Interest */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <section className="mb-8">
          <h4 className="mb-2 font-bold">What are you most interested in?</h4>
          <select required name="interest" id="interest" defaultValue=""
          onChange={(event) => interestChange(event)}>
            <option value="" disabled>Select an interest.</option>
            <option value="Art">Art</option>
            <option value="Cooking">Cooking</option>
            <option value="Dancing">Dancing</option>
            <option value="Fashion">Fashion</option>
            <option value="Gaming">Gaming</option>
            <option value="Hiking">Hiking</option>
            <option value="Music">Music</option>
            <option value="Photography">Photography</option>
            <option value="Reading">Reading</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Writing">Writing</option>
            <option value="Webdev">Webdev</option>
            <option value="Yoga">Yoga</option>
          </select>
        </section>
        </AnimationOnScroll>

        {/* Submit */}
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        {!formSubmitted && <button>
          <img src={icPalette} alt=""/>
          Mould!
        </button>
        }
        {formSubmitted && <p className="hint">
          Update the form to see live changes to your preview.
        </p>
        }
        </AnimationOnScroll>

        {/* // ! Warning // */}
        { warnUser && <div className="warning animate__animated animate__fadeInLeft animate__faster">
          <h3>Warning:</h3>
          <p>
            You <i>must</i> select both a <i>profile picture</i> and <i>banner!</i>
          </p>
        </div>
        }

      </form>
    </section> 

    <section>
      { formSubmitted && <Preview
        username={formData.username}
        bannerUrl={fetchDataBanner[selectedBanner].urls.regular}
        portraitUrl={fetchData[selectedPortrait].urls.regular}
        bio={bio}
      /> 
      }
      { formSubmitted && <Download
        downloadUrlPortrait={fetchData[selectedPortrait].links.download}
        downloadUrlBanner={fetchDataBanner[selectedBanner].links.download}
        textToCopy={bio}
      /> }
    </section>

  </main>
}