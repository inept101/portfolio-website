const projects = [
  {
    name: 'cassandra-bigtable-proxy',
    description:
      'Go proxy that translates Cassandra binary protocol to Bigtable gRPC calls using DataStax libraries and Protobuf. Achieved 5ms latency overhead — enabling zero-code-change migrations from Cassandra to Bigtable.',
    tags: ['Go', 'gRPC', 'Protobuf', 'Bigtable', 'Cassandra'],
    github: '#',
    demo: null,
  },
  {
    name: 'multi-cloud-provisioner',
    description:
      'Multi-cloud account provisioning portal using Go and Node.js. Automates secure setup across GCP, AWS, and Azure with RBAC (Azure AD), billing APIs, and infrastructure orchestration for enterprise clients.',
    tags: ['Go', 'Node.js', 'GCP', 'AWS', 'Azure'],
    github: '#',
    demo: null,
  },
  {
    name: 'rag-ai-chatbot',
    description:
      'Internal RAG-based AI Chatbot built with Vertex AI and Go. Also implemented an air-gapped AWS Bedrock variant for financial sector clients using Titan and Stability AI models.',
    tags: ['Go', 'Vertex AI', 'AWS Bedrock', 'GenAI', 'RAG'],
    github: '#',
    demo: null,
  },
  {
    name: 'cloud-sdk',
    description:
      'Internal Go SDK using interfaces, goroutines, and chunking to standardize and optimize cross-cloud storage interactions (S3, GCS, Pub/Sub) across all company projects.',
    tags: ['Go', 'GCS', 'S3', 'Pub/Sub', 'Goroutines'],
    github: '#',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
        # projects
      </span>
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2 mb-8">
        Selected Work
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map(project => (
          <article
            key={project.name}
            className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-mono font-medium text-zinc-900 dark:text-zinc-100">
                {project.name}
              </h3>
              <div className="flex gap-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    aria-label="Live demo"
                    className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
    </svg>
  )
}
