import Link from "next/link";

type AuthCardProps = { mode: "login" | "signup" };
export function AuthCard({ mode }: AuthCardProps) {
  const signup = mode === "signup";
  return <section className="w-full max-w-[480px] rounded-[10px] border border-[#e2e8f0] bg-white p-7 sm:p-9">
    <div className="mb-6 space-y-2"><h1 className="text-[28px] font-bold text-[#0f1f35]">{signup ? "회원가입" : "로그인"}</h1><p className="text-[13px] text-[#64748b]">{signup ? "부테크에 오신 것을 환영합니다." : "선택한 강의: [강의명]"}</p></div>
    <div className="mb-6 flex h-[46px] border-b border-[#e2e8f0] text-sm"><Link href="/login" className={`flex flex-1 items-center justify-center ${!signup ? "border-b-2 border-blue-700 font-bold text-blue-700" : "text-slate-500"}`}>로그인</Link><Link href="/signup" className={`flex flex-1 items-center justify-center ${signup ? "border-b-2 border-blue-700 font-bold text-blue-700" : "text-slate-500"}`}>회원가입</Link></div>
    <form className="space-y-5" onSubmit={undefined}>
      <label className="block space-y-2 text-sm font-medium text-[#0f1f35]">이메일<input type="email" required placeholder="이메일을 입력하세요" className="h-12 w-full rounded-md border border-[#ccd1d9] px-3 font-normal outline-none focus:border-blue-600" /></label>
      {signup && <label className="block space-y-2 text-sm font-medium text-[#0f1f35]">이름<input type="text" required placeholder="이름을 입력하세요" className="h-12 w-full rounded-md border border-[#ccd1d9] px-3 font-normal outline-none focus:border-blue-600" /></label>}
      <label className="block space-y-2 text-sm font-medium text-[#0f1f35]">비밀번호<input type="password" required minLength={8} placeholder="비밀번호를 입력하세요" className="h-12 w-full rounded-md border border-[#ccd1d9] px-3 font-normal outline-none focus:border-blue-600" /></label>
      {signup && <label className="block space-y-2 text-sm font-medium text-[#0f1f35]">비밀번호 확인<input type="password" required minLength={8} placeholder="비밀번호를 다시 입력하세요" className="h-12 w-full rounded-md border border-[#ccd1d9] px-3 font-normal outline-none focus:border-blue-600" /></label>}
      <button type="submit" className="h-[46px] w-full rounded-md bg-[#1d4ed8] text-sm font-bold text-white">{signup ? "회원가입" : "로그인"}</button>
    </form>
    {!signup && <div className="mt-5 text-center"><Link href="/reset-password" className="text-[13px] text-[#64748b] underline">비밀번호 재설정</Link></div>}
  </section>;
}