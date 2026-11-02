import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "부테크 | 부자의 재테크",
  description: "수익형 부동산 강좌를 원하는 만큼 선택해 월 단위로 구독하세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
