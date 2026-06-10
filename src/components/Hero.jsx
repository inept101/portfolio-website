export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
      <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400 mb-4">
        Hello, world. I&apos;m
      </p>
      <h1 className="text-4xl sm:text-6xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
        Akash Chandra
      </h1>
      <h2 className="text-xl sm:text-2xl font-normal text-zinc-500 dark:text-zinc-400 mb-6">
        Software Developer &mdash; <span className="text-zinc-700 dark:text-zinc-300">Golang & Cloud</span>
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-10">
        4+ years building high-performance microservices and distributed systems in Go.
        Specializing in cloud-native architectures on GCP &amp; AWS, low-latency proxies,
        zero-downtime migrations, and GenAI orchestration.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm font-medium rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors"
        >
          Resume
        </a>
      </div>
    </section>
  )
}
