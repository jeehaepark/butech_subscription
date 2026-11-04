"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ResetPasswordPage() {
  const [sent, setSent] = useState(false);
  return <main className="flex min-h-screen flex-col bg-[#f7f8fa]"><SiteHeader /><div className="flex flex-1 justify-center px-5 pt-16"><section className="h-fit w-full max-w-[480px] space-y-6 rounded-[10px] border border-[#e2e8f0] bg-white p-7 sm:p-9"><div className="space-y-2"><h1 className="text-[28px] font-bold text-[#0f1f35]">비밀번호 재설정</h1><p className="text-[13px] text-[#64748b]">이메일을 입력해 주세요.</p></div><form className="space-y-5" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label className="block space-y-2 text-sm font-medium">이메일<input type="email" required placeholder="이메일을 입력하세요" className="h-12 w-full rounded-md border border-[#ccd1d9] px-3 font-normal" /></label><div className="rounded-md bg-[#f8fafc] p-4 text-[13px] leading-relaxed text-[#64748b]">{sent ? "입력한 이메일 주소가 등록되어 있다면 재설정 안내를 받을 수 있습니다." : "비밀번호 재설정 링크 안내"}</div><button className="h-[46px] w-full rounded-md bg-[#1d4ed8] text-sm font-bold text-white">재설정 링크 보내기</button></form><div className="text-center"><Link href="/login" className="text-[13px] text-[#64748b] underline">로그인으로 돌아가기</Link></div></section></div><SiteFooter /></main>;
}