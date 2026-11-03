import { Link } from 'react-router-dom'
import { ArrowUpRight, Award } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const coaches = [
  { name: 'Arjun Mehta', role: 'Head Cricket Coach', experience: '12 Years Experience', specialty: 'Batting & Match Strategy', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700' },
  { name: 'Rahul Sharma', role: 'Football Coach', experience: '10 Years Experience', specialty: 'Tactics & Team Development', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700' },
  { name: 'David Thomas', role: 'Basketball Coach', experience: '9 Years Experience', specialty: 'Shooting & Court Skills', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700' },
  { name: 'Priya Nair', role: 'Badminton Coach', experience: '8 Years Experience', specialty: 'Footwork & Technique', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700' },
  { name: 'Karan Malhotra', role: 'Tennis Coach', experience: '11 Years Experience', specialty: 'Serve & Match Performance', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700' },
  { name: 'Ananya Rao', role: 'Performance Trainer', experience: '7 Years Experience', specialty: 'Strength & Conditioning', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700' },
]

export default function Coaches() {
  return (
    <>
      <section className="pt-44 pb-24 bg-[#101712]">
        <div className="container-main">
          <p className="section-label mb-5">Meet your mentors</p>
          <h1 className="section-title text-7xl md:text-9xl">GUIDED BY<br /><span className="text-lime">EXPERTS.</span></h1>
          <p className="text-gray-400 max-w-xl mt-7 leading-8">Great athletes are built with great guidance. Meet the people who help our community perform at its best.</p>
        </div>
      </section>

      <section className="section-padding container-main">
        <SectionTitle label="Our coaching team" title={<>THE PEOPLE BEHIND <span className="text-lime">THE PROGRESS.</span></>} description="Experienced professionals who bring knowledge, energy and a genuine passion for developing athletes." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach, i) => (
            <article key={coach.name} className="bg-[#111814] card-border group overflow-hidden">
              <div className="h-[340px] overflow-hidden relative">
                <img src={coach.image} alt={coach.name} className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <span className="absolute top-4 left-4 bg-lime text-black text-xs font-black px-3 py-2">0{i + 1}</span>
              </div>
              <div className="p-6">
                <p className="text-lime text-xs font-bold uppercase tracking-wider">{coach.role}</p>
                <h3 className="font-display text-4xl font-bold mt-2">{coach.name}</h3>
                <div className="border-t border-white/10 my-5" />
                <p className="flex items-center gap-2 text-sm text-gray-300"><Award size={16} className="text-lime" />{coach.experience}</p>
                <p className="text-gray-400 text-sm mt-3">Specialization: {coach.specialty}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6">Coach names, profiles and experience are illustrative demonstration content.</p>
      </section>

      <section className="bg-lime py-16 text-black">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-7">
          <div><p className="text-xs uppercase font-black tracking-[3px]">Take the next step</p><h2 className="font-display text-5xl md:text-6xl font-black mt-2">TRAIN WITH PURPOSE.</h2></div>
          <Link to="/membership" className="bg-black text-white px-7 py-4 font-bold uppercase text-sm flex items-center gap-2">Join APEX <ArrowUpRight /></Link>
        </div>
      </section>
    </>
  )
}
