import { motion } from "motion/react";
import { Linkedin, Instagram, X } from "lucide-react";

export default function TabSection({ team }) {
  return (
    <section className="text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-[#E85D24]"
              />

              <div>
                <h3 className="text-xl font-semibold bg-[linear-gradient(0deg,#FCB216_0%,#E85D24_35%,#D91B57_70%,#63205F_100%)] bg-clip-text text-transparent">
                  {m.name}
                </h3>

                <p className="text-[rgb(252,178,22)] text-sm">
                  {m.role}
                </p>

                <p className="text-slate-400 mt-2 text-sm max-w-sm">
                  {m.desc}
                </p>

                <div className="flex gap-3 mt-4">
                  <IconBtn icon={<X size={16} />} />
                  <IconBtn icon={<Instagram size={16} />} />
                  <IconBtn icon={<Linkedin size={16} />} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconBtn({ icon }) {
  return (
    <button className="w-9 h-9 rounded-full bg-[#E85D24] hover:bg-[rgb(252,178,22)] hover:text-black flex items-center justify-center transition">
      {icon}
    </button>
  );
}
