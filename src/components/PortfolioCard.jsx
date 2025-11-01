import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const PortfolioCard = ({ title, description, image, site, frontEnd, backEnd }) => {
    return (
        <>
            <div className="portfolio-card d-flex">
                <div className="card-content col-6">
                    <h3 className='glowable-about'>{title}</h3>
                    <p>{description}</p>
                    <div>
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
                                    <FontAwesomeIcon icon={faReact} />
                                </button>
                            </a>
                        )}
                        {backEnd && (
                            <a href={backEnd} target="_blank" rel="noopener noreferrer">
                                <button className='button portfolio-button'>
                                    <FontAwesomeIcon icon={faJava} />
                                    <FontAwesomeIcon icon={faNodeJs} />
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