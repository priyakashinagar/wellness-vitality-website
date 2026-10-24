import Button from '../components/Button'

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-24 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-medium mb-4">Coming Soon</h1>
      <p className="text-gray-600 mb-8">This page has not been built yet.</p>
      <Button to="/">Back to Home</Button>
    </main>
  )
}
