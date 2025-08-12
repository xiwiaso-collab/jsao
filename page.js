export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🚀 Welcome to My Next.js App</h1>
      <p className="text-lg text-gray-600 mb-8">
        This project is deployed on <span className="font-semibold">Vercel</span> with Tailwind CSS
      </p>
      <a
        href="https://vercel.com"
        target="_blank"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go to Vercel
      </a>
    </main>
  )
}
