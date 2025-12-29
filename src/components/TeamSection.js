import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import TabSection from "./TabSection";
// import { motion } from "motion/react"

export default function AnimatedTabs() {
  const [active, setActive] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Mentors" },
    { id: "tab2", label: "Judges " },
    { id: "tab3", label: "Guests" },
  ];

  return (
    <div className="mx-auto">
      {/* Tabs */}
      <div className="flex justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
         
            className={`schedule-heading-gradient relative px-6 py-3 text-2xl font-bold transition
              ${active === tab.id ? "text-[#E85D24]" : "text-gray-400"}
            `}
          >
            {tab.label}

            {active === tab.id && (
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
          className="p-6 text-gray-300"
        >
    {active === "tab1" && (
  <TabSection />
)}

    {active === "tab2" && (
  <TabSection />
)}
    {active === "tab3" && (
  <TabSection />
)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
