import icLink           from '../../theme/images/icons/link.svg';
import icPalette        from '../../theme/images/icons/palette.svg';
import defaultPortrait  from '../../theme/images/base/default-portrait.jpg';
import defaultBanner    from '../../theme/images/base/default-banner.jpg';

export default function Preview ({
  bio,
  username,
  bannerUrl   = defaultBanner,
  portraitUrl = defaultPortrait,
}) 
{
  return <article id="sec-preview" className="mt-16 animate__animated animate__fadeInUp">

    <section className="mx-4 mb-4">
      <h2>Profile Example</h2>
      <p className="italic opacity-75">
        Here's a general idea of what your account may look like on popular
        social media platforms:
      </p>
    </section>

    <section id="preview-container">

      {/* Portrait, Banner & Buttons */}
      <article className="mx-2">
        <img id="preview-banner" src={bannerUrl} alt="Banner"/>
        <img id="preview-portrait" src={portraitUrl} alt="Portrait"/>
        <button id="preview-button">
          <img src={icPalette} alt="Palette Icon"/>
          Edit Profile
        </button>
      </article>

      {/* Name, Bio & Links */}
      <article className="mx-2">
        <h3 className="-mb-2 font-bold">{username}</h3>
        <h4 className="mb-2">@{username}</h4>
        <p>
          {bio}
        </p>
        <ul className="flex flex-row gap-4">
          <li><a className="inactive" href="">
            <img src={icLink} alt="" className="inline relative -translate-y-0.5 mr-1"/>
            Twitter
          </a></li>
          <li><a className="inactive" href="">
            <img src={icLink} alt="" className="inline relative -translate-y-0.5 mr-1"/>
            Instagram
          </a></li>
          <li><a className="inactive" href="">
            <img src={icLink} alt="" className="inline relative -translate-y-0.5 mr-1"/>
            YouTube
          </a></li>
        </ul>
      </article>

    </section>
  </article>
}