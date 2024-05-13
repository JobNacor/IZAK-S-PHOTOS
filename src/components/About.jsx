import React from 'react';
import Camera2 from '../images/Camera2.png'; // Make sure the path is correct
import './About.css'; // Importing CSS for styling

const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 text-section">
                        <h1>About</h1>
                        <p>We believe that every moment is a story waiting to be told, and we specialize in transforming these stories into captivating visual narratives. With a deep passion for the art of photography, we bring a unique blend of creativity and technical expertise to every project. Our team, led by Graphic Smith, is dedicated to capturing the essence of each moment, whether it's the joy of a wedding, the energy of an event, or the personality of a professional headshot.</p>
                        <p>At the heart of our philosophy is a commitment to excellence and a genuine connection with our clients. We don’t just take pictures; we create visual experiences that resonate. From conceptualization to the final frame, we work closely with our clients, ensuring that their vision is not only realized but surpassed. Discover the artistry and professionalism that define [Your Photography Business Name], where each click tells a story, and every story is a masterpiece.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={Camera2} alt="Camera" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;