export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <SectionLabel>about</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-12 mt-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Background
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Highly proficient Software Developer with 4+ years of experience specializing in
            high-performance, scalable microservices and distributed systems, primarily using Golang.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            Expert in cloud-native architectures (GCP, AWS), including provisioning, serverless
            functions, and GenAI orchestration. Proven ability to lead complex projects and
            optimize critical systems — zero-downtime migrations, low-latency proxies,
            and internal AI tooling for enterprise clients.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Fluent in English and Hindi.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Quick Facts
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              ['Role', 'Software Developer'],
              ['Company', 'Ollion (formerly CloudCover)'],
              ['Location', 'Pune, India (Remote)'],
              ['Experience', '4+ years'],
              ['Focus', 'Go · Cloud · Distributed Systems'],
              ['Certifications', '4× Google Cloud certified'],
              ['Education', 'B.Tech CS, Rajasthan Technical University'],
              ['Languages', 'English, Hindi'],
            ].map(([label, value]) => (
              <li key={label} className="flex gap-3">
                <span className="font-mono text-zinc-400 dark:text-zinc-600 min-w-28 shrink-0">{label}</span>
                <span className="text-zinc-600 dark:text-zinc-400">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
      # {children}
    </span>
  )
}
