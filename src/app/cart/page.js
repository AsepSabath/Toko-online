"use client";
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <main className="max-w-xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Keranjang Belanja</h1>
        <p className="mb-6">Keranjang belanja kosong.</p>
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors">Kembali Belanja</Link>
      </main>
    );

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Keranjang Belanja</h1>
      <table className="w-full mb-6">
        <thead>
          <tr className="text-left">
            <th>Produk</th>
            <th>Qty</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border-b border-gray-700">
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={e => updateQty(item.id, Number(e.target.value))}
                  className="w-16 text-center rounded bg-gray-900 border border-gray-600 text-white"
                />
              </td>
              <td>Rp{(item.price * item.qty).toLocaleString()}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)} className="text-pink-400 hover:underline">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-lg">Total:</span>
        <span className="font-bold text-xl text-green-400">Rp{total.toLocaleString()}</span>
      </div>
      <div className="flex gap-4">
        <button onClick={clearCart} className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800">Kosongkan</button>
        <Link href="/checkout" className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors">Checkout</Link>
      </div>
    </main>
  );
}
