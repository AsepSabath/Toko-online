
import Link from 'next/link';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

  const { cart, addToCart } = useCart();
  return (
    <main className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-lg tracking-tight">selamat datang di RZKstore</h1>
        <Link href="/cart" className="relative px-4 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition-colors font-bold">
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full px-2 text-xs font-bold border-2 border-pink-700 animate-bounce">
              {cart.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          )}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center border border-gray-100 hover:-translate-y-1 hover:scale-105 transform"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-36 h-36 object-cover mb-4 rounded-xl border border-gray-200 shadow-sm"
            />
            <h2 className="font-bold text-xl mb-2 text-gray-800 text-center">{product.name}</h2>
            <p className="text-blue-600 font-semibold mb-2 text-lg">Rp{product.price.toLocaleString()}</p>
            <div className="flex gap-2 mt-auto">
              <Link
                href={`/produk/${product.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
              >
                Lihat Detail
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-yellow-400 text-black rounded-full shadow hover:bg-yellow-500 font-bold border-2 border-pink-700"
              >
                + Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
