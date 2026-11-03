import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const sports = [
  { name: 'Cricket', number: '01', category: 'Team Sport', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1000', text: 'Develop your batting, bowling and fielding skills with structured practice sessions, match simulations and expert guidance.' },
  { name: 'Football', number: '02', category: 'Team Sport', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1000', text: 'Build teamwork, speed, stamina and tactical awareness through training sessions designed for every skill level.' },
  { name: 'Basketball', number: '03', category: 'Court Sport', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000', text: 'Master ball handling, shooting, defence and game strategy on our dedicated basketball courts.' },
  { name: 'Badminton', number: '04', category: 'Racquet Sport', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1000', text: 'Improve agility, coordination and technique with guided drills, practice games and friendly competitions.' },
  { name: 'Tennis', number: '05', category: 'Racquet Sport', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1000', text: 'From your first serve to advanced match play, develop confidence and consistency on the court.' },
]

export default function Sports() {
  return (
    <>
      <section className="pt-44 pb-24 bg-[#101712]">
        <div className="container-main">
          <p className="section-label mb-5">Discover your discipline</p>
          <h1 className="section-title text-7xl md:text-9xl">FIND YOUR<br /><span className="text-lime">ARENA.</span></h1>
          <p className="text-gray-400 max-w-xl mt-7 leading-8">Five sports. Countless opportunities. Choose your game and take the first step towards your next personal best.</p>
        </div>
      </section>

      <section className="section-padding container-main">
        <SectionTitle label="Our disciplines" title={<>ONE CLUB. <span className="text-lime">FIVE GAMES.</span></>} />
        <div className="space-y-8">
          {sports.map((sport, i) => (
            <article key={sport.name} className={`grid md:grid-cols-2 bg-[#111814] card-border overflow-hidden ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="h-72 md:h-[350px] overflow-hidden">
                <img src={sport.image} alt={sport.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-lime text-xs font-bold tracking-[3px]">{sport.number} / {sport.category}</p>
                <h2 className="font-display text-6xl font-black uppercase mt-3">{sport.name}</h2>
                <p className="text-gray-400 leading-7 mt-5">{sport.text}</p>
                <Link to="/membership" className="text-lime flex items-center gap-2 font-bold text-sm mt-8">Join this programme <ArrowUpRight size={18} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-lime text-black py-16">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-7">
          <h2 className="font-display text-5xl md:text-6xl font-black">READY TO PLAY?</h2>
          <Link to="/membership" className="bg-black text-white px-7 py-4 font-bold uppercase text-sm">Become a member <ArrowUpRight className="inline ml-2" size={18} /></Link>
        </div>
      </section>
    </>
  )
}
