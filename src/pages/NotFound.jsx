import icSignpost from '../theme/images/icons/signpost.svg';

export default function NotFound() {
  return <main id="page-notfound" className="
  flex flex-col text-center items-center justify-center
  h-screen -translate-y-4 px-6
  ">
    <header className="
    mb-2
    animate__animated animate__fadeIn animate__faster
    ">

      <img className="inline w-4" src={icSignpost} alt="Signpost Icon"/>

      <h2>Error 404</h2>
      <p>The page you're looking for does not exist.</p>

    </header>

    <section className="
    animate__animated animate__fadeIn animate__slow
    ">
      <a href="/">Return to Main Page</a>
    </section>

  </main>
}