import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                
                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                        
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">harshkagh@gmail.com</span>
                        
                            <a href="mailto:harshkagh@gmail.com.com" className="contact__button">Write Me 
                            <i className="bx bx-right-arrow-alt 
                            contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i class="uil uil-map-marker contact__card-icon"></i>
                        
                            <h3 className="contact__card-title">Location</h3>
                            <span className="contact__card-data">IIIT Allahabad</span>
                        
                            <a href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology,+Allahabad/@25.4294481,81.7679639,17z/data=!3m1!4b1!4m6!3m5!1s0x399acda4892cc187:0xb07e2e87ab51e82a!8m2!3d25.4294481!4d81.7701526!16zL20vMDYyeXQ0?entry=ttu" className="contact__button">Write Me 
                            <i className="bx bx-right-arrow-alt 
                            contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;