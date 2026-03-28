"use client";
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <main className="max-w-xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="mb-6">Keranjang belanja kosong.</p>
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors">Kembali Belanja</Link>
      </main>
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    alert('Checkout berhasil! Terima kasih sudah berbelanja.');
  };

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <ul className="mb-6">
        {cart.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} x {item.qty} = <span className="text-green-400">Rp{(item.price * item.qty).toLocaleString()}</span>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg mb-6">Total: <span className="text-green-400">Rp{total.toLocaleString()}</span></div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input required placeholder="Nama Lengkap" className="rounded px-3 py-2 bg-gray-900 border border-gray-600 text-white" />
        <input required placeholder="Alamat Pengiriman" className="rounded px-3 py-2 bg-gray-900 border border-gray-600 text-white" />
        <input required placeholder="No. HP" className="rounded px-3 py-2 bg-gray-900 border border-gray-600 text-white" />
        <button type="submit" className="px-4 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition-colors">Bayar Sekarang</button>
      </form>
    </main>
  );
}
