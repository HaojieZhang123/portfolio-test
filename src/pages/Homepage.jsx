import { useState, useEffect } from 'react'

import { GlowCapture, Glow } from '@codaworks/react-glow'

import TextChange from '../components/TextChange'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import CopyButton from '../components/CopyButton'

import Timeline from '../components/Timeline'

const Homepage = () => {
    const [skills, setSkills] = useState();
    const [roles, setRoles] = useState([
        'Web Developer',
        'Linux Enthusiast',
        'Self Hosting Advocate',
        'Problem Solver',
        'Hardware Enthusiast',
        'Tech Tinkerer',
        'Open Source Advocate',
        'Lifelong Learner',
        'Curious Explorer',
        'Web Developer'
    ]);

    const birthDate = new Date('2002-06-07T00:00:00Z')
    const today = new Date()
    const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365))

    const setSkillsData = () => {
        setSkills([
            { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg' },
            { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
            { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg' },
            { name: 'Node.js', logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
            { name: 'MySQL', logo: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
            { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/it/2/2e/Java_Logo.svg' },
            { name: 'Spring', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg' },
            { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg' },
            { name: 'Arch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Arch_Linux_%22Crystal%22_icon.svg' },
            { name: 'Ubuntu', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg' },
        ])
    }

    useEffect(() => {
        setSkillsData()
    }, [])

    return (
        <>
            <GlowCapture>
                <div className="background-1">
                    <div className="container">

                        <section id='jumbo'>
                            <Glow>
                                <div className="jumbo-text">
                                    <h1>
                                        Hi. I'm <span className='big-title'>Haojie Zhang</span>.
                                        <br />
                                        <span className='jumbo-subtitle opacity-60'>
                                            <span className='pre-text-change'>A </span><span className='glowable-text'><TextChange textArray={roles} /></span>
                                        </span>
                                    </h1>
                                    <p className='grey-text'>I'm passionate about building innovative web solutions and constantly exploring new technologies.</p>
                                </div>
                            </Glow>
                            <div className='bg-mask glow-mask'></div>

                            <div className='social-container'>
                                {/* social buttons */}
                                <a href='https://github.com/HaojieZhang123' target='_blank' className='social-button'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>

                                <a href='https://www.linkedin.com/in/haojie-zhang-534757311/' target='_blank' className='social-button'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>

                                {/* copy email and phone to clipboard with feedback */}
                                <CopyButton value={"haojiezhang123@gmail.com"} icon={faEnvelope} ariaLabel="Copy email" />

                                <CopyButton value={"3462378123"} icon={faWhatsapp} ariaLabel="Copy phone" />

                            </div>

                        </section>

                    </div>
                </div>
            </GlowCapture >
            <div className="background-2">
                <div className="container anchor" id='about'>

                    <section>
                        <h2>About</h2>
                        <GlowCapture>
                            <Glow>
                                <p className='paragraph'>
                                    I’m a {age}-year-old web developer based in <span className='glowable-about'>Milan, Italy</span> with a strong passion for <span className='glowable-about'>technology, problem-solving</span>, and <span className='glowable-about'>continuous learning</span>. I studied Computer Science Engineering at Politecnico di Milano and recently completed an intensive six-month full-stack web development bootcamp, where I honed my skills in front-end and back-end web development.
                                    <br />
                                    <br />
                                    Fluent in <span className='glowable-about'>Italian, Chinese, and English</span>—with some knowledge of Spanish and Japanese—I love experimenting in my homelab, where I explore <span className='glowable-about'>Docker, Kubernetes, virtualization, networking, and server management</span>. My daily driver is Arch Linux, but I also enjoy working across Windows, Ubuntu, and macOS environments.
                                    <br />
                                    <br />
                                    <span className='glowable-about'>Curious, self-driven, and passionate</span> about building <span className='glowable-about'>efficient and innovative systems</span>, I’m focused on growing as a web developer and contributing to impactful and forward-thinking tech projects.
                                </p>
                            </Glow>
                        </GlowCapture>

                        <div className="spacer"></div>

                        <h2 className='text-center'>My Skills</h2>
                        <GlowCapture>
                            <div className="row" id='skills'>
                                {skills && skills.map((skill, index) => (
                                    <div className="col-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center align-items-center" key={index}>
                                        <Glow>
                                            <div className="skill-card">
                                                <img src={skill.logo} alt={skill.name} />
                                                <h4>{skill.name}</h4>
                                            </div>
                                        </Glow>
                                    </div>
                                ))}
                            </div>
                        </GlowCapture>
                    </section>

                </div >
            </div>
            <div className="background-1">
                <div className="container anchor" id='projects'>

                    <section>
                        <h2 className='text-center'>Portfolio</h2>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus laudantium sit accusamus quibusdam non, eius laboriosam et optio ipsam enim hic, nulla quam quaerat voluptatum dicta, commodi illum? Alias vel nam accusamus magnam ipsum, est doloribus hic? Eum quos ex consequuntur necessitatibus expedita doloremque quae dolores, esse accusantium voluptatibus.
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus laudantium sit accusamus quibusdam non, eius laboriosam et optio ipsam enim hic, nulla quam quaerat voluptatum dicta, commodi illum? Alias vel nam accusamus magnam ipsum, est doloribus hic? Eum quos ex consequuntur necessitatibus expedita doloremque quae dolores, esse accusantium voluptatibus.
                                </p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus laudantium sit accusamus quibusdam non, eius laboriosam et optio ipsam enim hic, nulla quam quaerat voluptatum dicta, commodi illum? Alias vel nam accusamus magnam ipsum, est doloribus hic? Eum quos ex consequuntur necessitatibus expedita doloremque quae dolores, esse accusantium voluptatibus.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div className="background-2">
                <div className="container anchor" id='experience'>

                    <section>
                        <h2>Experience</h2>
                        <Timeline></Timeline>
                    </section>

                </div>
            </div>
            <div className="background-1">
                <div className="container anchor" id='contacts'>

                    <section>
                        <h2 className='text-center'>Contact Me</h2>
                        <div className="row d-flex justify-content-center flex-wrap">
                            <div className="col-12 d-flex justify-content-center align-items-center flex-wrap mb-3">
                                <GlowCapture className='d-flex justify-content-around align-items-center flex-wrap w-100'>
                                    <Glow className='d-flex col-12 col-md-6 col-lg-4 w-100'>
                                        <div className='contact-box'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <span className='glowable-text'>
                                                haojiezhang123@gmail.com
                                            </span>
                                        </div>
                                    </Glow>

                                    <Glow className='d-flex col-12 col-md-6 col-lg-4 w-100'>
                                        <div className='contact-box'>
                                            <FontAwesomeIcon icon={faPhone} />
                                            <span className='glowable-text'>
                                                +39 346 237 8123
                                            </span>
                                        </div>
                                    </Glow>

                                    <Glow className='d-flex col-12 col-md-6 col-lg-4 w-100'>
                                        <div className='contact-box'>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <span className='glowable-text'>
                                                Milan, Italy
                                            </span>
                                        </div>
                                    </Glow>
                                </GlowCapture>
                            </div>

                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <div className='social-container'>
                                    {/* social buttons */}
                                    <a href='https://github.com/HaojieZhang123' target='_blank' className='social-button'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>

                                    <a href='https://www.linkedin.com/in/haojie-zhang-534757311/' target='_blank' className='social-button'>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>

                                    {/* copy email and phone to clipboard with feedback */}
                                    <CopyButton value={"haojiezhang123@gmail.com"} icon={faEnvelope} ariaLabel="Copy email" />

                                    <CopyButton value={"3462378123"} icon={faWhatsapp} ariaLabel="Copy phone" />

                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div >
        </>
    )
}

export default Homepage