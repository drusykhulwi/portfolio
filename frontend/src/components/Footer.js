import Socials from "./Socials";



function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl pt-16 px-16">
      <img 
        src='logo.png'
        alt="Drusilla Khulwael | Software Developer"
        className='w-[30px] h-[30px]'
      />
      <Socials/>
      <div>
        <p className="text-white text-sm">
          &copy;Drusilla Khulwael {currentYear}. All Rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer