export default function CheckoutPage() {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        
        <div className="max-w-lg">
          <div className="border p-4 rounded shadow mb-4">
            <h3 className="font-bold mb-2">Sample Cart Items</h3>
            <p>Sample Product 1 - $29.99</p>
            <p>Sample Product 2 - $29.99</p>
            <p>Sample Product 3 - $29.99</p>
          </div>
  
          <div className="border p-4 rounded shadow">
            <p className="text-xl font-bold">Total: $89.97</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }
  