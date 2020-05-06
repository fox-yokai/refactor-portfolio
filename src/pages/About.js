import React from 'react';
import Me from "../images/profile-pic-300.jpg";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faLinkedin,
    faGithub,
    } from '@fortawesome/free-brands-svg-icons';



function About() {
    return (
        <div className="container d-flex justify-content-center mt-5" id="about-me">
        <div className="card mb-3" id="about-me">
            <div className="row no-gutters">
            <div className="col-md-4 ">
                <img src={Me} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text darkText">I’m a Minnesota based full-stack developer with experience in JavaScript.  I started software development because I have a passion for solving problems. Before I was a software developer, I was senior service desk specialist. I currently use my knowledge with software and technology to assist a local non-profit with teaching technical skills to their staff.</p>
                <div>
                    <a href="https://twitter.com/kitsunekla" target="_blank" rel="noopener noreferrer"><button className="socialBtn"><FontAwesomeIcon icon={faTwitter} /></button></a>
                    <a href="https://github.com/fox-yokai" target="_blank" rel="noopener noreferrer"><button className="socialBtn"><FontAwesomeIcon icon={faGithub} /></button></a>
                    <a href="https://www.linkedin.com/in/patrick-cain-mn/" target="_blank" rel="noopener noreferrer"><button className="socialBtn"><FontAwesomeIcon icon={faLinkedin} /></button></a>
                    <a href="mailto:pat.w.cain@gmail.com?subject=Your Portfolio"><button className="socialBtn"><FontAwesomeIcon icon={faEnvelope} /></button></a>
                    <a href="tel:612-314-9149" itemprop="telephone"><button className="socialBtn"><FontAwesomeIcon icon={faPhoneAlt} /></button></a>
                </div>  
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default About;
