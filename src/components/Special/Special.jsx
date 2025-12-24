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
      desc: "Opening ceremony. Theme reveal. Coding starts.",
      color: "#FCB216" // Yellow
    },
    {
      id: 2,
      day: "22",
      month: "MARCH",
      title: "Mentoring Sessions",
      desc: "Mid-hack evaluations and expert guidance.",
      color: "#E85D24" // Orange
    },
    {
      id: 3,
      day: "23",
      month: "MARCH",
      title: "Grand Finale",
      desc: "Final pitches, judging, and prize distribution.",
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
            className="text-center text-[45px] capitalize cursor-pointer section-title"
            data-aos="fade-down"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              textAlign: "center",
            }}
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
                  <p className="card-desc">{event.desc}</p>
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