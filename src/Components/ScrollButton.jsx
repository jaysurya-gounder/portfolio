import 'boxicons'
import AnimatedComponent from './AnimatedComponent';


const ScrollButton = ({ progress }) => {
  const { showScrollButton, scrollProgress } = progress
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {showScrollButton && (
        <AnimatedComponent>
          <div data-aos="fade-up" data-aos-duration="1000" onClick={scrollToTop} className='fixed w-14 h-14 rounded-full bottom-5 right-5 z-20 cursor-pointer overflow-hidden'>
            <div className="w-full h-full grid place-content-center rounded-full">
              <div className='w-12 h-12 grid place-content-center rounded-full bg-black'>
                <box-icon name='chevron-up' size='32px' color='white' />
              </div>
            </div>
            <div
              className="absolute top-0 w-full h-full rounded-full bg-transparent transition-all -z-10"
              style={{ background: `conic-gradient(rgb(185 28 28) ${scrollProgress}%, transparent ${scrollProgress}%)` }}
            ></div>
          </div>
        </AnimatedComponent>
      )}
    </div>
  )
}

export default ScrollButton