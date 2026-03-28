import Link from 'next/link';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Toko Online Sederhana</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
            <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
            <p className="text-gray-600 mb-2">Rp{product.price.toLocaleString()}</p>
            <Link href={`/produk/${product.id}`} className="text-blue-600 hover:underline">Lihat Detail</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
