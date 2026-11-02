import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const courseData: Record<string, { title: string; price: string; lessons: string[] }> = {
  "01": { title: "[강의명]", price: "39,000원", lessons: ["[강의 제목]", "[강의 제목]", "[강의 제목]"] },
  "02": { title: "[강의명]", price: "69,000원", lessons: ["[강의 제목]", "[강의 제목]", "[강의 제목]"] },
  "03": { title: "[강의명]", price: "99,000원", lessons: ["[강의 제목]", "[강의 제목]", "[강의 제목]"] },
  "04": { title: "[강의명]", price: "149,000원", lessons: ["[강의 제목]", "[강의 제목]", "[강의 제목]"] },
  "05": { title: "[강의명]", price: "199,000원", lessons: ["[강의 제목]", "[강의 제목]", "[강의 제목]"] },
};

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courseData[id] ?? courseData["01"];
  return <main className="flex min-h-screen flex-col bg-[#f7f8fa]"><SiteHeader /><div className="mx-auto w-[calc(100%-40px)] max-w-[1248px] flex-1 py-10"><Link href="/" className="text-[13px] text-[#64748b] underline">강의 목록으로 돌아가기</Link><div className="mt-7 grid items-start gap-8 lg:grid-cols-[minmax(0,816px)_1fr]"><div className="space-y-7"><div className="flex h-[260px] items-center justify-center rounded-md border border-dashed border-[#ccd1d9] bg-[#f4f5f6] text-sm text-[#7a8b9a] sm:h-[360px]">[강의 썸네일]</div><section className="space-y-3"><h2 className="text-xl font-bold text-[#0f1f35]">[강의 소개]</h2><p className="text-sm leading-[1.8] text-[#64748b]">수익형 부동산 투자에 필요한 핵심 지식과 실전 전략을 학습하는 강의입니다. 강의 소개 내용을 입력해 주세요.</p></section><section className="space-y-3"><h2 className="text-xl font-bold text-[#0f1f35]">[커리큘럼]</h2><div className="overflow-hidden rounded-md border border-[#e2e8f0] bg-white">{course.lessons.map((lesson, index) => <div key={index} className="flex h-[52px] items-center border-b border-[#e2e8f0] px-5 text-sm last:border-0">{String(index + 1).padStart(2, "0")}　{lesson}</div>)}</div></section></div><aside className="rounded-[10px] border border-[#e2e8f0] bg-white p-7"><h1 className="text-[28px] font-bold text-[#0f1f35]">{course.title}</h1><p className="mt-2 text-sm text-[#64748b]">강사: [강사명]</p><div className="my-6 h-px bg-[#e2e8f0]" /><p className="text-[13px] text-[#64748b]">월 구독료</p><p className="mt-1 text-[26px] font-bold text-[#0f1f35]">월 {course.price}</p><p className="mt-2 text-[13px] leading-relaxed text-[#64748b]">선택한 {course.title}에만 적용되는 구독입니다.</p><Link href={`/subscribe?course=${id}`} className="mt-6 flex h-[46px] items-center justify-center rounded-md bg-[#1d4ed8] text-sm font-bold text-white">구독하기</Link></aside></div></div><SiteFooter /></main>;
}