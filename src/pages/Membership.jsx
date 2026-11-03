import { useState } from 'react'
import { Check, ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const plans = [
  { name: 'Starter', price: '999', period: 'month', description: 'Your first step into the APEX community.', features: ['Access to 1 selected sport', 'Group training sessions', 'Member community access', 'Standard facility access'] },
  { name: 'Pro', price: '1,999', period: 'month', description: 'More training. More opportunities.', popular: true, features: ['Access to 3 selected sports', 'Priority court booking', 'Group coaching sessions', 'Member-only tournaments', 'Fitness assessment'] },
  { name: 'Elite', price: '3,499', period: 'month', description: 'The complete APEX experience.', features: ['Access to all 5 sports', 'Personal coaching sessions', 'Unlimited facility access', 'Priority tournament entry', 'Monthly performance review'] },
]

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState('Pro')
  const [form, setForm] = useState({ name: '', email: '', phone: '', sport: 'Cricket', plan: 'Pro' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const choosePlan = (plan) => {
    setSelectedPlan(plan)
    setForm(prev => ({ ...prev, plan }))
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!/^[6-9]\d{9}$/.test(form.phone)) next.phone = 'Enter a valid 10-digit Indian mobile number.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  return (
    <>
      <section className="pt-44 pb-24 bg-[#101712]">
        <div className="container-main">
          <p className="section-label mb-5">Membership at APEX</p>
          <h1 className="section-title text-7xl md:text-9xl">INVEST IN<br /><span className="text-lime">YOUR GAME.</span></h1>
          <p className="text-gray-400 max-w-xl mt-7 leading-8">Find a plan that fits your goals. Every membership gives you a place to grow, compete and belong.</p>
        </div>
      </section>

      <section className="section-padding container-main">
        <SectionTitle label="Choose your plan" title={<>YOUR GAME. <span className="text-lime">YOUR PLAN.</span></>} center description="Transparent pricing. No complicated commitments. Choose your level and get moving." />
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map(plan => (
            <div key={plan.name} className={`relative p-8 bg-[#111814] border ${plan.popular ? 'border-lime' : 'border-[#303b32]'}`}>
              {plan.popular && <span className="absolute -top-3 left-8 bg-lime text-black px-4 py-1 text-[10px] font-black tracking-widest">MOST POPULAR</span>}
              <p className="text-lime section-label">{plan.name}</p>
              <h3 className="font-display text-5xl font-bold mt-5">₹{plan.price}<span className="text-sm text-gray-500 font-sans font-normal"> / {plan.period}</span></h3>
              <p className="text-gray-400 text-sm mt-4 min-h-10">{plan.description}</p>
              <div className="border-t border-white/10 my-7" />
              <ul className="space-y-4">
                {plan.features.map(feature => <li key={feature} className="flex items-center gap-3 text-sm text-gray-300"><Check size={17} className="text-lime shrink-0" />{feature}</li>)}
              </ul>
              <button onClick={() => choosePlan(plan.name)} className={`w-full mt-9 py-4 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 ${plan.popular ? 'bg-lime text-black' : 'border border-gray-600 hover:border-lime hover:text-lime'} transition-colors`}>
                Choose {plan.name} <ArrowUpRight size={17} />
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-6">Illustrative membership pricing for this demonstration website. Contact the club to confirm actual fees and availability.</p>
      </section>

      <section id="register" className="bg-[#111814] section-padding">
        <div className="container-main grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle label="Take the first step" title={<>LET'S GET YOU <span className="text-lime">STARTED.</span></>} description="Fill in your details and our membership team will get in touch with you." />
            <div className="mt-8 space-y-5 text-gray-400 text-sm">
              <p>✓ Choose your preferred sport and membership.</p>
              <p>✓ Share your contact details.</p>
              <p>✓ Our team will contact you about the next steps.</p>
            </div>
          </div>
          <div className="bg-[#090d0b] p-7 md:p-9 card-border">
            {submitted ? (
              <div className="text-center py-14">
                <div className="w-16 h-16 bg-lime text-black rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
                <h3 className="font-display text-4xl font-bold mt-6">THANK YOU!</h3>
                <p className="text-gray-400 mt-3">Your registration interest has been recorded in this demo. The club team would contact you next.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', sport: 'Cricket', plan: 'Pro' }); setSelectedPlan('Pro') }} className="lime-button mt-7">Submit another response</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="font-display text-3xl font-bold uppercase mb-7">Membership registration</h3>
                {[
                  { key: 'name', label: 'Full name', placeholder: 'Enter your full name' },
                  { key: 'email', label: 'Email address', placeholder: 'you@example.com' },
                  { key: 'phone', label: 'Mobile number', placeholder: '10-digit mobile number' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">{field.label}</label>
                    <input className="form-input" placeholder={field.placeholder} value={form[field.key]} onChange={e => setForm({ ...form, [field.key]: e.target.value })} />
                    {errors[field.key] && <p className="text-red-400 text-xs mt-2">{errors[field.key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Preferred sport</label>
                  <select className="form-input" value={form.sport} onChange={e => setForm({ ...form, sport: e.target.value })}>
                    {['Cricket', 'Football', 'Basketball', 'Badminton', 'Tennis'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">Membership plan</label>
                  <select className="form-input" value={form.plan} onChange={e => { setForm({ ...form, plan: e.target.value }); setSelectedPlan(e.target.value) }}>
                    {plans.map(p => <option key={p.name}>{p.name}</option>)}
                  </select>
                </div>
                <button className="lime-button w-full">Submit registration <ArrowUpRight size={17} /></button>
                <p className="text-xs text-gray-500">Demo form: information is validated locally and is not sent to a server.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
