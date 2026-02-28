"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface ImageModalProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ImageModal({ src, alt = "", className = "" }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className={`relative cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-colors ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <ZoomIn className="h-8 w-8 text-white" />
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] p-0 bg-black/90 border-none">
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-full max-h-[85vh]"
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
