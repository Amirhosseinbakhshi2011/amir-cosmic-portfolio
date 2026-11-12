"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Rocket,
  Github,
  Globe,
  Heart,
  Star,
  Zap,
  Target,
  Music,
} from "lucide-react";
import { useState } from "react";

const skills = [
  { name: "Next.js", level: 92, color: "from-violet-500 to-purple-600" },
  { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
  { name: "Laravel", level: 85, color: "from-red-500 to-orange-500" },
  { name: "TypeScript", level: 88, color: "from-blue-400 to-indigo-500" },
  { name: "Python", level: 80, color: "from-yellow-400 to-green-500" },
  { name: "ریاضی", level: 95, color: "from-pink-500 to-rose-500" },
];

const projects = [
  {
    title: "MathGalaxy",
    desc: "پروژه پایتونی تولید فراکتال و هنر ریاضی با انیمیشن زوم و رنگ‌بندی کیهانی",
    tech: ["Python", "NumPy", "Matplotlib", "Rich"],
    link: "https://github.com/Amirhosseinbakhshi2011/MathGalaxy",
    emoji: "🌌",
  },
  {
    title: "این سایت",
    desc: "پورتفولیو شخصی با Next.js 15، Framer Motion و طراحی کیهانی",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://github.com/Amirhosseinbakhshi2011/amir-cosmic-portfolio",
    emoji: "🚀",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen">
      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-violet-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-xl font-bold tracking-tight"
          >
            <span className="text-gradient">امیرحسین</span>
            <span className="text-violet-400">.dev</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm text-violet-200/80">
            <a href="#about" className="hover:text-white transition">درباره من</a>
            <a href="#skills" className="hover:text-white transition">مهارت‌ها</a>
            <a href="#projects" className="hover:text-white transition">پروژه‌ها</a>
            <a href="#dream" className="hover:text-white transition">رویا</a>
          </div>

          <a
            href="https://github.com/Amirhosseinbakhshi2011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 hover:bg-violet-600/40 transition text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-violet-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            ۱۶ ساله • ایران → آمریکا
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            <span className="text-gradient">امیرحسین بخشی</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-violet-200/90 mb-4 font-light"
          >
            Full-Stack Developer • Math Lover • Future Billionaire
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-violet-300/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            برنامه‌نویس فول‌استک با Next.js و React و Laravel.
            عاشق ریاضی، آهنگ‌های معین، و ساختن چیزهای خفن.
            هنوز توی هیچ رابطه‌ای نبودم چون اول باید میلیاردر شم.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 font-medium shadow-lg shadow-violet-500/25 transition-all hover:scale-105"
            >
              ببین پروژه‌هام چیه
            </a>
            <a
              href="https://github.com/Amirhosseinbakhshi2011"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full glass hover:bg-white/10 font-medium transition-all hover:scale-105"
            >
              GitHub من
            </a>
          </motion.div>

          {/* Floating icons */}
          <div className="absolute -top-10 left-10 opacity-20 animate-float hidden lg:block">
            <Brain size={48} className="text-violet-400" />
          </div>
          <div className="absolute top-20 right-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
            <Code2 size={40} className="text-cyan-400" />
          </div>
          <div className="absolute bottom-32 left-20 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
            <Rocket size={44} className="text-pink-400" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
          >
            <span className="text-gradient">درباره من</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-600/20 flex items-center justify-center">
                  <Code2 className="text-violet-400" />
                </div>
                <h3 className="text-xl font-bold">برنامه‌نویس فول‌استک</h3>
              </div>
              <p className="text-violet-200/80 leading-relaxed">
                فرانت‌اند با <strong className="text-white">Next.js</strong> و{" "}
                <strong className="text-white">React</strong>،
                بک‌اند با <strong className="text-white">Laravel</strong>.
                عاشق ساختن رابط‌های سریع و تمیز هستم.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-600/20 flex items-center justify-center">
                  <Brain className="text-pink-400" />
                </div>
                <h3 className="text-xl font-bold">عاشق ریاضی</h3>
              </div>
              <p className="text-violet-200/80 leading-relaxed">
                ریاضی برام فقط درس نیست، یه زبان برای فهمیدن جهانه.
                از فراکتال‌ها تا معادلات پیچیده، همه‌ش برام جذابه.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 flex items-center justify-center">
                  <Music className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">آهنگ‌های معین</h3>
              </div>
              <p className="text-violet-200/80 leading-relaxed">
                وقتی کد می‌زنم یا ریاضی کار می‌کنم، صدای معین همراهمه.
                یه حس نوستالژی و انرژی عجیب داره.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-600/20 flex items-center justify-center">
                  <Target className="text-amber-400" />
                </div>
                <h3 className="text-xl font-bold">هدف بزرگ</h3>
              </div>
              <p className="text-violet-200/80 leading-relaxed">
                تا وقتی میلیاردر نشم سمت هیچ دختری نمی‌رم.
                اول باید خودم رو بسازم، بعد همه چیز.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
          >
            <span className="text-gradient">مهارت‌ها</span>
          </motion.h2>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                onMouseEnter={() => setHoveredSkill(i)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="glass rounded-2xl p-5 transition-all duration-300"
                style={{
                  transform: hoveredSkill === i ? "scale(1.02)" : "scale(1)",
                  boxShadow:
                    hoveredSkill === i
                      ? "0 0 30px rgba(139, 92, 246, 0.25)"
                      : "none",
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-lg">{skill.name}</span>
                  <span className="text-violet-300 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-violet-950/80 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
          >
            <span className="text-gradient">پروژه‌ها</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="group glass rounded-3xl p-8 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{project.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-300 transition">
                  {project.title}
                </h3>
                <p className="text-violet-200/70 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs bg-violet-600/20 text-violet-300 border border-violet-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DREAM ===== */}
      <section id="dream" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-amber-300 mb-8">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              رویای بزرگ
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              از <span className="text-gradient">ایران</span> به{" "}
              <span className="text-gradient-gold">آمریکا</span>
            </h2>

            <p className="text-xl text-violet-200/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              ۱۶ سالمه. توی هلدینگ TO کار می‌کنم.
              می‌خوام برم آمریکا، شرکت خودم رو بسازم و میلیاردر بشم.
              <br />
              <span className="text-violet-300">
                ریاضی + کدنویسی + اراده = آینده‌ای که می‌خوام
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-violet-300/70">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-yellow-400" />
                تمرکز روی رشد
              </div>
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-pink-400" />
                اول خودم، بعد بقیه
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-cyan-400" />
                جهان‌وطنی
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-12 px-6 border-t border-violet-500/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-violet-300/60">
          <div>
            ساخته شده با{" "}
            <span className="text-pink-400">♥</span> و ریاضی توسط امیرحسین بخشی
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Amirhosseinbakhshi2011"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <span>•</span>
            <span>۲۰۲۶</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
