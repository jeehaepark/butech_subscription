import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const courses = [
  {
    id: "01",
    title: "[파이팅팔콘] 실전 투자 스터디 3기",
    description: "8주만에 실전 투자자로 거듭나는 실전 투자 스터디",
    period: "2026.10.15 ~ 2027.01.16",
    tags: ["교재미포함", "8주 속성과정", "선착순모집"],
    artwork: "from-[#260b3d] via-[#35104d] to-[#10152e]",
    accent: "INVESTMENT STUDY",
  },
  {
    id: "02",
    title: "[파이팅팔콘] NPL투자 단기속성 클래스",
    description: "아는 사람만 계속 가져가는 시장, NPL 무제한관리 특별혜택",
    period: "단기 속성 과정",
    tags: ["교재포함", "오프라인 수업 2회 + A/S 줌 수업 1회 + A/S 오프라인 1회", "선착순모집"],
    artwork: "from-[#111c36] via-[#18243e] to-[#101321]",
    accent: "NPL INVEST CLASS",
  },
  {
    id: "03",
    title: "[해부자] 침대에서 월급버는 에어비앤비 2기",
    description: "부업이 아닌 부업 에어비앤비로 월급 만들기",
    period: "2026.7.25 ~ 10.24",
    tags: ["교재포함", "5주 정규 수업 + 12주 케어", "선착순모집"],
    artwork: "from-[#ff7a27] via-[#ff9b52] to-[#ffe0c4]",
    accent: "AIRBNB CLASS",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <SiteHeader />
      <section className="py-14 sm:py-16">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1312px]">
          <div className="mb-6">
            <span className="mb-3 block text-[16px] font-bold text-[#0879c9]">
              Expertise&nbsp; 부테크 클래스의 대표 강의 카테고리
            </span>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h1 className="text-[32px] font-extrabold tracking-[-1.5px] sm:text-[40px]">
                클래스별 맞춤 강좌
              </h1>
              <p className="pb-1 text-sm font-semibold text-[#aaa] sm:text-lg">
                최고의 전문가들이 전수하는 실전 투자 전략을 만나보세요
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <article key={course.id} className="min-w-0">
                <Link
                  href={`/courses/${course.id}`}
                  className="group block"
                  aria-label={`${course.title} 상세 보기`}
                >
                  <div className={`relative flex aspect-[1.55/1] items-center overflow-hidden rounded-sm bg-gradient-to-br ${course.artwork} p-6 text-white transition-opacity group-hover:opacity-90 sm:p-7`}>
                    <span className="pointer-events-none absolute -right-5 -top-8 text-[100px] font-black tracking-tighter text-white/[0.08] sm:text-[130px]">
                      {course.id}
                    </span>
                    <div className="relative z-10 max-w-[82%]">
                      <span className="mb-4 inline-block rounded border border-white/50 px-2 py-1 text-[10px] font-semibold tracking-wide text-white/90 sm:text-xs">
                        {course.accent}
                      </span>
                      <h2 className="text-[23px] font-extrabold leading-[1.22] tracking-[-1px] sm:text-[27px]">
                        {course.title}
                      </h2>
                    </div>
                  </div>
                </Link>

                <h3 className="mt-5 min-h-[28px] text-[16px] font-extrabold leading-7 tracking-[-.4px] sm:text-[17px]">
                  {course.title}
                </h3>
                <div className="mt-2 rounded-[15px] border border-[#e9e9e9] bg-white px-5 py-5 sm:px-6 sm:py-6">
                  <p className="min-h-[56px] text-[15px] leading-7 text-[#555] sm:text-[16px]">
                    {course.description}
                    <span className="block">{course.period}</span>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[10px] border border-[#555] px-3 py-2 text-[13px] font-semibold leading-5 text-[#444] sm:px-4 sm:text-[14px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="mt-6 flex h-11 items-center justify-center rounded-lg bg-[#222] px-4 text-sm font-bold text-white transition-colors hover:bg-[#0879c9]"
                  >
                    강좌 자세히 보기
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
