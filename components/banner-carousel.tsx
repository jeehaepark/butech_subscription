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
  const scrollEndTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return activeRef.current;

    const trackCenter =
      track.getBoundingClientRect().left + track.clientWidth / 2;
    const slides = Array.from(track.children) as HTMLElement[];

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;

    if (scrollEndTimerRef.current !== null) {
      window.clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = null;
    }

    activeRef.current = index;
    setActiveIndex(index);

    const trackCenter =
      track.getBoundingClientRect().left + track.clientWidth / 2;
    const slideCenter =
      slide.getBoundingClientRect().left + slide.getBoundingClientRect().width / 2;
    const targetLeft = track.scrollLeft + slideCenter - trackCenter;

    track.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      goTo((activeRef.current + 1) % banners.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
      if (scrollEndTimerRef.current !== null) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, [goTo]);

  const handleScroll = () => {
    if (scrollEndTimerRef.current !== null) {
      window.clearTimeout(scrollEndTimerRef.current);
    }

    // 스크롤 애니메이션이 끝난 뒤 한 번만 활성 점을 동기화한다.
    scrollEndTimerRef.current = window.setTimeout(() => {
      const nearestIndex = getNearestIndex();
      activeRef.current = nearestIndex;
      setActiveIndex(nearestIndex);
      scrollEndTimerRef.current = null;
    }, 160);
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white pb-3 pt-6 sm:pt-8">
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

      <div className="relative z-20 mt-3 flex justify-center gap-2" aria-label="배너 선택">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`${index + 1}번 배너 보기`}
            aria-pressed={activeIndex === index}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0784d1]"
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                activeIndex === index ? "bg-[#0784d1]" : "bg-[#d5d5d5]"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
