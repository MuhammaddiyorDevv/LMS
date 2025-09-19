"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, Check, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NotificationMobile() {
  const [showNotifs, setShowNotifs] = useState(true);
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4 w-full">
        <button
          aria-label="back"
          onClick={() => router.back()}
          className="p-2 -ml-2"
        >
          <ArrowLeft className="w-6 h-6 text-[#0B0C0B]" />
        </button>
        <h1 className="text-[18px] font-bold text-black">Уведомления</h1>
        <button
          aria-label="mark all read"
          onClick={() => setShowNotifs(false)}
          className="p-2"
        >
          <Check className="w-6 h-6 text-[#567D4A]" />
        </button>
      </div>

      <div className="rounded-xl overflow-hidden bg-white">
        <AnimatePresence>
          {showNotifs ? (
            <div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 hover:bg-[#F6FFF4] cursor-pointer"
              >
                <div className="text-[12px] text-[#313131] flex items-center gap-1 w-full">
                  <Clock className="w-4 h-4" />1 min ago
                </div>
                <div className="text-[18px] font-bold text-[#567D4A] mt-1 w-full">
                  New Order #30854
                </div>
                <div className="text-[14px] font-light text-[#616161] mt-1 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="p-4 hover:bg-[#F6FFF4] cursor-pointer"
              >
                <div className="text-[12px] text-[#313131] flex items-center gap-1 w-full">
                  <Clock className="w-4 h-4" />5 min ago
                </div>
                <div className="text-[18px] font-bold text-[#567D4A] mt-1 w-full">
                  Payment Successful
                </div>
                <div className="text-[14px] font-light text-[#616161] mt-1 w-full">
                  Your order has been processed successfully.
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {!showNotifs && (
          <div className="p-6 text-center text-[#616161]">
            <p className="text-[16px] font-semibold text-[#0B0C0B]">
              Ничего нового
            </p>
            <p className="text-[14px] mt-1">
              Мы сообщим, когда появится что-то новое.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
