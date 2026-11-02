"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const banners = [
  { id: "01", label: "메인 배너 이미지 01" },
  { id: "02", label: "메인 배너 이미지 02" },
  { id: "03", label: "메인 배너 이미지 03" },
];

export function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      duration: 30,
    },
    [
      Autoplay({
        delay: 5000,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <section className="overflow-hidden bg-white pb-3 pt-6 sm:pt-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-[72%] lg:basis-[49%]"
            >
              <div className="flex aspect-[2.5/1] w-full items-center justify-center border border-dashed border-[#c9cdd3] bg-[#f3f4f5] px-4 text-center text-sm font-medium text-[#8a9099]">
                {banner.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-2" aria-label="배너 선택">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`${index + 1}번 배너 보기`}
            aria-pressed={selectedIndex === index}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0784d1]"
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                selectedIndex === index ? "bg-[#0784d1]" : "bg-[#d5d5d5]"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
