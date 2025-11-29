import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DateReveal.css";

const DateMeter = ({ direction = "up", duration = "10s" }) => {
  // Generate numbers 1-31
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  // Duplicate the array for seamless scrolling
  const scrollItems = [...days, ...days];

  return (
    <div className="date-card-container" data-aos="fade-up">
      <div className="date-card">
        <div className="meter-container">
          <div className="meter-overlay"></div>
          <div 
            className={`meter-track scroll-${direction}`}
            style={{ animationDuration: duration }}
          >
            {scrollItems.map((day, index) => (
              <div key={index} className="meter-number">
                {day < 10 ? `0${day}` : day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DateReveal = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="date-reveal-section">
      <Container>
        <div className="relative p-4 lg:py-10 w-full">
          <h1
            id="green-yellow"
            className="date-reveal-header"
          >
            Event Dates
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 xl:gap-64 justify-items-center">
          {/* Create 3 Date Meters with alternating directions and different speeds */}
          <DateMeter direction="up" duration="12s" />
          <DateMeter direction="down" duration="15s" />
          <DateMeter direction="up" duration="10s" />
        </div>
      </Container>
    </section>
  );
};

export default DateReveal;
