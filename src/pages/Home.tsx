import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-8"
    >
      <BookOpen className="w-16 h-16 mb-4 text-blue-600" />
      <h1 className="text-3xl font-bold mb-2">Reading Knowledge Advisor</h1>
      <p className="text-lg text-gray-600 mb-8">あなたの読書をもっと豊かに</p>
      <div className="flex gap-4">
        <Link href="/category/1" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          カテゴリを見る
        </Link>
      </div>
    </motion.div>
  )
}
