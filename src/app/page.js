import Link from 'next/link';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700 drop-shadow-lg tracking-tight">Selamat datang di RZKstore</h1>
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
            <Link
              href={`/produk/${product.id}`}
              className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
