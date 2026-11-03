import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Trophy, Users, Target, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import SportCard from '../components/SportCard'

const sports = [
  { number: '01', name: 'Cricket', short: 'Precision. Patience. Power.', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900' },
  { number: '02', name: 'Football', short: 'One team. One dream.', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900' },
  { number: '03', name: 'Basketball', short: 'Own the court.', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900' },
  { number: '04', name: 'Badminton', short: 'Speed meets strategy.', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900' },
  { number: '05', name: 'Tennis', short: 'Every point matters.', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=900' },
]

const stats = [
  { icon: Users, value: '2,500+', label: 'Active Members' },
  { icon: Trophy, value: '50+', label: 'Championships' },
  { icon: Target, value: '25+', label: 'Expert Coaches' },
  { icon: Activity, value: '5', label: 'Sports Disciplines' },
]

export default function Home() {
  return (
    <>
      <section className="relative min-h-[760px] h-screen max-h-[950px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=2000"
          alt="Athlete running on a track"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d0b] via-transparent to-black/20" />

        <div className="container-main relative z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <p className="section-label mb-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-lime" /> Beyond the ordinary
            </p>
            <h1 className="font-display text-[clamp(70px,11vw,145px)] font-black leading-[.83] uppercase max-w-4xl">
              PLAY<br />WITH <span className="text-lime">PURPOSE.</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-8 max-w-xl mt-8">
              More than a sports club. A place where ambition meets action, champions are built, and every move makes you stronger.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <Link to="/membership" className="lime-button">Join the club <ArrowUpRight size={18} /></Link>
              <Link to="/sports" className="outline-button">Explore sports <ArrowRight size={18} /></Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-9 right-[5%] hidden md:block text-right">
          <p className="font-display text-5xl font-bold text-lime">01 / 05</p>
          <p className="text-xs tracking-[3px] uppercase text-gray-400 mt-1">Train. Compete. Conquer.</p>
        </div>
      </section>

      <section className="py-12 bg-lime text-black">
        <div className="container-main grid grid-cols-2 lg:grid-cols-4 gap-9">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon size={32} strokeWidth={1.6} />
              <div>
                <p className="font-display text-4xl font-bold">{value}</p>
                <p className="text-xs uppercase font-bold tracking-wider">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding container-main">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <SectionTitle label="Find your game" title={<>BUILT FOR EVERY <span className="text-lime">ATHLETE.</span></>} description="From the first-time player to the seasoned competitor, find your sport and discover what you're capable of." />
          <Link to="/sports" className="outline-button mb-12 shrink-0">All sports <ArrowUpRight size={17} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sports.map(sport => <SportCard key={sport.name} sport={sport} />)}
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1800" alt="Athletic training" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-[#090d0b]/75" />
        <div className="container-main relative z-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-5">The APEX difference</p>
            <h2 className="section-title">YOUR POTENTIAL.<br /><span className="text-lime">OUR PURPOSE.</span></h2>
          </div>
          <div>
            <p className="text-gray-300 leading-8 text-lg">
              We believe sport has the power to change lives. APEX brings together world-class facilities, passionate coaches and an ambitious community to help you perform at your best.
            </p>
            <Link to="/about" className="lime-button mt-8">Discover our story <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section-padding container-main">
        <SectionTitle label="Start your journey" title={<>YOUR NEXT CHAPTER <span className="text-lime">STARTS HERE.</span></>} description="Find the membership that matches your ambition. Your game, your pace, your APEX." />
        <div className="bg-[#c6ff39] text-black p-9 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[3px]">Your time is now</p>
            <h3 className="font-display text-5xl md:text-7xl font-black uppercase mt-3">MAKE YOUR MOVE.</h3>
            <p className="mt-3 text-sm max-w-lg">Become part of a community that pushes limits and celebrates every victory.</p>
          </div>
          <Link to="/membership" className="bg-black text-white px-7 py-4 font-bold text-sm uppercase flex items-center gap-3 hover:bg-white hover:text-black transition-colors shrink-0">Get started <ArrowUpRight /></Link>
        </div>
      </section>
    </>
  )
}
