"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Mail, Phone, Calendar, BookOpen, Award, User, MapPin } from "lucide-react"
import PDFModal from "./PDFModal"

const bentoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function AboutMe() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)

  return (
    <section id="about" className="section-padding bg-muted/30 dark:bg-background relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12 md:mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Me</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            데이터와 인사이트로<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2e4a7d] to-[#7b9ac9] dark:from-[#7b9ac9] dark:to-[#e6f2fb]">단단한 기획</span>을 만듭니다.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 border" style={{ border: 'none' }}>
          
          {/* Box 1: Profile Image & Core Info (Spans 2 on desktop) */}
          <motion.div
            custom={0}
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-card rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/40 dark:border-white/5"
          >
            
            <div className="relative w-full aspect-[4/5] md:aspect-square mb-6 rounded-2xl overflow-hidden bg-transparent">
              <Image 
                src="/my2.png" 
                alt="Profile" 
                fill 
                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 p-2 md:p-4" 
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-1">김재원 <span className="text-lg font-medium text-muted-foreground ml-2">Kim Jae Won</span></h3>
              <p className="text-muted-foreground font-medium mb-4">서비스/콘텐츠 기획자 ∙ PM</p>
              
              <button 
                onClick={() => setSelectedPDF('/docs/resume.pdf')}
                className="group/btn relative overflow-hidden w-full py-2.5 rounded-full bg-primary/95 text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300 hover:scale-[1.01] active:scale-95 shadow-sm text-sm tracking-wide"
              >
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                <span className="relative z-10">이력서 확인하기</span>
              </button>
            </div>
          </motion.div>

          {/* Box 2: Contact Info (Spans 2 cols) */}
          <motion.div
            custom={1}
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-card rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/40 dark:border-white/5"
          >
             <h3 className="text-xl font-bold mb-6 text-foreground">Contact</h3>
             <ul className="space-y-4 relative z-10">
               <li className="flex items-center gap-3">
                 <div className="p-2 rounded-lg bg-primary/10 text-primary"><Mail className="w-5 h-5" /></div>
                 <span className="font-medium text-muted-foreground tracking-wide">twice6123@naver.com</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="p-2 rounded-lg bg-primary/10 text-primary"><Phone className="w-5 h-5" /></div>
                 <span className="font-medium text-muted-foreground tracking-wide">+82 10 7751 6123</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="p-2 rounded-lg bg-primary/10 text-primary"><MapPin className="w-5 h-5" /></div>
                 <span className="font-medium text-muted-foreground tracking-wide">Seoul, South Korea</span>
               </li>
             </ul>
          </motion.div>

          {/* Box 3: Catchphrase/Philosophy (Spans 2 cols) */}
          <motion.div
            custom={2}
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-4 lg:col-span-2 bg-card rounded-3xl p-6 md:p-8 flex flex-col justify-center shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/40 dark:border-white/5"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold leading-snug mb-2">"Why? 라는 질문에서<br/>임팩트가 시작됩니다."</h3>
            <p className="text-muted-foreground font-medium">사용자의 본질적인 문제를 찾고, 데이터 기반의 논리로 해결책을 제시합니다.</p>
          </motion.div>

          {/* Box 4: Combined Experience, Education & Certifications (Spans full width or 6 cols) */}
          <motion.div
            custom={3}
            variants={bentoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-4 lg:col-span-6 bg-card rounded-3xl p-6 md:p-8 shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/40 dark:border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column: Experience */}
              <div>
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-bold text-lg">주요 경험</h3>
                </div>
                <div className="relative border-l border-muted-foreground/20 ml-2 space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.5px] top-1.5 ring-4 ring-card" />
                    <h4 className="font-bold text-base md:text-lg">주식회사 윕스</h4>
                    <p className="text-sm font-medium text-muted-foreground mb-1">IT그룹 DX기획팀</p>
                    <time className="text-xs font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded-md inline-block mb-1">2025.07 - 현재</time>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-muted-foreground/30 rounded-full -left-[1.5px] top-1.5 ring-4 ring-card" />
                    <h4 className="font-bold text-base md:text-lg">천재교육 에듀테크 PM</h4>
                    <p className="text-sm font-medium text-muted-foreground mb-1">서비스/콘텐츠 기획자 10기</p>
                    <time className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block">2024.12 - 2025.07</time>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-muted-foreground/30 rounded-full -left-[1.5px] top-1.5 ring-4 ring-card" />
                    <h4 className="font-bold text-base md:text-lg">IT'S TIME</h4>
                    <p className="text-sm font-medium text-muted-foreground mb-1">PM 직무 수행</p>
                    <time className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block">2025.02 - 2025.07</time>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-muted-foreground/30 rounded-full -left-[1.5px] top-1.5 ring-4 ring-card" />
                    <h4 className="font-bold text-base md:text-lg">패스트캠퍼스 EXPORT PM/PO 4기</h4>
                    <time className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block mt-1">2024.09 - 2024.12</time>
                  </div>
                </div>
              </div>

              {/* Right Column: Education & Certs */}
              <div className="flex flex-col gap-10">
                 {/* Education */}
                 <div>
                   <div className="flex items-center gap-2 mb-6 text-primary">
                     <BookOpen className="w-5 h-5" />
                     <h3 className="font-bold text-lg">학력</h3>
                   </div>
                   <div className="bg-muted/50 rounded-2xl p-5 border border-border/50 shadow-sm">
                     <h4 className="font-bold text-foreground text-lg mb-2">한국공학대학교</h4>
                     <p className="text-sm font-medium text-muted-foreground">IT경영학과 (본전공)</p>
                     <p className="text-sm font-medium text-muted-foreground mt-0.5">e-커머스학과 (복수전공)</p>
                   </div>
                 </div>

                 {/* Certifications */}
                 <div>
                   <div className="flex items-center gap-2 mb-6 text-primary">
                     <Award className="w-5 h-5" />
                     <h3 className="font-bold text-lg">자격증</h3>
                   </div>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-4 bg-muted/30 p-4 rounded-2xl border border-border/20 shadow-sm">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-primary/10 text-primary mt-0.5 whitespace-nowrap">25.05</span>
                        <span className="font-semibold text-foreground text-sm">Google Analytics</span>
                     </li>
                     <li className="flex items-start gap-4 bg-muted/30 p-4 rounded-2xl border border-border/20 shadow-sm">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground mt-0.5 whitespace-nowrap">13.03</span>
                        <span className="font-semibold text-foreground text-sm">ITQ 아래한글 A등급</span>
                     </li>
                     <li className="flex items-start gap-4 bg-muted/30 p-4 rounded-2xl border border-border/20 shadow-sm">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground mt-0.5 whitespace-nowrap">12.12</span>
                        <span className="font-semibold text-foreground text-sm">ITQ 파워포인트 B등급</span>
                     </li>
                   </ul>
                 </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <PDFModal
        isOpen={selectedPDF !== null}
        onClose={() => setSelectedPDF(null)}
        pdfUrl={selectedPDF || ''}
      />
    </section>
  )
}
