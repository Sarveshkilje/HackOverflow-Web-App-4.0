import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DateReveal.css";

const DateMeter = ({ direction = "up", duration = "10s" }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const scrollItems = [...days, ...days];

  return (
    <div className="date-card-container">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <DateMeter direction="up" duration="12s" />
          <DateMeter direction="down" duration="18s" />
          <DateMeter direction="up" duration="10s" />
        </div>
      </Container>
    </section>
  );
};

export default DateReveal;
