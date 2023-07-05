import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
        const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>
        
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1 
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={
                            toggleState === 2 
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                            toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">M.Tech(IT)</h3>
                                <span className="qualification__subtitle">IIIT Allahabad</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                            </div>
                            <div>
                                <h3 className="qualification__title">B.Tech</h3>
                                <span className="qualification__subtitle">UPES Dehradun</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016 - 2020
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Higher Secondary</h3>
                                <span className="qualification__subtitle">Indore Academy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                            </div>
                            <div>
                                <h3 className="qualification__title">Secondary</h3>
                                <span className="qualification__subtitle">St. Mary's H.S School, Barwaha</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2014
                                </div>
                            </div>

                            
                        </div>
                    </div>


                    <div className={
                            toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                        }>
                        <div className="qualification__Data">
                            <div>
                                <h3 className="qualification__title">Teaching Assistant</h3>
                                <span className="qualification__subtitle">IIIT Allahabad</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022 - Present
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;