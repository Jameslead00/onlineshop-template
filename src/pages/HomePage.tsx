import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Shop</h1>
      <div className="max-w-2xl">
        <p className="mb-4">Discover our amazing collection of products</p>
        <Link 
          to="/items" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Browse Items
        </Link>
      </div>
    </div>
  )
}

