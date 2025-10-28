import { useState, useEffect } from 'react';

const Header = () => {
    const [active, setActive] = useState('about');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // section is active when 60% visible
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => sections.forEach((sec) => observer.unobserve(sec));
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