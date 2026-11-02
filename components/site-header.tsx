import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="h-[68px] border-b border-[#e2e8f0] bg-white">
      <div className="mx-auto flex h-full w-[calc(100%-48px)] max-w-[1248px] items-center">
        <a href="/" aria-label="부테크클래스 홈" className="flex items-center">
          <Image
            src="/images/butech_logo.png"
            alt="부테크클래스"
            width={180}
            height={48}
            priority
            className="h-6 w-auto object-contain"
          />
        </a>
      </div>
    </header>
  );
}
