"use client";

import { Heart, Bell, Search, Clock, Check } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export default function NavbarDesktop() {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotifs, setShowNotifs] = useState(true);

  const isCourseDetailPage = pathname.startsWith("/course/");

  return (
    <header className="bg-[#F6F6F6] border-b border-b-[#E5E5E5]">
      <div className="flex mb-6 items-center justify-between h-[56px] gap-3 px-[24px] sm:px-0 pt-3">
        <div className="hidden sm:flex mt-3 items-center justify-start">
          <div className="relative w-[420px]">
            {isCourseDetailPage ? (
              <button
                onClick={() => router.back()}
                className="w-[194px] flex items-center gap-3 rounded-[99px] border border-[#E5E5E5] bg-white text-sm 
                           py-[17px] px-[16px] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Image
                  src="/Images/back.svg"
                  alt="Back"
                  width={20}
                  height={20}
                  className=""
                />
                <span className="text-[#0B0C0B] font-medium">
                  Перейти назад
                </span>
              </button>
            ) : (
              <>
                <Search
                  size={20}
                  className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#0B0C0B]"
                />
                <input
                  type="text"
                  placeholder="Ищите что угодно"
                  className="w-full text-[#616161] rounded-xl border border-[#E5E5E5] bg-white text-sm 
                             py-[17px] pr-[16px] pl-[45px] focus:outline-none"
                />
              </>
            )}
          </div>
        </div>

        <div className="flex items-center mt-3 gap-4 sm:gap-3 ml-auto">
          <button
            aria-label="favorites"
            className="hidden sm:flex p-4 rounded-[16px] bg-white hover:cursor-pointer"
          >
            <Heart size={24} />
          </button>
          <div className="hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="notifications"
                  className={
                    "hidden sm:flex p-4 rounded-[16px] bg-white hover:cursor-pointer relative"
                  }
                >
                  <Bell size={24} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="end"
                sideOffset={8}
                avoidCollisions={false}
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
        </div>
      </div>
    </header>
  );
}
