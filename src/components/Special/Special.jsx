import { Container } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Special.css";

const Special = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    {
      id: 1,
      day: "21",
      month: "MARCH",
      title: "Kickoff & Hacking",
      color: "#FCB216" // Yellow
    },
    {
      id: 2,
      day: "22",
      month: "MARCH",
      title: "Mid-Evaluation",
      color: "#E85D24" // Orange
    },
    {
      id: 3,
      day: "23",
      month: "MARCH",
      title: "Grand Finale",
      color: "#D91B57" // Pink
    }
  ];

  return (
    <section className="timeline-section relative pt-12">
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <Container>
        <div className="relative p-4 lg:py-10 w-full mb-8">
          <h1
            className="section-title"
            data-aos="fade-down"
          >
            Mark Your <span className="gradient-text">Calendar</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 timeline-grid">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="glass-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{ '--accent-color': event.color }}
            >
              <div className="card-content">
                {/* Massive Typographic Date */}
                <div className="date-wrapper">
                  <span className="event-month">{event.month}</span>
                  <span className="event-day" style={{ color: event.color }}>
                    {event.day}
                  </span>
                </div>

                <div className="text-content">
                  <h4 className="card-title">{event.title}</h4>
                </div>
              </div>

              {/* Elegant Bottom Line */}
              <div className="card-border" style={{ background: event.color }}></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Special; 