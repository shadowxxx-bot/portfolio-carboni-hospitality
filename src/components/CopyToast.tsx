import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

/** Floating toast that appears when `visible` is true. */
export function CopyToast({ visible, message = "Email copied to clipboard" }: { visible: boolean; message?: string }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 rounded-lg bg-dark px-4 py-2 text-sm text-white shadow-lg border border-white/10"
        >
          <Check className="w-4 h-4 text-green-400" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
