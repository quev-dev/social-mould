import icHourglass from '../theme/images/icons/hourglass.svg';

export default function Loading() {
  return <main className="
  flex flex-col text-center items-center justify-center
  h-screen -translate-y-4 px-6
  ">
    <img className="
    w-12
    animate__animated animate__infinite
    animate__swing
    "
    src={icHourglass} alt="Hourglass Icon"/>
  </main>
}