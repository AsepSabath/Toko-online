"use client";
import { useState } from 'react';
import { products as initialProducts } from '../../data/products';

export default function AdminPage() {
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: '', price: '', image: '', description: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      { ...form, id: Date.now(), price: Number(form.price) }
    ]);
    setForm({ name: '', price: '', image: '', description: '' });
  };

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Produk</h1>
      <form onSubmit={handleAdd} className="mb-8 flex flex-col gap-3 bg-gray-900 p-4 rounded-xl">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Produk" required className="rounded px-3 py-2 bg-gray-800 border border-gray-600 text-white" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Harga" type="number" required className="rounded px-3 py-2 bg-gray-800 border border-gray-600 text-white" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="URL Gambar" required className="rounded px-3 py-2 bg-gray-800 border border-gray-600 text-white" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi" required className="rounded px-3 py-2 bg-gray-800 border border-gray-600 text-white" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors">Tambah Produk</button>
      </form>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="mb-4 p-4 rounded-xl bg-gray-800 text-white flex flex-col gap-1">
            <span className="font-bold text-lg">{p.name}</span>
            <span>Rp{p.price.toLocaleString()}</span>
            <span>{p.description}</span>
            <img src={p.image} alt={p.name} className="w-24 h-24 object-cover rounded mt-2 border border-gray-700" />
          </li>
        ))}
      </ul>
    </main>
  );
}
