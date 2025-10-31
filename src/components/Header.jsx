import { useState, useEffect } from 'react';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function useThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('light', isLight);
    }, [isLight]);

    const toggleTheme = () => setIsLight((v) => !v);
    return [isLight, toggleTheme];
}

const Header = () => {
    const [active, setActive] = useState('about');
    const [isLight, toggleTheme] = useThemeToggle();

    useEffect(() => {
        // Select all anchor containers (these wrap each section).
        const observedSections = document.querySelectorAll('.anchor');

        if (!observedSections || observedSections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Use intersectionRatio for more stable behavior across browsers
                    if (entry.intersectionRatio >= 0.5) {
                        // console.debug('section active:', entry.target.id, 'ratio:', entry.intersectionRatio);
                        setActive(entry.target.id);
                    }
                });
            },
            // Use rootMargin to account for the sticky header and pick a reasonable visibility threshold.
            { threshold: [0.25, 0.5, 0.6, 0.75], rootMargin: '-10% 0px -10% 0px' }
        );

        observedSections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);
    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-2 d-flex align-items-center">
                        <h3>Haojie</h3>
                    </div>
                    <div id='nav-menu' className="col-8 d-flex align-items-center justify-content-center">
                        <ul className="d-flex align-items-center justify-content-center">
                            <li className="mx-3">
                                <a href="#about" className={active === 'about' ? 'active' : ''}>
                                    About
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="#projects" className={active === 'projects' ? 'active' : ''}>
                                    Projects
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="#experience" className={active === 'experience' ? 'active' : ''}>
                                    Experience
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="#contacts" className={active === 'contacts' ? 'active' : ''}>
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-end">
                        {/* Theme toggle */}
                        <button
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                        >
                            {isLight ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                        </button>

                        {/* menu toggle for tablet and mobile */}
                        {/* <div className="menu-toggle">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div> */}

                    </div>
                </div>
            </div >
        </>
    )
}

export default Header