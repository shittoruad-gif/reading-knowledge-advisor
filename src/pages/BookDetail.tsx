import { Link, useParams } from 'wouter'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function BookDetail() {
  const { id } = useParams<{ id: string }>()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen p-8 max-w-2xl mx-auto"
    >
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft className="w-4 h-4" />
        ホームに戻る
      </Link>
      <h1 className="text-2xl font-bold mb-4">書籍詳細 (ID: {id})</h1>
      <p className="text-gray-600">この書籍の詳細情報がここに表示されます。</p>
    </motion.div>
  )
}
