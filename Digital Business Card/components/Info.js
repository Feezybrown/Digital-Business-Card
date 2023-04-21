import React from "react"

export default function Info() {
    return (
        <div>
            <div>
                <img src="./images/profile.jpg" className="profile-img"/>
            </div>
             <div className="name-details">
                <h3>Abdulafeez Abdulazeez</h3>
                <p className="job-title">Frontend Developer</p>
                <p className="website">abdulafeez.website</p>
            </div>
            <div className="btn-el">
                <a href="mailto:azeezafeez66@gmail.com" target="_blank">
                    <button className="email-btn">
                        <img src="./icons/envelope.svg" className="email-icon" />
                        Email
                    </button>
                 </a>
                
                <a href="https://www.linkedin.com/in/abdulafeez-o-abdulazeez-354941179/" target="_blank">
                    <button className="li-btn">
                        <img src="./icons/linkedin.png" className="li-icon" />
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}