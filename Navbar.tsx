export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-white/10">
      <h1 className="text-xl font-bold text-cyan-400">ElectroMind AI</h1>
      <div className="flex gap-6 text-sm">
        <a>Electronics</a>
        <a>Programming</a>
        <a>AI Assistant</a>
      </div>
    </nav>
  );
}
