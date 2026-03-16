"use client"

import { motion } from "framer-motion"
import {
  ClipboardCheck,
  Target,
  Brain,
  UsersRound,
  GitBranch,
  Workflow,
  Figma,
  FileSpreadsheet,
  FileCode2,
  Trello,
  MessageSquare,
} from "lucide-react"

const skills = [
  {
    icon: ClipboardCheck,
    slogan: '실무 중심의 기획, 디테일에서 경쟁력이 나온다',
    description: '서비스 개선, IA 설계, 와이어프레임 및 프로토타입 작성 등 기획 전반의 실무형 문서화 역량 보유',
  },
  {
    icon: Target,
    slogan: '사용자 중심 전략을 구조화하다',
    description: '페르소나 설계, 여정 지도, 블루프린트 기반의 전략적 기획과 데이터 기반 의사결정 경험 보유',
  },
  {
    icon: Brain,
    slogan: 'AI와 함께 기획을 더 빠르고 똑똑하게',
    description: 'Prompt Engineering, Vibe Coding, ChatGPT 등 생성형 AI를 활용한 기획 자동화 및 혁신 경험',
  },
  {
    icon: UsersRound,
    slogan: '다양한 팀과 함께 목표를 실현하는 커뮤니케이터',
    description: '팀 커뮤니케이션, 요구사항 분석, 이해관계자 협업을 통해 효과적인 실행력을 이끈 경험',
  },
]

const toolImages = [
  { src: "/1.png", alt: "tool1" },
  { src: "/2.png", alt: "tool2" },
  { src: "/3.png", alt: "tool3" },
  { src: "/4.png", alt: "tool4" },
  { src: "/5.png", alt: "tool5" },
  { src: "/6.png", alt: "tool6" },
  { src: "/7.png", alt: "tool7" },
  { src: "/8.png", alt: "tool8" },
  { src: "/9.png", alt: "tool9" },
  { src: "/10.png", alt: "tool10" },
  { src: "/11.png", alt: "tool11" },
  { src: "/12.png", alt: "tool12" },
  { src: "/13.png", alt: "tool13" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight"
          >
            기획의 완성도를 높이는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">핵심 역량</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-32">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card hover:bg-accent/50 border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <skill.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground leading-tight tracking-tight break-keep">
                {skill.slogan}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Tools & Technologies
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            실무에서 체득한 다양한 협업 및 개발 툴을 활용합니다.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden max-w-5xl mx-auto"
        >
          {/* Fading edges for the scroll area */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-scroll space-x-12 py-8 items-center">
            {toolImages.map((tool, index) => (
              <div key={index} className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicated for seamless scrolling */}
            {toolImages.map((tool, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
