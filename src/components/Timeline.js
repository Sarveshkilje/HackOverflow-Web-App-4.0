import React from "react";
import "./Timeline.css";
import { motion } from "framer-motion";

const stages = [
  {
    id: 1,
    date: "05 Jan 26, 10:00 AM IST → 10 Feb 26, 10:00 PM IST",
    title: "Shortlisting Round",
    description:
      "All the teams are required to submit your PPT in the specified format with respect to your chosen Problem Statement. The presentation must clearly address the assigned problem statement and proposed solution. Shortlisted Teams will be notified through Email for Offline Implementation round."
  },
  {
    id: 2,
    date: "11 Mar 26, 05:00 PM IST → 13 Mar 26, 06:00 AM IST",
    title: "Implementation Round (On Campus)",
    description:
      "This is the On campus round which will be for the shortlisted teams. Participants are required to be present in the college campus for this round. Mentoring sessions and judging are part of this stage. Top 10 teams will be shortlisted for the Grand Finale."
  },
  {
    id: 3,
    date: "13 Mar 26, 09:00 AM IST → 13 Mar 26, 12:00 PM IST",
    title: "Grand Finale (On Campus)",
    description:
      "Teams ranked in the top ten will advance to this stage. They must introduce their project and USP to the jurors, judges, and mentor during Conclave."
  }
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Stages and Timelines</h2>

      <div className="timeline">
        {stages.map((stage, index) => (
<motion.div
  className="timeline-item"
  key={stage.id}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ amount: 0.3 }}   // 🔥 replays on scroll
>

            <div className="timeline-left">
              <motion.div
                className="step-number"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.4 }}
          viewport={{ amount: 0.3 }}

              >
                {stage.id}
              </motion.div>

              {index !== stages.length - 1 && (
<motion.div
  className="timeline-line"
  initial={{ scaleY: 0 }}
  whileInView={{ scaleY: 1 }}
  transition={{ duration: 0.6 }}
  style={{ transformOrigin: "top" }}
  viewport={{ amount: 0.4 }}
/>

              )}
            </div>

            <div className="timeline-content">
              <motion.p
                className="timeline-date"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              viewport={{ amount: 0.3 }}

              >
                {stage.date}
              </motion.p>

              <motion.div
                className="timeline-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
         viewport={{ amount: 0.3 }}

              >
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
