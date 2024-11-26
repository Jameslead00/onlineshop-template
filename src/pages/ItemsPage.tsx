import { useNavigate } from 'react-router-dom';

export default function ItemsPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <button 
          onClick={() => navigate('/checkout')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Cart
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border p-4 rounded shadow">
            <h3 className="font-bold">Sample Product {item}</h3>
            <p className="text-gray-600">This is a sample product description</p>
            <p className="text-lg font-bold mt-2">$29.99</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
