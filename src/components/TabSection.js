// import "./TeamSection.css";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Instagram, X } from "lucide-react";
import ManavImg from "../assets/img/teams/manav gupta.png";


const team = [
  {
    name: "Manav",
    role: "Founder",
    desc: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
 img: ManavImg,
  },
  {
    
    name: "Rams Lesli",
    role: "Sales Executive",
    desc: "I'm the chief executive of sales and closed valuable deals that helped pagedone in growth.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Harshita Patel",
    role: "Co‑Founder & CEO",
    desc: "I am the co founder of pagedone and we've pushed our limit so far to make it successful.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Alexa Kimberly",
    role: "Lead Designer",
    desc: "I've been lead designer for pagedone since the beginning of it and enjoyed every bit.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];

export default function TabSection() {
  return (
    <section className="text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center"
                 id="green-yellow"
        >
          Meet the brains
        </motion.h2>
        <p className="text-center text-slate-400 mt-2">
          These people work on making our product best.
        </p> */}

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="relative">
                <img
                  src={m.img}
                  alt={m.name}
                 className="w-28 h-28 rounded-full object-cover border-4 border-[#E85D24]"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold bg-[linear-gradient(0deg,#FCB216_0%,#E85D24_35%,#D91B57_70%,#63205F_100%)] bg-clip-text text-transparent">{m.name}</h3>
                <p className="text-[rgb(252,178,22)] text-sm">{m.role}</p>
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
