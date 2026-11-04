import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BannerCarousel } from "@/components/banner-carousel";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <SiteHeader />
      <BannerCarousel />
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
                <Link href={`/courses/${course.id}`} className="group block" aria-label={`${course.title} 상세 보기`}>
                  <div className="relative aspect-[1.55/1] w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-opacity group-hover:opacity-80"
                    />
                  </div>
                </Link>
                <h2 className="mt-4 min-h-[28px] text-[16px] font-extrabold leading-7 tracking-[-.4px] sm:text-[17px]">
                  {course.title}
                </h2>
                <div className="mt-2 rounded-[15px] border border-[#e9e9e9] bg-white px-5 py-5 sm:px-6 sm:py-6">
                  <p className="min-h-[56px] text-[15px] leading-7 text-[#555] sm:text-[16px]">
                    {course.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span key={tag} className="cursor-pointer rounded-[10px] border border-[#555] px-3 py-2 text-[13px] font-semibold leading-5 text-[#444] sm:px-4 sm:text-[14px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="mt-6 flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-bold text-white transition-colors hover:bg-sky-700"
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
