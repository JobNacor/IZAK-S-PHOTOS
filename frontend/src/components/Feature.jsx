import React, { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../assets/styles/Feature.css';

const Feature = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container-xxl py-5 dark-mode" ref={ref}>
      <div className={`container ${inView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <div
          className="text-center mx-auto"
          style={{ maxWidth: '700px' }} // Adjusted maxWidth for larger text
        >
          <p className="text-primary text-uppercase mb-2">Why Choose Us!</p>
          <h1 className="display-4 mb-5 text-light">The Leading Photo Studio In The Country</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 pt-lg-5">
            <div className="fact-item dark-mode-item text-center h-100 p-5">
              <h1 className="display-1 text-primary mb-3">
                {inView && <CountUp end={50} duration={5} prefix="+" />}
              </h1>
              <h4 className="mb-3 text-light">Happy Clients</h4>
              <span className="text-light">Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="fact-item dark-mode-item text-center h-100 p-5">
              <h1 className="display-1 text-primary mb-3">
                {inView && <CountUp end={5} duration={6} prefix="+" />}
              </h1>
              <h4 className="mb-3 text-light">Years Experience</h4>
              <span className="text-light">Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pt-lg-5">
            <div className="fact-item dark-mode-item text-center h-100 p-5">
              <h1 className="display-1 text-primary mb-3">
                {inView && <CountUp end={500} duration={5} prefix="+" />}
              </h1>
              <h4 className="mb-3 text-light">Portfolio Photos</h4>
              <span className="text-light">Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Feature);
