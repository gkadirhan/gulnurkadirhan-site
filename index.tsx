export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        I design ethical, scalable systems that serve people and perform globally.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Strategic operator across AI, humanitarian ops, and global manufacturing. I lead transformation where complexity meets consequence.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/about" className="px-6 py-3 bg-black text-white rounded-2xl shadow hover:opacity-90">
          About Me
        </a>
        <a href="/case-studies" className="px-6 py-3 border-2 border-black rounded-2xl hover:bg-black hover:text-white">
          Case Studies
        </a>
        <a href="/contact" className="px-6 py-3 border-2 border-black rounded-2xl hover:bg-black hover:text-white">
          Let’s Connect
        </a>
      </div>
    </main>
  );
}