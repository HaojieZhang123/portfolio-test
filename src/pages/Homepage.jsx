import { useState, useEffect } from 'react'

import { GlowCapture, Glow } from '@codaworks/react-glow'

const Homepage = () => {
    const [skills, setSkills] = useState()

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
            <div className="background-1">
                <div className="container">

                    <section id='jumbo'>

                        <h1>Hi. I'm <span className='big-title'>Haojie Zhang</span>.
                            <br />
                            A Web Developer.
                        </h1>

                        <p>I'm passionate about building innovative web solutions and constantly exploring new technologies.</p>
                    </section>

                </div>
            </div>
            <div className="background-2">
                <div className="container anchor" id='about'>

                    <section>
                        <h2>About</h2>
                        <GlowCapture>
                            <Glow>
                                <p>
                                    I’m a 23-year-old web developer based in Milan with a strong passion for <span className='glowable-text bold-text'>technology, problem-solving</span>, and <span className='glowable-text bold-text'>continuous learning</span>. I studied Computer Science Engineering at Politecnico di Milano and recently completed an intensive six-month full-stack web development bootcamp, where I honed my skills in front-end and back-end web development.
                                    <br />
                                    <br />
                                    Fluent in <span className='glowable-text bold-text'>Italian, Chinese, and English</span>—with some knowledge of Spanish and Japanese—I love experimenting in my homelab, where I explore <span className='glowable-text bold-text'>Docker, Kubernetes, virtualization, networking, and server management</span>. My daily driver is Arch Linux, but I also enjoy working across Windows, Ubuntu, and macOS environments.
                                    <br />
                                    <br />
                                    <span className='glowable-text bold-text'>Curious, self-driven, and passionate</span> about building <span className='glowable-text bold-text'>efficient and innovative systems</span>, I’m focused on growing as a web developer and contributing to impactful and forward-thinking tech projects.
                                </p>
                            </Glow>
                        </GlowCapture>
                    </section>

                    <section>
                        <h2>My Skills</h2>
                        <GlowCapture>
                            <div className="row">
                                {skills && skills.map((skill, index) => (
                                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                                        <Glow>
                                            <div className="skill-card">
                                                <img src={skill.logo} alt={skill.name} />
                                                <h3>{skill.name}</h3>
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
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat voluptate temporibus velit nostrum a libero commodi! Nobis sunt aspernatur magni neque dolor incidunt iusto, nostrum in quidem quos et eaque praesentium voluptates laboriosam quis ad commodi reiciendis reprehenderit minima tenetur asperiores tempora aliquam dicta? Ratione quae repellendus alias voluptatibus quibusdam fugit autem nisi amet cupiditate exercitationem. Eveniet, ipsa aspernatur suscipit est ut enim sed! Harum maxime, nulla eaque iusto odit autem quasi tenetur possimus quia laudantium earum deserunt cum distinctio sed voluptatibus rem. Cumque quisquam ipsa repellat eos illo omnis vitae nemo, exercitationem corporis inventore earum quas, at quam, aperiam veniam vero ut nihil quibusdam praesentium ipsam. Soluta veritatis corporis voluptate, accusantium dolorem repellendus aliquam explicabo commodi debitis voluptatem perspiciatis illum beatae autem vitae quaerat quas repudiandae eligendi obcaecati assumenda deserunt corrupti totam ipsam? Vel officiis, eum fugit consectetur asperiores cum nesciunt numquam deserunt reprehenderit aut eaque dicta unde rem hic, nam, minima delectus provident consequatur magni iure impedit. Qui ipsa sed amet expedita aliquam odio autem tenetur sint! Neque facilis harum soluta asperiores earum et, iure enim magni laboriosam magnam commodi, quam veritatis. Id nemo sit odio asperiores est nam excepturi nobis praesentium ex consequatur, aliquid cupiditate eligendi, distinctio tempora sed. Dolorem explicabo aliquam dicta, necessitatibus tempore a nulla aut illum porro voluptates nobis alias soluta accusamus et laborum blanditiis ab quam temporibus fugit adipisci similique aperiam. Illum consequatur beatae possimus molestias blanditiis dolor veniam, nulla assumenda qui dignissimos ipsa? Consequatur sint suscipit dignissimos obcaecati adipisci natus praesentium totam nesciunt consectetur aperiam debitis itaque tempora a, sed nihil ea maxime, impedit quaerat pariatur recusandae, veniam earum vitae. Architecto quia vel fugiat ea eius perferendis ex totam quos, et eaque! Sit neque totam ducimus ipsum, accusantium explicabo ut nobis tempora eos pariatur aspernatur consequuntur atque, cupiditate tempore deleniti temporibus deserunt adipisci perspiciatis? Iure, voluptatum modi doloremque amet accusantium illo rem quos, assumenda repudiandae vero pariatur ea vitae sit quod aperiam cumque dignissimos a necessitatibus deserunt hic in aliquid. Exercitationem quaerat, incidunt non libero, dolorum quos consequatur rerum architecto ad vero nemo quidem possimus dignissimos! Error, magni. Reprehenderit, similique alias! Perferendis nemo laborum dolorem quidem explicabo architecto non? Laboriosam alias, dignissimos eos deleniti atque fuga. Nostrum eveniet sit iure. Veritatis repellat, quisquam ipsa ut voluptate est quod officia repudiandae adipisci! Doloribus obcaecati facilis rerum mollitia eaque reprehenderit ea vero, voluptas quas sunt debitis iusto laboriosam accusantium eligendi nam vel ullam explicabo?
                        </p>
                    </section>

                </div>
            </div>
            <div className="background-2">
                <div className="container anchor" id='experience'>

                    <section>
                        <h2>Experience</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore perferendis tenetur quidem nesciunt ipsum non, perspiciatis a debitis. Nesciunt nisi qui dolore corrupti ab voluptates reiciendis deserunt blanditiis rerum consectetur sunt ducimus, aliquam delectus culpa accusantium nemo eaque porro dolor! Suscipit inventore obcaecati commodi nihil impedit iure voluptatem odit consequatur labore iusto soluta saepe nemo cupiditate dicta, eaque facere qui modi magni atque ratione delectus quia architecto! Eius non dolorum possimus autem quaerat natus ab perferendis deserunt dolores vero quasi praesentium esse soluta tempora porro, eligendi assumenda. Eligendi quae ad atque adipisci quidem ea quisquam maxime accusamus amet aliquid nihil asperiores aspernatur fugiat eum reprehenderit, tempore eaque, necessitatibus dolor quod omnis molestiae non? Aut, incidunt? Veniam sapiente iste fugiat est vel maxime perferendis eum velit repellendus ipsam provident ullam unde sint dolores qui ut, delectus cum? Odit, adipisci. Iusto reiciendis possimus ex libero quas modi rem praesentium nostrum dolores eaque harum similique, cupiditate id deleniti consequatur minus ipsam sint tempora veniam ipsum nobis iste asperiores, nisi quam. Deserunt necessitatibus asperiores nam sint, repudiandae iure enim minima error minus, sapiente unde reiciendis animi doloremque laborum nesciunt saepe alias aperiam nemo inventore illum dolor. Ipsam accusamus cum recusandae veniam! Atque totam accusantium eum, nesciunt nam laborum debitis repudiandae exercitationem vel! Sunt porro beatae sit vitae. Magnam accusamus, provident aperiam optio pariatur voluptatem culpa debitis tempora vitae impedit recusandae dolorem sunt numquam cumque obcaecati eos hic dolorum sit similique est nemo eius adipisci veritatis! Tenetur cum commodi eius suscipit alias, non aliquid aperiam ipsa! Laborum molestias hic, non unde labore facilis natus dignissimos? Itaque fugit minima laudantium, cumque quae veritatis veniam sapiente aspernatur iusto maiores dolorem pariatur, recusandae vitae a illo perferendis architecto sit fuga dignissimos beatae sequi dolores ad aperiam. Debitis animi temporibus voluptate neque voluptates optio, quos, aperiam reiciendis, totam eligendi asperiores ea autem cumque nobis beatae repudiandae laboriosam sit molestiae libero officia incidunt delectus earum quaerat nihil! Reprehenderit sequi culpa voluptate alias, accusantium est repellendus deleniti dolor, commodi doloremque recusandae excepturi corporis sunt nemo numquam neque cupiditate deserunt. Accusantium esse maiores aliquam illo tempore debitis consequatur praesentium, temporibus id minima modi placeat doloribus hic autem aut sint iste magnam quae quia sed adipisci officia. Porro nam est similique, vel in nesciunt doloribus magni quos molestias quia, ipsa dolorem consectetur velit asperiores quam expedita cum dolor corporis officia neque? Aperiam rem iusto mollitia ipsa qui labore consequatur nemo culpa reprehenderit.
                        </p>
                    </section>

                </div>
            </div>
            <div className="background-1">
                <div className="container anchor" id='contacts'>

                    <section>
                        <h2>Contact</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore perferendis tenetur quidem nesciunt ipsum non, perspiciatis a debitis. Nesciunt nisi qui dolore corrupti ab voluptates reiciendis deserunt blanditiis rerum consectetur sunt ducimus, aliquam delectus culpa accusantium nemo eaque porro dolor! Suscipit inventore obcaecati commodi nihil impedit iure voluptatem odit consequatur labore iusto soluta saepe nemo cupiditate dicta, eaque facere qui modi magni atque ratione delectus quia architecto! Eius non dolorum possimus autem quaerat natus ab perferendis deserunt dolores vero quasi praesentium esse soluta tempora porro, eligendi assumenda. Eligendi quae ad atque adipisci quidem ea quisquam maxime accusamus amet aliquid nihil asperiores aspernatur fugiat eum reprehenderit, tempore eaque, necessitatibus dolor quod omnis molestiae non? Aut, incidunt? Veniam sapiente iste fugiat est vel maxime perferendis eum velit repellendus ipsam provident ullam unde sint dolores qui ut, delectus cum? Odit, adipisci. Iusto reiciendis possimus ex libero quas modi rem praesentium nostrum dolores eaque harum similique, cupiditate id deleniti consequatur minus ipsam sint tempora veniam ipsum nobis iste asperiores, nisi quam. Deserunt necessitatibus asperiores nam sint, repudiandae iure enim minima error minus, sapiente unde reiciendis animi doloremque laborum nesciunt saepe alias aperiam nemo inventore illum dolor. Ipsam accusamus cum recusandae veniam! Atque totam accusantium eum, nesciunt nam laborum debitis repudiandae exercitationem vel! Sunt porro beatae sit vitae. Magnam accusamus, provident aperiam optio pariatur voluptatem culpa debitis tempora vitae impedit recusandae dolorem sunt numquam cumque obcaecati eos hic dolorum sit similique est nemo eius adipisci veritatis! Tenetur cum commodi eius suscipit alias, non aliquid aperiam ipsa! Laborum molestias hic, non unde labore facilis natus dignissimos? Itaque fugit minima laudantium, cumque quae veritatis veniam sapiente aspernatur iusto maiores dolorem pariatur, recusandae vitae a illo perferendis architecto sit fuga dignissimos beatae sequi dolores ad aperiam. Debitis animi temporibus voluptate neque voluptates optio, quos, aperiam reiciendis, totam eligendi asperiores ea autem cumque nobis beatae repudiandae laboriosam sit molestiae libero officia incidunt delectus earum quaerat nihil! Reprehenderit sequi culpa voluptate alias, accusantium est repellendus deleniti dolor, commodi doloremque recusandae excepturi corporis sunt nemo numquam neque cupiditate deserunt. Accusantium esse maiores aliquam illo tempore debitis consequatur praesentium, temporibus id minima modi placeat doloribus hic autem aut sint iste magnam quae quia sed adipisci officia. Porro nam est similique, vel in nesciunt doloribus magni quos molestias quia, ipsa dolorem consectetur velit asperiores quam expedita cum dolor corporis officia neque? Aperiam rem iusto mollitia ipsa qui labore consequatur nemo culpa reprehenderit.
                        </p>
                    </section>
                </div>
            </div >
        </>
    )
}

export default Homepage