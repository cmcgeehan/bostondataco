'use client'

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerModalProps {
  videoUrl: string
  isOpen: boolean
  onClose: () => void
}

export function VideoPlayerModal({ videoUrl, isOpen, onClose }: VideoPlayerModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-4xl aspect-video mx-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:text-white/80"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <video
          controls
          autoPlay
          className="w-full h-full rounded-lg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
} 