import { useState } from 'react'
import { CalendarDays, MapPin, ArrowUpRight, Trophy } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const events = [
  { id: 1, name: 'APEX Cricket Cup', sport: 'Cricket', date: 'November 15, 2026', day: '15', month: 'NOV', location: 'APEX Main Ground', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900', description: 'A competitive cricket tournament bringing together local teams for a day of skill, teamwork and sportsmanship.' },
  { id: 2, name: 'City Football Challenge', sport: 'Football', date: 'November 22, 2026', day: '22', month: 'NOV', location: 'APEX Football Arena', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900', description: 'Experience the energy of competitive football with team matches, exciting challenges and community spirit.' },
  { id: 3, name: 'Basketball Showdown', sport: 'Basketball', date: 'December 05, 2026', day: '05', month: 'DEC', location: 'APEX Indoor Court', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900', description: 'A fast-paced basketball event featuring teams, friendly rivalries and an exciting court-side atmosphere.' },
  { id: 4, name: 'Badminton Open', sport: 'Badminton', date: 'December 12, 2026', day: '12', month: 'DEC', location: 'APEX Indoor Arena', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900', description: 'A tournament for badminton players to test their speed, technique and competitive spirit.' },
]

export default function Events() {
  const [filter, setFilter] = useState('All')
  const [registered, setRegistered] = useState([])
  const categories = ['All', 'Cricket', 'Football', 'Basketball', 'Badminton']
  const filtered = filter === 'All' ? events : events.filter(event => event.sport === filter)

  return (
    <>
      <section className="pt-44 pb-24 bg-[#101712]">
        <div className="container-main">
          <p className="section-label mb-5">The competition starts here</p>
          <h1 className="section-title text-7xl md:text-9xl">PLAY. <span className="text-lime">COMPETE.</span><br />CONQUER.</h1>
          <p className="text-gray-400 max-w-xl mt-7 leading-8">From friendly matches to competitive tournaments, discover what's happening in the APEX community.</p>
        </div>
      </section>

      <section className="section-padding container-main">
        <SectionTitle label="Save your date" title={<>UPCOMING <span className="text-lime">EVENTS.</span></>} description="Get involved, meet fellow athletes and experience the excitement of competition." />
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(category => (
            <button key={category} onClick={() => setFilter(category)} className={`px-5 py-3 text-xs uppercase tracking-wider font-bold transition-colors ${filter === category ? 'bg-lime text-black' : 'border border-gray-700 text-gray-300 hover:border-lime'}`}>{category}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(event => (
            <article key={event.id} className="bg-[#111814] card-border overflow-hidden">
              <div className="h-64 relative overflow-hidden">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-lime text-black w-16 h-16 flex flex-col justify-center items-center">
                  <span className="font-display text-3xl font-black leading-none">{event.day}</span>
                  <span className="text-[10px] font-black tracking-widest">{event.month}</span>
                </div>
                <span className="absolute top-4 right-4 bg-black/80 px-4 py-2 text-lime text-xs font-bold">{event.sport}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-4xl font-bold">{event.name}</h3>
                <p className="text-gray-400 text-sm leading-7 mt-3">{event.description}</p>
                <div className="flex flex-wrap gap-5 text-xs text-gray-400 mt-6">
                  <span className="flex items-center gap-2"><CalendarDays size={15} className="text-lime" />{event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={15} className="text-lime" />{event.location}</span>
                </div>
                <button onClick={() => setRegistered(prev => prev.includes(event.id) ? prev : [...prev, event.id])} disabled={registered.includes(event.id)} className="lime-button w-full mt-7 disabled:opacity-60 disabled:cursor-not-allowed">
                  {registered.includes(event.id) ? 'Interest registered ✓' : <>Register interest <ArrowUpRight size={17} /></>}
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6">Event details are sample content for this demonstration website. Registration records are stored only in the current page session.</p>
      </section>

      <section className="bg-[#111814] py-16">
        <div className="container-main flex flex-col md:flex-row gap-7 items-center justify-between">
          <div className="flex items-center gap-5"><Trophy className="text-lime" size={44} /><div><h3 className="font-display text-4xl font-bold">READY FOR THE NEXT CHALLENGE?</h3><p className="text-gray-400 text-sm mt-2">Your next victory starts with showing up.</p></div></div>
          <a href="/membership" className="lime-button">Join APEX <ArrowUpRight /></a>
        </div>
      </section>
    </>
  )
}
