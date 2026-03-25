const jobs = [
  {
    company: 'Ollion (formerly CloudCover)',
    role: 'Software Developer',
    period: 'Mar 2022 – Present',
    location: 'Remote, Pune, India',
    highlights: [
      'Architected a multi-cloud provisioning portal (Go + Node.js) to automate secure account setup across GCP, AWS, and Azure — including RBAC, billing APIs, and infrastructure provisioning for enterprise clients.',
      'Engineered a Cassandra-to-Bigtable Proxy in Go using DataStax binary protocol encoding/decoding, Protobuf, and gRPC in collaboration with Google\'s Bigtable team.',
      'Spearheaded the ZDM POC achieving a negligible 5ms latency overhead, enabling Cassandra apps to migrate to Bigtable with zero code changes.',
      'Developed an internal RAG-based AI Chatbot using Vertex AI (Go); built a secure air-gapped AWS Bedrock solution for financial clients using Titan and Stability AI models.',
      'Authored internal Go SDKs using interfaces, goroutines, and chunking to standardize cross-cloud interactions (S3, GCS, Pub/Sub) across company projects.',
      'Contributed to backend migration of Zee5 video streaming services from AWS to GCP — integrated Ateme Titan for transcoding, Nagra DRM for content security, and Kafka for inter-service communication.',
    ],
    tags: ['Go', 'GCP', 'AWS', 'Azure', 'gRPC', 'Kafka', 'Vertex AI', 'Bigtable', 'Cassandra'],
  },
  {
    company: 'Skynox Tech',
    role: 'Jr. Full-Stack Developer',
    period: 'Before Mar 2022',
    location: 'Remote, Chandigarh, India',
    highlights: [],
    tags: ['JavaScript', 'Node.js', 'React'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
        # experience
      </span>
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2 mb-8">
        Work History
      </h2>
      <div className="space-y-10">
        {jobs.map(job => (
          <div key={job.company} className="grid sm:grid-cols-[1fr_2fr] gap-4 sm:gap-8">
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{job.company}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{job.role}</p>
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600 mt-1">{job.period}</p>
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{job.location}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {job.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {job.highlights.length > 0 && (
              <ul className="space-y-2">
                {job.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    <span className="text-zinc-300 dark:text-zinc-700 mt-1 shrink-0">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
