import { Link } from 'react-router-dom'
import { ArrowUpRight, Target, Eye, Heart, Trophy } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <>
      <section className="pt-44 pb-24 bg-[#101712]">
        <div className="container-main">
          <p className="section-label mb-5">Who we are</p>
          <h1 className="section-title text-7xl md:text-9xl">MORE THAN<br /><span className="text-lime">A GAME.</span></h1>
          <p className="text-gray-400 max-w-xl mt-7 leading-8">We are a community of athletes, dreamers and doers. United by sport. Driven by progress.</p>
        </div>
      </section>

      <section className="section-padding container-main grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1000" alt="Athletes training together" className="w-full h-[480px] object-cover" />
          <div className="absolute -bottom-5 -right-5 bg-lime text-black p-7 hidden md:block">
            <p className="font-display text-5xl font-black">2015</p>
            <p className="text-xs font-bold uppercase tracking-widest">Our beginning</p>
          </div>
        </div>
        <div>
          <SectionTitle label="Our story" title={<>A LEGACY OF <span className="text-lime">MOVEMENT.</span></>} />
          <p className="text-gray-400 leading-8 mb-5">APEX Athletic Club was built on a simple belief: everyone deserves the opportunity to discover their strength. What began as a small community of sports enthusiasts has grown into a multi-sport destination for people who love to move, compete and improve.</p>
          <p className="text-gray-400 leading-8">Today, we bring athletes of every level together through quality facilities, dedicated coaching and a culture that celebrates effort as much as achievement.</p>
          <Link to="/sports" className="lime-button mt-8">Explore our sports <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <section className="bg-[#111814] section-padding">
        <div className="container-main">
          <SectionTitle label="What drives us" title={<>OUR CORE <span className="text-lime">BELIEFS.</span></>} center />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Target, title: 'Our Mission', text: 'To inspire people of all ages and abilities to embrace sport, develop their skills and achieve their personal best.' },
              { icon: Eye, title: 'Our Vision', text: 'To build an inclusive sporting community known for excellence, opportunity and a lifelong passion for active living.' },
              { icon: Heart, title: 'Our Values', text: 'Respect, teamwork, discipline and integrity shape every training session, competition and connection.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-8 bg-[#090d0b] card-border">
                <Icon className="text-lime mb-7" size={38} />
                <h3 className="font-display text-3xl uppercase font-bold mb-4">{title}</h3>
                <p className="text-gray-400 text-sm leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding container-main">
        <SectionTitle label="Our journey" title={<>PROGRESS IS OUR <span className="text-lime">TRADITION.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ['2015', 'The Beginning', 'APEX opens its doors with a mission to make sport accessible.'],
            ['2018', 'Growing Together', 'New sports programmes and training facilities are introduced.'],
            ['2022', 'Raising Standards', 'Our athlete development and coaching programmes expand.'],
            ['2026', 'The Next Chapter', 'A bigger vision, a stronger community and new possibilities.'],
          ].map(([year, title, text]) => (
            <div key={year} className="border-t-2 border-lime pt-6">
              <p className="font-display text-5xl font-black text-lime">{year}</p>
              <h3 className="font-bold text-lg mt-4">{title}</h3>
              <p className="text-gray-400 text-sm leading-7 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lime py-16">
        <div className="container-main flex flex-col md:flex-row justify-between items-center gap-7 text-black">
          <div><Trophy size={34} /><h2 className="font-display text-5xl font-black mt-3">BE PART OF THE STORY.</h2></div>
          <Link to="/membership" className="bg-black text-white px-7 py-4 font-bold uppercase text-sm flex gap-3 items-center">Join APEX <ArrowUpRight /></Link>
        </div>
      </section>
    </>
  )
}
