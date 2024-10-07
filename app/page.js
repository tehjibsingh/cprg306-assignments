// /app/page.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12"> {/* Full-screen gradient background */}
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold mb-10 text-white">CPRG 306: Web Development 2 - Assignments</h1>
        
        {/* Card Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Week 1 Card */}
          <Link href="/week-1">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 1</h2>
              <p className="text-gray-100">Introduction and setting up the project</p>
            </div>
          </Link>

          {/* Week 2 Card */}
          <Link href="/week-2">
            <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 2</h2>
              <p className="text-gray-100">Understanding React components and state</p>
            </div>
          </Link>

          {/* Week 3 Card */}
          <Link href="/week-3">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 3</h2>
              <p className="text-gray-100">Working with forms and handling events</p>
            </div>
          </Link>

          {/* Week 4 Card */}
          <Link href="/week-4">
            <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 4</h2>
              <p className="text-gray-100">Integrating components and managing state</p>
            </div>
          </Link>

          {/* Week 5 Card */}
          <Link href="/week-5">
            <div className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">Week 5</h2>
              <p className="text-gray-100">Advanced React concepts and project completion</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
