import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    const { isLoader } = props;

    return (
        <div className={`preloader link ${isLoader ? "preloader_active" : ""}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
