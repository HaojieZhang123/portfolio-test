import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const PortfolioCard = ({ title, description, image, site, frontEnd, backEnd, frontEndTech, backEndTech }) => {
    return (
        <>
            <div className="portfolio-card d-flex">
                <div className="card-content col-6">
                    <h3 className='glowable-about'>{title}</h3>
                    <p>{description}</p>
                    <div className="button-container g-1">
                        {/* display buttons if site, frontEnd and backEnd are provided */}
                        {site && (
                            <a href={site} target="_blank" rel="noopener noreferrer">
                                <button className=' button portfolio-button'>
                                    <FontAwesomeIcon icon={faLink} />
                                </button>
                            </a>
                        )}
                        {frontEnd && (
                            <a href={frontEnd} target="_blank" rel="noopener noreferrer">
                                <button className='button portfolio-button'>
                                    {/* select icon based on frontEndTech */}
                                    {frontEndTech === 'React' && <FontAwesomeIcon icon={faReact} />}
                                </button>
                            </a>
                        )}
                        {backEnd && (
                            <a href={backEnd} target="_blank" rel="noopener noreferrer">
                                <button className='button portfolio-button'>
                                    {/* select icon based on backEndTech */}
                                    {backEndTech === 'Java' && <FontAwesomeIcon icon={faJava} />}
                                    {backEndTech === 'Node.js' && <FontAwesomeIcon icon={faNodeJs} />}
                                </button>
                            </a>
                        )}
                    </div>
                </div>
                <div className="card-image col-6">
                    <img src={image} alt="image" />
                </div>
            </div>
        </>
    )
}

export default PortfolioCard