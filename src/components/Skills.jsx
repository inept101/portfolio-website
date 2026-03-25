const skills = {
  'Languages & Frameworks': ['Golang', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'Node.js', 'Express', 'React', 'Next.js', 'Vue.js', 'Gin'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'YugabyteDB', 'Bigtable', 'Cassandra', 'NoSQL'],
  'Cloud & DevOps': ['GCP', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Cloud Functions', 'Serverless', 'CI/CD'],
  'Architecture & Tools': ['Microservices', 'gRPC', 'Protobuf', 'Kafka', 'Vertex AI', 'AWS Bedrock', 'REST', 'OOP'],
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
        # skills
      </span>
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2 mb-8">
        Tech Stack
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 rounded border border-zinc-200 dark:border-zinc-700/50 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
