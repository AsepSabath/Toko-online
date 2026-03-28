import { products } from '../../../data/products';
import Link from 'next/link';

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product)
    return (
      <main className="max-w-xl mx-auto p-8 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Produk tidak ditemukan.</h1>
          <Link href="/" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors">Kembali ke Beranda</Link>
        </div>
      </main>
    );
  return (
    <main className="max-w-xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
        <img src={product.image} alt={product.name} className="w-48 h-48 object-cover mb-6 rounded-xl border border-gray-200 shadow-sm" />
        <h1 className="text-3xl font-extrabold mb-2 text-gray-800 text-center">{product.name}</h1>
        <p className="mb-2 text-gray-600 text-center">{product.description}</p>
        <p className="font-bold text-blue-600 text-xl mb-6">Rp{product.price.toLocaleString()}</p>
        <Link href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors">Kembali ke Beranda</Link>
      </div>
    </main>
  );
}
