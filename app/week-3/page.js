// /app/week-3/page.js

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black relative overflow-hidden py-10 flex items-center justify-center">
      
      {/* Decorative Circles for Background Effect */}
      <div className="absolute top-10 left-10 h-64 w-64 bg-gradient-to-br from-pink-500 to-red-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 h-72 w-72 bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur-3xl opacity-30"></div>
      
      <div className="p-10 bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-5xl w-full relative z-10">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
