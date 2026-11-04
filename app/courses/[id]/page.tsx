import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { formatPrice, getCourseById, courseStatusLabels } from "@/data/courses";

function CourseDetailFallback() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <SiteHeader />
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1248px] flex-1 py-10">
        <div className="h-[360px] animate-pulse rounded-md bg-[#eef0f3]" />
      </div>
      <SiteFooter />
    </main>
  );
}

async function CourseDetailContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) notFound();

  const canSubscribe = course.status === "recruiting" || course.status === "ongoing";

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <SiteHeader />
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1248px] flex-1 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#64748b] transition-colors hover:text-[#1d4ed8]">
          <span aria-hidden="true" className="text-[18px] leading-none">←</span>
          강의 목록으로 돌아가기
        </Link>
        <div className="mt-7 grid items-start gap-8 lg:grid-cols-[minmax(0,816px)_1fr]">
          <div className="space-y-7">
            <div className="relative aspect-[1.55/1] w-full overflow-hidden rounded-md bg-[#eef0f3]">
              <Image src={course.image} alt={course.title} fill priority sizes="(min-width: 1024px) 816px, 100vw" className="object-cover" />
            </div>
            {course.detailImages.length > 0 && (
              <section className="space-y-4">
                {course.detailImages.map((src, index) => (
                  <Image key={src} src={src} alt={`${course.title} 강의 소개 ${index + 1}`} width={1200} height={1600} sizes="(min-width: 1024px) 816px, 100vw" className="h-auto w-full" />
                ))}
              </section>
            )}
          </div>
          <aside className="rounded-[10px] border border-[#e2e8f0] bg-white p-7">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-[28px] font-bold text-[#0f1f35]">{course.title}</h1>
              <span className="rounded bg-[#1d4ed8] px-2 py-1 text-xs font-bold text-white">{courseStatusLabels[course.status]}</span>
            </div>
            <div className="my-6 h-px bg-[#e2e8f0]" />
            <p className="text-sm leading-[1.8] text-[#64748b]">{course.description}</p>
            <p className="mt-1 text-sm text-[#64748b]">{course.period}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span key={tag} className="rounded-[10px] border border-[#555] px-3 py-2 text-[13px] font-semibold leading-5 text-[#444]">{tag}</span>
              ))}
            </div>
            <div className="my-6 h-px bg-[#e2e8f0]" />
            <p className="text-[13px] text-[#64748b]">월 구독료</p>
            <p className="mt-1 text-[26px] font-bold text-[#0f1f35]">월 {formatPrice(course.monthlyPrice)}원</p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#64748b]">선택한 {course.title}에만 적용되는 월 구독입니다.</p>
            {canSubscribe ? (
              <Link href={`/subscribe?course=${course.id}`} className="mt-6 flex h-[46px] items-center justify-center rounded-md bg-[#1d4ed8] text-sm font-bold text-white">
                구독하기
              </Link>
            ) : (
              <div className="mt-6 flex h-[46px] items-center justify-center rounded-md bg-[#e2e8f0] text-sm font-bold text-[#64748b]">{courseStatusLabels[course.status]}</div>
            )}
          </aside>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <Suspense fallback={<CourseDetailFallback />}><CourseDetailContent params={params} /></Suspense>;
}
