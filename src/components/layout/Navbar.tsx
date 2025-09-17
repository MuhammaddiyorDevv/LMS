"use client";

import { Heart, Bell, Search, Clock, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [showNotifs, setShowNotifs] = useState(true);

  return (
    <header className="flex items-center py-[12px] border-b border-b-[#E5E5E5] justify-between bg-[#F6F6F6]">
      {/* Search bar */}
      <div className="relative w-[420px]">
        <Search
          size={20}
          className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#0B0C0B]"
        />
        <input
          type="text"
          placeholder="Ищите что угодно"
          className="w-full rounded-xl border border-[#E5E5E5] bg-white text-sm 
                     py-[17px] pr-[16px] pl-[45px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-3">
        <button
          aria-label="favorites"
          className="p-4 rounded-[16px] bg-white hover:cursor-pointer"
        >
          <Heart size={24} />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={
                "p-4 rounded-[16px] bg-white hover:cursor-pointer relative"
              }
            >
              <Bell size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={8}
            align="end"
            className="w-[432px] h-auto shadow-xl p-0 border"
          >
            <DropdownMenuLabel
              className={"text-[18px] font-bold py-[18px] px-5 border-b"}
            >
              Уведомление
            </DropdownMenuLabel>

            <AnimatePresence>
              {showNotifs && (
                <>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0 }}
                  >
                    <DropdownMenuGroup className={"p-4 hover:bg-[#F6FFF4]"}>
                      <CardContent className={"flex flex-col gap-2 p-0"}>
                        <DropdownMenuItem
                          className={
                            "text-[12px] text-[#313131] hover:bg-transparent focus:bg-transparent"
                          }
                        >
                          <Clock />1 min ago
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-[18px] font-bold text-[#567D4A] 
                hover:bg-transparent focus:bg-transparent 
                data-[highlighted]:bg-transparent data-[highlighted]:text-[#567D4A]"
                        >
                          New Order #30854
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={
                            "text-[14px] font-light text-[#616161] hover:bg-transparent focus:bg-transparent data-[highlighted]:bg-transparent data-[highlighted]:text-[#616161]"
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={
                            "text-[14px] font-light text-[#616161] hover:bg-transparent focus:bg-transparent"
                          }
                        >
                          <Button
                            variant={"outline"}
                            className="rounded-full text-black active:bg-[#567D4A] active:text-white"
                          >
                            Decline
                          </Button>
                          <Button
                            variant={"outline"}
                            className="rounded-full text-black active:bg-[#567D4A] active:text-white"
                          >
                            Snooze
                          </Button>
                        </DropdownMenuItem>
                      </CardContent>
                    </DropdownMenuGroup>
                  </motion.div>

                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <DropdownMenuGroup className={"p-4 hover:bg-[#F6FFF4]"}>
                      <CardContent className={"flex flex-col gap-2 p-0"}>
                        <DropdownMenuItem
                          className={
                            "text-[12px] text-[#313131] hover:bg-transparent focus:bg-transparent"
                          }
                        >
                          <Clock />5 min ago
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-[18px] font-bold text-[#567D4A] 
                hover:bg-transparent focus:bg-transparent 
                data-[highlighted]:bg-transparent data-[highlighted]:text-[#567D4A]"
                        >
                          Payment Successful
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={
                            "text-[14px] font-light text-[#616161] hover:bg-transparent focus:bg-transparent data-[highlighted]:bg-transparent data-[highlighted]:text-[#616161]"
                          }
                        >
                          Your order has been processed successfully.
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={
                            "text-[14px] font-light text-[#616161] hover:bg-transparent focus:bg-transparent"
                          }
                        >
                          <Button
                            variant={"outline"}
                            className="rounded-full text-black active:bg-[#567D4A] active:text-white"
                          >
                            View
                          </Button>
                        </DropdownMenuItem>
                      </CardContent>
                    </DropdownMenuGroup>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            <DropdownMenuLabel
              onClick={() => setShowNotifs(false)}
              className={
                "flex items-center font-semibold text-[12px] text-[#567D4A] cursor-pointer px-4 py-4 border-t"
              }
            >
              <Check /> Всё прочитано
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
