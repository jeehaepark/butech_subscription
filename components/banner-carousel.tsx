"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const banners = [
  { id: "01", label: "메인 배너 이미지 01" },
  { id: "02", label: "메인 배너 이미지 02" },
  { id: "03", label: "메인 배너 이미지 03" },
];

export function BannerCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;

    activeRef.current = index;
    setActiveIndex(index);

    // Calculate the target from rendered positions rather than offsetLeft,
    // which can be relative to a different offset parent.
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const targetLeft = track.scrollLeft + slideRect.left - trackRect.left;

    track.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = (activeRef.current + 1) % banners.length;
      goTo(next);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [goTo]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + track.clientWidth / 2;
    const slides = Array.from(track.children) as HTMLElement[];

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(center - trackCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    activeRef.current = nearestIndex;
    setActiveIndex(nearestIndex);
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
            className="w-[88vw] shrink-0 snap-center sm:w-[72vw] lg:w-[calc(49vw-12px)]"
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
            aria-pressed={activeIndex === index}
            className={`h-2.5 w-2.5 cursor-pointer rounded-full border-0 p-0 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0784d1] ${
              activeIndex === index ? "bg-[#0784d1]" : "bg-[#d5d5d5]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
