'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function GoBackBtn() {
  const router = useRouter()
  return (
    <Button
      variant="ghost"
      className="mb-4 cursor-pointer"
      onClick={() => router.back()}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      매치 기록으로 돌아가기
    </Button>
  )
}
