import React from 'react'

const TextChange = ({ textArray }) => {
    return (
        <>
            <div className="roles-container">
                {textArray && textArray.map((text, index) => (
                    <span key={index} className="role-text">
                        {text}
                    </span>
                ))}
            </div>
        </>
    )
}

export default TextChange