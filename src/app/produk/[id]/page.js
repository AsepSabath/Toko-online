import { products } from '../../../data/products';
import Link from 'next/link';

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return <div>Produk tidak ditemukan.</div>;
  return (
    <main className="max-w-xl mx-auto p-4">
      <img src={product.image} alt={product.name} className="w-48 h-48 object-cover mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold mb-4">Rp{product.price.toLocaleString()}</p>
      <Link href="/" className="text-blue-600 hover:underline">Kembali ke Beranda</Link>
    </main>
  );
}
