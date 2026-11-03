import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Membership enquiry', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) next.message = 'Message must contain at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <section className="pt-44 pb-24 bg-[#101712]">
        <div className="container-main">
          <p className="section-label mb-5">We'd love to hear from you</p>
          <h1 className="section-title text-7xl md:text-9xl">LET'S <span className="text-lime">CONNECT.</span></h1>
          <p className="text-gray-400 max-w-xl mt-7 leading-8">Questions about membership, coaching or events? Our team is ready to help you take the next step.</p>
        </div>
      </section>

      <section className="section-padding container-main">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle label="Get in touch" title={<>WE'RE HERE <span className="text-lime">FOR YOU.</span></>} description="Reach out to our team and let's find the right sporting experience for you." />
            <div className="space-y-7 mt-9">
              {[
                { icon: MapPin, title: 'Our location', value: 'Bengaluru, Karnataka, India' },
                { icon: Phone, title: 'Call us', value: '+91 98765 43210' },
                { icon: Mail, title: 'Email us', value: 'hello@apexathleticclub.com' },
                { icon: Clock, title: 'Opening hours', value: 'Monday – Friday, 5 AM – 10 PM' },
              ].map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 bg-[#18221a] text-lime flex items-center justify-center"><Icon size={21} /></div>
                  <div><h3 className="font-bold">{title}</h3><p className="text-gray-400 text-sm mt-2">{value}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-[#111814] p-7 md:p-10 card-border">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-lime text-black flex items-center justify-center text-3xl mx-auto">✓</div>
                <h3 className="font-display text-4xl font-bold mt-6">MESSAGE RECEIVED!</h3>
                <p className="text-gray-400 mt-3">Your message has been validated in this demo. No email has actually been sent.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: 'Membership enquiry', message: '' }) }} className="lime-button mt-7">Send another message</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                <h2 className="font-display text-4xl font-bold uppercase mb-7">Send us a message</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2">Your name</label>
                    <input className="form-input" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2">Email address</label>
                    <input type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">Subject</label>
                  <select className="form-input" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                    {['Membership enquiry', 'Sports programmes', 'Coaching enquiry', 'Events and tournaments', 'Other'].map(item => <option key={item}>{item}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">Your message</label>
                  <textarea rows="6" className="form-input resize-none" placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message}</p>}
                </div>
                <button className="lime-button w-full">Send message <ArrowUpRight size={18} /></button>
                <p className="text-xs text-gray-500">Demo form: this form validates your details locally and does not send data to a backend.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="h-[350px] bg-[#111814] border-t border-white/10">
        <iframe
          title="Bengaluru map"
          src="https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed"
          className="w-full h-full grayscale opacity-70"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
