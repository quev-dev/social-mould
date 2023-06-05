import quevdev from '../../theme/images/content/quevdev.jpg';

export default function Footer() {
  return (
    <footer
      id='sec-footer'
      className='
    flex flex-col content-center items-center
    py-8 px-2 mt-24
    '
    >
      <aside>
        <p>&copy; QuevDev 2023</p>
        <p>
          GitHub:{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/quev-dev/social-mould'
          >
            social-mould
          </a>
        </p>
      </aside>
      <article className='pt-3'>
        <h4 className='mb-4'>Resources Used:</h4>

        <h5>Technologies</h5>
        <ul className='mb-4'>
          <li>
            <a target='_blank' rel='noreferrer' href='https://vitejs.dev/'>
              Vite
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://reactjs.org/'>
              React
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://tailwindcss.com/'>
              Tailwind CSS
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://sass-lang.com/'>
              Sass
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://necolas.github.io/normalize.css/'
            >
              normalize.css
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://animate.style/'>
              animate.css
            </a>
          </li>
        </ul>

        <h5>APIs</h5>
        <ul className='mb-4'>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://unsplash.com/developers'
            >
              Unsplash
            </a>
          </li>
        </ul>

        <h5>NPM Packages</h5>
        <ul>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.npmjs.com/package/react-animation-on-scroll'
            >
              react-animation-on-scroll
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.npmjs.com/package/react-router-dom'
            >
              react-router-dom
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.npmjs.com/package/react-scroll'
            >
              react-scroll
            </a>
          </li>
        </ul>
      </article>
    </footer>
  );
}
