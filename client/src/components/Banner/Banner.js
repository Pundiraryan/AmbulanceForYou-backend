import React from 'react'

const Banner = () => {
    return (
        <div className = 'image-container d-flex justify-content-center align-items-center'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-lg-12  mx-auto'>
                    </div>
                    <div className = 'col-lg-12 d-flex justify-content-center'>
                        <img 
                        src = {require('../../assets/images/logo512.png')} 
                        alt = 'prevent-epidemic'
                        width = '70%'
                        height = '100%'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;