import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import TabSection from "./TabSection";
import ManavImg from "../assets/img/teams/manav gupta.png";

const tabData = {
  tab1: {
    label: "Mentors",
    team: [
      {
        name: "Manav",
        role: "Founder",
        desc: "I've established pagedone in 2022 and it was one of the best idea I've had.",
        img: ManavImg,
      },
    ],
  },
  tab2: {
    label: "Judges",
    team: [
      {
        name: "Rams Lesli",
        role: "Judge",
        desc: "Evaluates innovation and technical depth.",
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      },
    ],
  },
  tab3: {
    label: "Guests",
    team: [
      {
        name: "Alexa Kimberly",
        role: "Guest Speaker",
        desc: "Industry leader sharing insights.",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      },
    ],
  },
};

export default function AnimatedTabs() {
  const [active, setActive] = useState("tab1");

  return (
    <div className="mx-auto">
      {/* Tabs */}
      <div className="flex justify-center">
        {Object.entries(tabData).map(([id, tab]) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`schedule-heading-gradient relative px-6 py-3 text-2xl font-bold transition
              ${active === id ? "text-[#E85D24]" : "text-gray-400"}
            `}
          >
            {tab.label}

            {active === id && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 h-[2px] w-full bg-[#E85D24]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          <TabSection team={tabData[active].team} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
