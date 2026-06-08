import React from 'react';
import "../assets/styles/services.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SingleComponentServiceArea = () => {
    const services = [
        {
            icon: "fas fa-tshirt",
            title: "Fashion Photography",
            description: "An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise",
            delay: "0.0s"
        },
        {
            icon: "fas fa-water",
            title: "Nature Photography",
            description: "An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise",
            delay: "0.3s"
        },
        {
            icon: "fas fa-calendar-alt",
            title: "Event Coverage",
            description: "An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise",
            delay: "0.6s"
        },
        {
            icon: "fas fa-helicopter", 
            title: "Drone Photography",
            description: "An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise",
            delay: "0.6s"
        },
        {
            icon: "fas fa-video",
            title: "Multimedia Services",
            description: "An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise",
            delay: "0.6s"
        },
        {
            icon: "fas fa-ring",
            title: "Wedding Photography",
            description: "An so vulgar to on points wanted. No rapturous resolving continued household northward gay he it otherwise",
            delay: "0.6s"
        }
    ];

    return (
        <section className="service-area section-gap-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h3>Our Services</h3>
                            <h2><span>What We Offer</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className={`single-service wow fadeInUp`} data-wow-duration="1s" data-wow-delay={service.delay}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className={`${service.icon} icon-spacing`}></i> 
                                    <h4 className="ml-3">{service.title}</h4>
                                </div>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SingleComponentServiceArea;
