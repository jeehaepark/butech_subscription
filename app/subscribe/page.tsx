"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { formatPrice, getCourseById } from "@/data/courses";

function SubscribeContent() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course");
  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <SiteHeader />

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1084px] flex-1 py-10 sm:py-11">
        <h1 className="mb-7 text-[24px] font-bold text-[#0f1f35]">
          구독 신청 및 결제
        </h1>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="grid items-start gap-7 lg:grid-cols-[minmax(0,708px)_minmax(300px,1fr)]"
        >
          <div className="space-y-5">
            <section className="rounded-[10px] border border-[#e2e8f0] bg-white p-6">
              <h2 className="mb-5 text-[16px] font-bold text-[#0f1f35]">수강생 정보</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[13px] font-medium text-[#465873]">수강생 이름</span>
                  <input
                    name="studentName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="이름을 입력해 주세요"
                    className="h-[52px] w-full rounded-md border border-[#cbd5e1] bg-white px-4 text-[14px] text-[#0f1f35] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/10"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[13px] font-medium text-[#465873]">수강생 전화번호</span>
                  <input
                    name="studentPhone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    placeholder="휴대폰 번호를 입력해 주세요"
                    className="h-[52px] w-full rounded-md border border-[#cbd5e1] bg-white px-4 text-[14px] text-[#0f1f35] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/10"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-[10px] border border-[#e2e8f0] bg-white p-6">
              <h2 className="mb-4 text-[16px] font-bold text-[#0f1f35]">결제 수단</h2>
              <div className="flex min-h-[58px] items-center rounded-md border border-dashed border-[#cbd5e1] bg-[#f8fafc] px-4 text-[13px] text-[#94a3b8]">
                결제 수단은 추후 연결될 예정입니다.
              </div>
            </section>

            <section className="rounded-[10px] border border-[#e2e8f0] bg-white p-6">
              <h2 className="mb-4 text-[16px] font-bold text-[#0f1f35]">정기결제 안내</h2>
              <div className="space-y-3 text-[13px] leading-[1.8] text-[#64748b]">
                <p>정기결제 조건 및 결제일 안내는 결제 기능 연결 시 안내할 예정입니다.</p>
                <p>구독 해지 및 환불 정책은 결제 진행 전 확인할 수 있도록 별도로 제공할 예정입니다.</p>
              </div>
            </section>

            <section className="rounded-[10px] border border-[#e2e8f0] bg-white p-6">
              <h2 className="mb-4 text-[16px] font-bold text-[#0f1f35]">필수 약관 동의</h2>
              <div className="space-y-4 text-[13px] text-[#465873]">
                <label className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 accent-[#1d4ed8]"
                  />
                  <span>필수 이용약관 동의</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 accent-[#1d4ed8]"
                  />
                  <span>개인정보 수집 및 이용 동의</span>
                </label>
              </div>
            </section>
          </div>

          <aside className="rounded-[10px] border border-[#e2e8f0] bg-white p-5 sm:p-6 lg:sticky lg:top-6">
            <h2 className="mb-5 text-[16px] font-bold text-[#0f1f35]">구독할 강의</h2>
            <div className="relative aspect-[1.55/1] w-full overflow-hidden rounded-md border border-[#cbd5e1] bg-[#eef0f3]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                sizes="(min-width: 1024px) 305px, 100vw"
                className="object-cover"
              />
            </div>

            <h3 className="mt-5 text-[18px] font-bold leading-snug text-[#0f1f35]">
              {course.title}
            </h3>
            <p className="mt-2 text-[12px] text-[#64748b]">선택한 강의의 개별 구독</p>

            <div className="my-5 h-px bg-[#e2e8f0]" />

            <p className="text-[12px] text-[#64748b]">월 구독료</p>
            <p className="mt-1 text-[23px] font-bold text-[#0f1f35]">
              월 {formatPrice(course.monthlyPrice)}원
            </p>

            <button
              type="submit"
              disabled
              className="mt-5 flex h-[46px] w-full cursor-not-allowed items-center justify-center rounded-md bg-[#1d4ed8] text-[13px] font-bold text-white opacity-60"
            >
              결제 기능 준비 중
            </button>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-[#94a3b8]">
              결제 기능은 추후 연결될 예정입니다.
            </p>
          </aside>
        </form>
      </div>

      <SiteFooter />
    </main>
  );
}

function SubscribeFallback() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <SiteHeader />
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1084px] flex-1 py-10">
        <div className="h-8 w-48 animate-pulse rounded bg-[#e2e8f0]" />
        <div className="mt-7 h-[520px] animate-pulse rounded-lg bg-[#eef0f3]" />
      </div>
      <SiteFooter />
    </main>
  );
}

export default function SubscribePage() {
  return (
    <Suspense fallback={<SubscribeFallback />}>
      <SubscribeContent />
    </Suspense>
  );
}
