export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-8 mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
        &copy; {new Date().getFullYear()} Akash Chandra &mdash; built with React + Tailwind
      </p>
    </footer>
  )
}
