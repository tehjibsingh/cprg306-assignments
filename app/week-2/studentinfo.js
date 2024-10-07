import Link from "next/link"

export default function StudentInfo() {
    return(
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-10">
      <div className="bg-black/60 backdrop-blur-lg border border-red-500 rounded-3xl shadow-2xl p-10 max-w-2xl text-center">
        {/* Corrected name spelling and added font styling */}
        <h1 className="text-5xl font-extrabold text-red-500 mb-8 drop-shadow-lg tracking-wider">
          Tehjib Singh
        </h1>
            
            </div>
            <ul>
                <Link href= "https://github.com/tehjibsingh/cprg306-assignments"></Link>
            </ul>
        </main>
    )
}