import React from 'react'

const SkillCard = ({ name, logo }) => {
    return (
        <>
            <div className="skill-card">
                <img src={logo} alt={name} />
                <h3>{name}</h3>
            </div>
        </>
    )
}

export default SkillCard