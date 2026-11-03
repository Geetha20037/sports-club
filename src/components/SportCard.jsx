import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SportCard({ sport }) {
  return (
    <Link to="/sports" className="group relative overflow-hidden bg-[#111814] card-border image-hover">
      <div className="h-72 overflow-hidden">
        <img
          src={sport.image}
          alt={sport.name}
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <span className="text-lime text-xs font-bold tracking-widest">{sport.number}</span>
          <h3 className="font-display text-4xl font-bold uppercase mt-1">{sport.name}</h3>
          <p className="text-gray-300 text-sm mt-2">{sport.short}</p>
        </div>
        <span className="bg-lime text-black p-3 group-hover:rotate-45 transition-transform">
          <ArrowUpRight size={20} />
        </span>
      </div>
    </Link>
  )
}
