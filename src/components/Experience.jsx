const jobs = [
  {
    company: 'Ollion (formerly CloudCover)',
    role: 'Software Developer',
    period: 'Mar 2022 – Present',
    location: 'Remote, Pune, India',
    highlights: [
      'Engineered a Cassandra-to-Bigtable Proxy in Go — CQL binary protocol encoding/decoding (DataStax), lexical grammar query translation, Protobuf, and gRPC — in collaboration with Google\'s Bigtable team; the ZDM POC achieved a negligible 5ms latency overhead, enabling Cassandra apps to migrate to Bigtable with zero code changes.',
      'Built a secure, air-gapped AWS Gen-AI chatbot for a financial client (Income Capital) — dynamic model selection, RAG via Bedrock Knowledge Bases, image generation with Titan and Stability AI, hardened with Bedrock Guardrails, SSO (ADFS), and AWS Cognito.',
      'Designed an internal AI chatbot on Gemini AI and Google Cloud\'s AI Platform (Vertex AI, ADK, Gemini SDK) with custom agents and RAG over internal documents — Go backend, React frontend, LangChain/LangGraph orchestration.',
      'Architected a cloud provisioning management portal automating secure account setup across GCP, AWS, and Azure — account provisioning, billing & budgeting, RBAC via Azure AD, and notifications (Go, Vue.js, Postgres, Azure Durable Functions, Node.js, Kubernetes).',
      'Authored a reusable cross-cloud library in Go, JavaScript, and Python — using interfaces, goroutines, and chunking — covering GCS, Pub/Sub, S3, SQS, SNS, logging, auth, and config, with comprehensive unit and integration tests.',
      'Migrated Zee5 streaming services from AWS to GCP — cache purging, transcoding (Ateme Titan), DRM (Nagra), and content stitching services plus Cloud Functions workflows integrating Kafka, GCS, Pub/Sub, and Kubernetes.',
      'Solely rewrote the MintPayments automation test suite from Java Cucumber to JavaScript Playwright.',
      'Built a portal for an ML-powered Under Vehicle Surveillance System (VUSS) with Vue and FastAPI — vehicle registration, image processing, ML model triggering, and results display on Kubernetes, GCS, and Firebase.',
    ],
    tags: ['Go', 'GCP', 'AWS', 'Azure', 'Kubernetes', 'Kafka', 'Vertex AI', 'AWS Bedrock', 'Bigtable'],
  },
  {
    company: 'Skynox Tech',
    role: 'Jr. Full-Stack Developer',
    period: 'Aug 2021 – Feb 2022',
    location: 'Remote, Chandigarh, India',
    highlights: [
      'Created an eCommerce application from scratch for buying Notion templates using Next.js, MongoDB, and Next API middleware.',
      'Integrated Stripe, PayPal, and Coinbase Commerce for payments, and Stripe/PayPal payouts APIs to manage seller balances.',
      'Built reusable components from wireframes with React, Next.js, and TailwindCSS; handled features, bug fixes, and critical production database scripts.',
    ],
    tags: ['Next.js', 'React', 'MongoDB', 'TailwindCSS', 'Stripe'],
  },
  {
    company: 'Dotsquares Technologies',
    role: 'Software Engineer, Intern',
    period: 'Jul 2019 – Oct 2019',
    location: 'Jaipur, Rajasthan, India',
    highlights: [
      'Built a hybrid mobile application in React Native with CRUD functionality tailored to client needs.',
    ],
    tags: ['React Native', 'JavaScript'],
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
