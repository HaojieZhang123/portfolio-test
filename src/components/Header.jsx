import { useState, useEffect } from 'react';

const Header = () => {
    const [active, setActive] = useState('about');

    useEffect(() => {
        // Select all anchor containers (these wrap each section).
        const observedSections = document.querySelectorAll('.anchor');

        if (!observedSections || observedSections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Use intersectionRatio for more stable behavior across browsers
                    if (entry.intersectionRatio >= 0.6) {
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
                <div className="row">
                    <div className="col-12">
                        <ul>
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
                </div>
            </div >
        </>
    )
}

export default Header