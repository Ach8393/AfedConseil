import { useEffect, useState } from 'react'
import { navLinks } from '../constants/index'

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`} >
      <div className='inner'>
        <a href='#hero' className='logo'>
            Afed | Conseil
        </a>
        <nav className='desktop'>
            <ul>
                {navLinks.map(({ link, name }) => (
                    <li key={name} className='group'>
                        <a href={link} className='group'>
                            <span>{name}</span>
                            <span className='underline' />
                        </a>
                    </li>
                )
                )}
            </ul>
        </nav>
        <a href='#contact' className='contact-btn group'>
            <div className='inner'>
                <span>Nous Contactez</span>
            </div> 
        </a>
      </div>
    </header>
  )
}

export default NavBar
