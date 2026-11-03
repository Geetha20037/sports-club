export default function SectionTitle({ label, title, description, center = false }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-12`}>
      <p className="section-label mb-4">{label}</p>
      <h2 className="section-title">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 mt-5 leading-7 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
