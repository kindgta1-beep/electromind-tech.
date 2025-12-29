export default function BetaPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="border border-cyan-400 p-10 rounded-xl max-w-lg text-center">
        <h1 className="text-3xl font-bold text-cyan-400 mb-4">ElectroMind AI – Beta</h1>
        <p className="text-gray-400 mb-6">
          Beta version – Help us improve the platform.
        </p>
        <a href="/signup" className="bg-cyan-500 text-black px-6 py-3 rounded">
          Join Beta
        </a>
      </div>
    </div>
  );
}
