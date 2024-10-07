// /app/page.js

import StudentInfo from "./studentinfo";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center p-10">
      <div className="p-12 bg-black/70 backdrop-blur-lg border border-red-500 rounded-3xl shadow-2xl text-center max-w-4xl w-full">
        {/* Main Heading */}
        <h1 className="text-6xl font-extrabold text-red-500 mb-12 drop-shadow-lg tracking-wider">
          NAME OF JATT
        </h1>
        {/* Student Info Component */}
        <StudentInfo />
      </div>
    </main>
  );
}
