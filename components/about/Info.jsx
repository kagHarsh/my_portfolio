import React from "react";

const Info = () => {
    return (
            <div className="about__info grid">
                <div className="about__box">
                <i class="uil uil-graduation-cap about__icon"></i>
                    <h3 className="about_title">M.Tech(IT)</h3>
                    <span className="about__subtitle">IIIT Allahabad</span>
                </div>

                <div className="about__box">
                <i class="uil uil-graduation-cap about__icon"></i>
                    <h3 className="about_title">B.Tech</h3>
                    <span className="about__subtitle">UPES Dehradun</span>
                </div>

                <div className="about__box">
                <i class="uil uil-briefcase about__icon"></i>
                    <h3 className="about_title">Higher Secondary</h3>
                    <span className="about__subtitle">M.P Board Indore</span>
                </div>
                
                <div className="about__box">
                <i class="uil uil-backpack about__icon"></i>
                    <h3 className="about_title">Secondary</h3>
                    <span className="about__subtitle">CBSE Indore</span>
                </div>
            </div>
    )
}

export default Info;