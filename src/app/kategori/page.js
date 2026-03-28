import { products } from '../../data/products';
import Link from 'next/link';
import { useState } from 'react';

const kategoriList = [
  'Semua',
  ...Array.from(new Set(products.map((p) => p.category || 'Lainnya'))),
];

export default function KategoriPage() {
  const [selected, setSelected] = useState('Semua');
  const filtered = selected === 'Semua'
    ? products
    : products.filter((p) => (p.category || 'Lainnya') === selected);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Kategori Produk</h1>
      <div className="flex gap-4 mb-8 flex-wrap">
        {kategoriList.map((k) => (
          <button
            key={k}
            onClick={() => setSelected(k)}
            className={`px-4 py-2 rounded-full border-2 transition-colors font-bold ${selected === k ? 'bg-pink-600 text-white border-pink-400' : 'bg-gray-900 text-pink-300 border-pink-700'}`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-100">
            <img src={product.image} alt={product.name} className="w-36 h-36 object-cover mb-4 rounded-xl border border-gray-200 shadow-sm" />
            <h2 className="font-bold text-xl mb-2 text-gray-800 text-center">{product.name}</h2>
            <p className="text-blue-600 font-semibold mb-2 text-lg">Rp{product.price.toLocaleString()}</p>
            <Link href={`/produk/${product.id}`} className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors">Lihat Detail</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
