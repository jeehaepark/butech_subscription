"use client";

import { useEffect, useRef, useState } from "react";

const banners = [
  { id: "01", label: "메인 배너 이미지 01" },
  { id: "02", label: "메인 배너 이미지 02" },
  { id: "03", label: "메인 배너 이미지 03" },
];

export function BannerCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;

    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % banners.length;
        const track = trackRef.current;
        const slide = track?.children[next] as HTMLElement | undefined;
        if (track && slide) {
          track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const nearest = slides.reduce(
      (best, slide, index) =>
        Math.abs(slide.offsetLeft - track.scrollLeft) <
        Math.abs(slides[best].offsetLeft - track.scrollLeft)
          ? index
          : best,
      0,
    );
    setActiveIndex(nearest);
  };

  return (
    <section className="overflow-hidden bg-white pb-3 pt-6 sm:pt-8">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="부테크 클래스 메인 배너"
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-[88vw] shrink-0 snap-start sm:w-[72vw] lg:w-[calc(49vw-12px)]"
          >
            <div className="flex aspect-[2.5/1] w-full items-center justify-center border border-dashed border-[#c9cdd3] bg-[#f3f4f5] px-4 text-center text-sm font-medium text-[#8a9099]">
              {banner.label} · 이미지를 직접 추가하세요
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-3" aria-label="배너 선택">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`${index + 1}번 배너 보기`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              activeIndex === index
                ? "bg-[#0784d1]"
                : "border border-[#c9c9c9] bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
