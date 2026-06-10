const education = [
  {
    degree: 'Bachelor of Technology (Computer Science)',
    school: 'Rajasthan Technical University',
    location: 'Jaipur, Rajasthan, India',
    period: '2016 – 2020',
  },
  {
    degree: 'Class XII (CBSE)',
    school: 'Gurunanak Higher Secondary School',
    location: 'Ranchi, Jharkhand, India',
    period: '2015 – 2016',
  },
]

const certifications = [
  'GCP Professional Cloud Developer (2026)',
  'GCP Generative AI Leader (2026)',
  'GCP Associate Cloud Engineer (2023)',
  'GCP Digital Leader (2023)',
]

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
        # education
      </span>
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2 mb-8">
        Education & Certifications
      </h2>
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="space-y-6">
          {education.map(item => (
            <div key={item.degree}>
              <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{item.degree}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{item.school}</p>
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600 mt-1">{item.period}</p>
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{item.location}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
            Certifications
          </h3>
          <ul className="space-y-2">
            {certifications.map(cert => (
              <li key={cert} className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                <span className="text-zinc-300 dark:text-zinc-700 shrink-0">—</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
