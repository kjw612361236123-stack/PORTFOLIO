"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section
      id="home"
      className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] bg-gradient-to-br from-[#9AB2D8]/30 to-[#4A6B9C]/10 dark:from-[#2e4a7d]/40 dark:to-[#1a2c4e]/20" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-gradient-to-tl from-[#b7cbe6]/30 to-[#e6f2fb]/20 dark:from-[#3a4a6a]/40 dark:to-[#23243a]/20" 
        />
      </div>

      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/back.jpg" 
          alt="hero background" 
          fill 
          className="object-cover opacity-60 mix-blend-luminosity dark:opacity-40"
          priority
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-background/70 dark:bg-background/85" />
      </div>

      {/* Main Content */}
      <div className="container relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 pt-20 pb-10">
        
        {/* Left: Typography */}
        <motion.div 
          className="flex-1 flex flex-col items-start justify-center text-left"
          style={{ y: y1 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-foreground/90 mb-6"
          >
            변화하는 기술을 빠르게 흡수하고,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e4a7d] to-[#7b9ac9] dark:from-[#7b9ac9] dark:to-[#e6f2fb]">
              현실적인 해결책으로 이어내는 기획자
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-8 tracking-tight"
          >
            Product Manager <span className="font-light mx-2">|</span> Kim Jae Won
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-muted-foreground/80 max-w-lg mb-12 leading-relaxed font-medium break-keep"
          >
            단순한 요구사항 정의를 넘어, <strong>'왜(Why)'</strong>라는 질문에서 출발해 데이터 기반의 논리로 비즈니스 임팩트를 설계합니다.<br/>
            사용자의 목소리를 정량적 지표로 증명하며 프로덕트의 폭발적인 성장을 주도하는 서비스 기획자입니다.
          </motion.p>
        </motion.div>

        {/* Right: Abstract/Profile Visual */}
        <motion.div 
          className="flex-1 w-full flex justify-center md:justify-end items-center relative"
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[450px] lg:h-[600px] rounded-2xl overflow-hidden bg-transparent">
            
            <Image
              src="/my.png"
              alt="Kim Jae Won"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] z-10"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full mt-1" />
        </motion.div>
      </motion.div>
    </section>
  )
} 