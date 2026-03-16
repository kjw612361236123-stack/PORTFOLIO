"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, FileText, ArrowRight, TrendingUp, Zap, Award, Search, ArrowUpRight, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import PDFModal from "./PDFModal"

const projects = [
  // 0. WIPS 시스템 연동 및 운영 고도화
  {
    id: "project0",
    title: "WIPS 시스템 연동 및 운영 고도화",
    subtitle: "(WIPS IPazon - 연차료 서비스 통합)",
    period: "2025.07 ~ 현재",
    description:
      "글로벌 특허 관리 시스템(IPazon)과 연차료 납부 서비스 간의 데이터 연동 기획 및 전반적인 운영 고도화를 리딩했습니다. 방대한 특허 데이터 유실을 막기 위한 API 명세 설계로 시스템 정합성을 확보하고, 체계적인 ITS(이슈 트래킹) 프로세스를 구축해 비즈니스 임팩트 기반의 트러블슈팅을 주도하여 기획 구현율 및 VOC 대응 일정 준수율 90%를 달성했습니다.",
    impact: "API 연동 프로세스 명세 40단계 세분화 및 기획 구현율 100% 달성, 스프레드시트와 MantisBT를 결합한 ITS 파이프라인 구축, 예외 케이스(Edge Case) 방어 로직 설계를 통한 데이터 무결성 확보, 우선순위 기반 트러블슈팅으로 VOC 대응 일정 준수율 100% 달성",
    process: "비즈니스 요구사항 분석 및 API 기능 정의, 데이터 상태값(Status) 매핑 로직 설계, 예외 케이스 정책 수립 및 UI/UX 개선, ITS 파이프라인 셋업 및 QA(인수 테스트) 총괄",
    tech: "MantisBT, Google Sheets, MS Excel, Power Point",
    tags: ["B2B서비스기획", "API연동명세", "ITS운영총괄", "데이터정합성", "예외케이스방어"],
    participation: "PM 및 서비스 기획 총괄",
    image: "/WIP.jpg",
    liveUrl: "/docs/wips.pdf",
    docsUrl: "#",
  },
  // 1. 교육 플랫폼 UX 혁신
  {
    id: "project1",
    title: "교육 플랫폼 UX 혁신",
    subtitle: "(천재교육 T셀파몰 리뉴얼)",
    period: "2025.01.14~2025.01.24",
    description:
      "현직 초등교사 10명 대상 시나리오 기반 UT(사용자 테스트)와 경쟁사 분석, UX 분석 등 실사용 맥락에 기반한 리서치와 실무형 기획을 직접 수행했습니다. 실제 교사들의 니즈와 행동을 관찰하여 상품 탐색, 후기, 장바구니 등 주요 UX를 사용자 흐름 중심으로 재설계하고, 후기 기반 커뮤니티 기능을 신규 기획했습니다.",
    impact: "현직 교사 대상 UT/인터뷰 직접 설계 및 실행, A/B 테스트 결과 67% 달성, 데이터 기반 UX 개선 및 커뮤니티 활성화, 경쟁사 분석·시장분석·A/B 테스트 등 실전 기획 경험",
    process: "교사 10명 심층 인터뷰, 경쟁사 분석, 페르소나/여정지도, 시나리오 기반 UT, A/B 테스트, TAM/SAM/SOM 시장분석, 와이어프레임 작성",
    tech: "Figma, Google Forms, Notion, Zoom, Slack",
    tags: ["현업 프로젝트 경험", "교사 대상 UT", "유저 리서치", "A/B 테스트", "데이터 기반 개선", "시장분석"],
    participation: "UX 리서치 및 기획 총괄",
    image: "/p1.png",
    liveUrl: "/docs/t셀파몰.pdf",
    docsUrl: "#",
  },
  // 2. 애자일 팀 리더십
  {
    id: "project3",
    title: "애자일 팀 리더십",
    subtitle: "(POP-POP: 팝업스토어 실시간 정보 공유 커뮤니티 앱)",
    period: "2025.02.14~2025.06.10",
    description:
      "팝업스토어 정보 공유 커뮤니티 앱 기획 및 개발 프로젝트입니다. 사용자 리서치를 통해 팝업스토어 정보의 실시간성과 커뮤니티 기능의 필요성을 도출하고, 이를 바탕으로 1명의 디자이너, 4명의 개발자와 함께 MVP를 개발했습니다.",
    impact: "사용자 리서치 기반 핵심 기능 도출, 애자일 방식의 MVP 개발 및 출시, 사용자 피드백 기반 지속적 개선, 팀 협업 프로세스 구축",
    process: "사용자 리서치, 페르소나/여정지도 설계, 기능 정의, 와이어프레임 작성, MVP 개발 및 출시, 사용자 피드백 수집 및 개선",
    tech: "Figma, Notion, Slack, Jira, GitHub",
    tags: ["PM 실전 경험", "애자일 협업", "MVP 출시", "기획-디자인-개발 소통", "팀 협업 프로세스 구축"],
    participation: "PM 및 기획 총괄",
    image: "/p3.png",
    liveUrl: "/docs/POP.pdf",
    docsUrl: "https://github.com/ita-poppop/backend.git",
  },
  // 3. AI 기반 실무형 풀사이클 개발
  {
    id: "project4",
    title: "AI 기반 실무형 풀사이클 개발",
    subtitle: "(미용실 실시간 예약 시스템 웹앱)",
    period: "2025.03.01~2025.03.18",
    description:
      "예약 부도 문제를 주제로, 데이터 기반 리서치와 AI 도구(Cursor, ChatGPT, Claude)를 활용해 기획부터 개발까지 전 과정을 단독 수행한 프로젝트입니다. 실사용 흐름을 고려해 예약, 결제, 취소, 알림 기능을 설계하고, JSP와 MySQL 기반으로 MVP를 구현했습니다.",
    impact: "예약·결제·취소·알림 전 기능 구현, ERD 설계 및 JSP 기반 UI 완성\n예약 성공률 향상을 위한 사용자 흐름 중심 기능 설계\nAI 도구 활용을 통한 실무형 개발 경험 확보",
    process: "문제 정의 및 데스크 리서치\n기능 정의 및 ERD 설계\nJSP 기반 화면 구현 및 예약 로직 개발\nAI 도구로 코드 자동화 및 품질 개선",
    tech: "Cursor, ChatGPT, Claude, JSP, Java Servlet, MySQL, Figma, Notion",
    tags: ["풀사이클 개발", "AI 활용", "JSP", "MySQL", "실시간 예약", "MVP 구현"],
    participation: "기획및 개발 전 과정 수행",
    image: "/p4.png",
    liveUrl: "/docs/Full.pdf",
    docsUrl: "https://github.com/kimjaewon6123/scrs.git",
  },
  // 4. 데이터 기반 광고 전략
  {
    id: "project2",
    title: "데이터 기반 광고 전략",
    subtitle: "(네이버 웹툰 쿠키오븐 리디자인)",
    period: "2025.02.20~2025.02.28",
    description:
      "117명 사용자 설문 데이터를 AHP 계층분석법으로 정량 분석하여, 사용자 선택 기준(보상 효율성, 콘텐츠 흥미도, 브랜드 인지도 등)에 기반한 UI 구조와 광고 노출 전략을 설계한 데이터 기반 UX 기획한 프로젝트입니다.",
    impact: "AHP 분석으로 광고 선택 기준의 중요도(보상 효율성 53.18% > 콘텐츠 흥미도 28.32% > 브랜드 인지도 18.49%) 도출, 목표 쿠키 기반 추천·광고 정렬/필터·실시간 신뢰도 안내 UI 등 사용자 중심 기능 설계, 무작위 노출 구조에서 맞춤형 추천 전략 중심 UI로 전환",
    process: "117명 사용자 설문 설계 및 수집, 광고 선택 요인 정의, AHP 계층분석 적용, 연령/성별별 분석 및 시각화, 기존 UI 분석, To-Be UI 설계 및 정책 제안, Figma 리디자인 시안 제작",
    tech: "Figma, Google Forms, Notion, Slack",
    tags: ["AHP 분석", "데이터 기반 기획", "UX 리서치", "UI/UX 리디자인", "광고 전략 설계"],
    participation: "UX 리서치 및 분석 기반 기획",
    image: "/p2.png",
    liveUrl: "/docs/네이버웹툰.pdf",
    docsUrl: "#",
  },
  {
    id: "project5",
    title: "교육 플랫폼 전환율 분석",
    subtitle: "(밀크T CCR 향상 프로젝트)",
    period: "2025.04.03~2025.04.13",
    description:
      "밀크T의 약 10만 건 학습 데이터를 기반으로 콘텐츠별 전환율(CCR)을 분석하고, 전환 기여도가 낮은 이북 콘텐츠 유형을 개선 타겟으로 도출한 프로젝트입니다. 학년별·유형별 분석을 통해 AI 콘텐츠의 높은 전환 기여도도 확인했으며, 콘텐츠 추천과 UI 개선 전략을 함께 설계했습니다.",
    impact: "CCR 기반 전환 분석 프레임 수립 및 콘텐츠 유형별 기여도 도출\n전환율 낮은 이북 콘텐츠 분석 → 개선 타깃 선정\nAI 콘텐츠의 전환 효과 확인 및 전략적 확대 제안\n학년별 콘텐츠 소비 특성 시각화 및 UX 개선 방향 설정",
    process: "10만 건 학습 로그 수집 및 CCR 기준 정립\n과목/학년/콘텐츠 유형별 분석 및 시각화\n전환율 하위 콘텐츠 집중 분석 (e북 템플릿 97% 영어)\n개선 대상 콘텐츠 선정 및 전략 제안 도출",
    tech: "Excel, Python(pandas), Notion, Figma",
    tags: ["CCR 분석", "전환율 개선", "데이터 기반 UX", "AI 콘텐츠", "콘텐츠 추천", "UX 전략"],
    participation: "데이터 분석 기반 UX 전략 수립",
    image: "/p5.png",
    liveUrl: "/docs/밀크T.pdf",
    docsUrl: "#",
  },
  {
    id: "project6",
    title: "OpenAI API 기반 서비스 기획 및 개발",
    subtitle: "(MBTI 성향 챗봇 & 논술 분석 플랫폼)",
    period: "2025.04.22~2025.05.15",
    description:
      "두 프로젝트 모두 OpenAI API 및 LLM 기술을 중심으로 진행한 실무형 과제입니다. MBTI 챗봇 프로젝트에서는 16가지 성향별 챗봇을 구축하고, GPT 기반 프롬프트 엔지니어링과 RAG, 메모리 주입을 활용해 성향에 맞는 응답을 설계했습니다. 논술 분석 서비스 프로젝트에서는 OCR, 구조 분석, Rubric 기반 Fine-Tuning 구조를 설계하고, GPT API를 활용한 논술 자동 피드백 시스템을 기획했습니다.",
    impact: "MBTI 유형별 LLM 응답 설계 및 성향 테스트 챗봇 구현\nAgent AI + GPT 조합 기반 논술 분석 흐름 설계\nPrompt + RAG + 평가 기준 설정 등 고도화된 프롬프트 엔지니어링 적용\nGPT API 연동 기반 서비스 프로토타입 기획 및 시연 경험 확보",
    process: "MBTI 데이터 수집 및 성향 응답 설계\n챗봇 UI/UX 및 프론트/백엔드 구조 구현\n논술 OCR → GPT 분석 → 항목별 피드백 시스템 설계\nRubric 기반 평가 기준 정립 및 RLHF 적용 설계\nOpenAI API 연동 테스트 및 프롬프트 품질 개선",
    tech: "OpenAI API, Cursor, GPT-4, Figma, React",
    tags: ["GPT API", "LLM 서비스", "프롬프트 엔지니어링", "RAG", "Agent AI", "논술 분석", "챗봇"],
    participation: "AI 기술 활용 서비스 설계 및 GPT API 연동 실습",
    image: "/p6.png",
    liveUrl: "/docs/AI.pdf",
    docsUrl: "https://github.com/kimjaewon6123/mbti.git",
  },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("project0")
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)

  return (
    <section id="portfolio" className="bg-background relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-20">
      {/* Soft Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        
        <div className="mb-10 md:mb-16 text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2"
          >
            Capabilities & Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground tracking-tight leading-snug break-keep"
          >
            경험이 모여 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400 dark:from-slate-400 dark:to-slate-200">가치를 만듭니다.</span><br/>
            <span className="text-sm md:text-base font-medium text-muted-foreground/80 mt-2 block">
              제가 고민하고 해결해 온 지난 과정들입니다.
            </span>
          </motion.p>
        </div>

        <Tabs defaultValue="project1" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-[1200px] mx-auto">
          {/* TabsList */}
          <div className="w-full overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-hide">
            <TabsList className="flex items-center justify-start xl:justify-center bg-transparent w-max xl:w-full mx-auto p-1 gap-2 border-b border-border/50 rounded-none h-auto">
              {projects.map((project) => (
                <TabsTrigger
                  key={project.id}
                  value={project.id}
                  className={cn(
                    "px-1.5 sm:px-2 md:px-3 py-2 rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-bold text-[10px] sm:text-xs md:text-sm font-medium transition-all text-muted-foreground hover:text-foreground whitespace-nowrap tracking-tight",
                  )}
                >
                  {project.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* TabsContent */}
          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                  {/* Left: Text Info */}
                  <div className="lg:col-span-5 flex flex-col gap-6 pt-2 order-2 lg:order-1">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 leading-tight tracking-tight break-keep">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-muted-foreground mb-4">
                        {project.subtitle}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-8">
                        <Badge variant="secondary" className="bg-muted text-muted-foreground font-medium px-2.5 py-1 text-xs rounded-md">
                          {project.period}
                        </Badge>
                        <Badge variant="outline" className="text-foreground/80 font-medium px-2.5 py-1 text-xs rounded-md border-border/60">
                          {project.participation}
                        </Badge>
                      </div>

                      <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-6 break-keep font-medium">
                        {project.description}
                      </p>

                      <div className="space-y-6">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-sm font-bold text-foreground flex items-center gap-2">
                            핵심 성과
                          </span>
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed pl-1 break-keep">{project.impact}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-sm font-bold text-foreground flex items-center gap-2">
                            프로세스
                          </span>
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed pl-1 break-keep">{project.process}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-sm font-bold text-foreground flex items-center gap-2">
                            활용 기술
                          </span>
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed pl-1 break-keep">{project.tech}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-6 mb-8">
                        {project.tags.map((tag: string, i: number) => (
                          <span key={i} className="text-xs font-medium text-muted-foreground bg-accent/50 px-2.5 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => setSelectedPDF(project.liveUrl)}
                          className="group/btn relative overflow-hidden bg-primary/95 hover:bg-primary text-primary-foreground font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 text-xs md:text-sm h-auto tracking-wide"
                        >
                          <FileText className="w-3.5 h-3.5 mr-2 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                          <span className="relative z-10">자세히 보기</span>
                        </Button>
                        
                        {project.docsUrl !== "#" && (
                          <Button
                            asChild
                            variant="outline"
                            className="rounded-full font-bold px-6 py-2.5 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-300 hover:scale-[1.02] active:scale-95 text-xs md:text-sm h-auto tracking-wide"
                          >
                            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Image Cover */}
                  <div className="lg:col-span-7 w-full order-1 lg:order-2">
                    <div 
                      className="relative w-full aspect-video lg:aspect-[16/11] rounded-3xl overflow-hidden bg-muted/20 border border-border/40 group cursor-pointer shadow-lg shadow-black/5"
                      onClick={() => setSelectedPDF(project.liveUrl)}
                    >
                      <Image
                        src={project.image && project.image !== "/placeholder.svg?height=600&width=800" ? project.image : "/p1.png"}
                        alt={project.title}
                        fill
                        className={`transition-transform duration-700 group-hover:scale-[1.03] ${project.id === 'project3' || project.id === 'project6' ? 'object-contain p-8 md:p-12' : 'object-cover object-top'}`}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/95 dark:bg-black/80 text-foreground backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl border border-black/5 dark:border-white/10">
                          <Search className="w-4 h-4" />
                          <span className="text-sm font-semibold">자세히보기</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <PDFModal
        isOpen={selectedPDF !== null}
        onClose={() => setSelectedPDF(null)}
        pdfUrl={selectedPDF || ''}
      />
    </section>
  )
}
