import React from "react"

function Nav({ scroll }) {
    const { isScrolled, scrollToSection, activeSection } = scroll
    const [isOpen, setIsOpen] = React.useState(false)


    return (
        <div className={`${isScrolled ? 'md:pb-[110px] md:py-0' : ''} w-full h-fit flex justify-center py-5 bg-[rgb(29_29_29)] max-md:py-0 max-md:border-b-[1px] max-md:border-[rgb(50_50_50)]`}>
            <nav className={`${isScrolled ? 'fixed transition-transform md:translate-y-4 ease-in-out' : 'relative '} max-md:fixed w-[85%] h-[70px] bg-[rgb(20_20_20)] m-auto rounded-full border-[1px] border-[rgb(50_50_50)] z-50 flex items-center max-md:w-full max-md:px-4 max-md:rounded-none max-md:border-b-2 max-md:border-x-0`}>
                <h1 className='w-1/3 h-fit text-3xl font-medium text-center text-white max-md:w-3/4 max-md:text-xl max-md:text-start'>Jaysurya Gounder</h1>
                <div onClick={() => { (isOpen === false) ? setIsOpen(true) : setIsOpen(false) }} className="md:hidden w-1/4 h-fit flex justify-end items-center">{(isOpen) ? <box-icon name='x' color='#ffffff' size='28px' ></box-icon> : <box-icon name='menu' size='28px' color='white' />}</div>
                <ul className={`w-2/3 h-fit text-white font-medium inline-flex gap-16 max-md:w-full ${(isOpen) ? 'max-md:inline-block' : 'max-md:hidden'} max-md:absolute max-md:top-[69px] max-md:bg-[rgb(29_29_29)] max-md:left-0 max-md:h-fit`} >
                    <li className={`${activeSection === 'home' ? 'active' : ''} cursor-pointer max-md:ps-5 max-md:py-5 max-md:border-y max-md:border-[rgb(50_50_50)]`} onClick={() => scrollToSection('home')} >HOME</li>
                    <li className={`${activeSection === 'about' ? 'active' : ''} cursor-pointer max-md:ps-5 max-md:py-5 max-md:border-b max-md:border-[rgb(50_50_50)]`} onClick={() => scrollToSection('about')} >ABOUT</li>
                    <li className={`${activeSection === 'resume' ? 'active' : ''} cursor-pointer max-md:ps-5 max-md:py-5 max-md:border-b max-md:border-[rgb(50_50_50)]`} onClick={() => scrollToSection('resume')} >RESUME</li>
                    <li className={`${activeSection === 'services' ? 'active' : ''} cursor-pointer max-md:ps-5 max-md:py-5 max-md:border-b max-md:border-[rgb(50_50_50)]`} onClick={() => scrollToSection('services')} >SERVICES</li>
                    <li className={`${activeSection === 'project' ? 'active' : ''} cursor-pointer max-md:ps-5 max-md:py-5 max-md:border-b max-md:border-[rgb(50_50_50)]`} onClick={() => scrollToSection('project')} >PROJECTS</li>
                    <li className={`${activeSection === 'contact' ? 'active' : ''} cursor-pointer max-md:ps-5 max-md:py-5 max-md:border-b max-md:border-[rgb(50_50_50)]`} onClick={() => scrollToSection('contact')} >CONTACT</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav