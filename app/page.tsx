import { businessInfo } from "@/config/business";

const courses = [
  { id: "01", title: "[강좌명을 입력하세요]", field: "[분야 / 난이도]", instructor: "[강사명]", description: "[강좌 소개 문구를 입력하세요.]", price: 39000, word: "INVEST", color: "from-[#0f2c54] via-[#1a4a8a] to-[#0d3b6e]", accent: "bg-blue-700", panel: "border-blue-200 bg-blue-50 text-blue-900" },
  { id: "02", title: "[강좌명을 입력하세요]", field: "[분야 / 난이도]", instructor: "[강사명]", description: "[강좌 소개 문구를 입력하세요.]", price: 69000, word: "PROFIT", color: "from-emerald-950 via-emerald-800 to-emerald-700", accent: "bg-emerald-600", panel: "border-emerald-200 bg-emerald-50 text-emerald-900" },
  { id: "03", title: "[강좌명을 입력하세요]", field: "[분야 / 난이도]", instructor: "[강사명]", description: "[강좌 소개 문구를 입력하세요.]", price: 99000, word: "ASSETS", color: "from-orange-950 via-orange-900 to-orange-700", accent: "bg-orange-600", panel: "border-orange-200 bg-orange-50 text-orange-900" },
  { id: "04", title: "[강좌명을 입력하세요]", field: "[분야 / 난이도]", instructor: "[강사명]", description: "[강좌 소개 문구를 입력하세요.]", price: 149000, word: "MARKET", color: "from-indigo-950 via-indigo-800 to-indigo-700", accent: "bg-indigo-700", panel: "border-indigo-200 bg-indigo-50 text-indigo-900" },
  { id: "05", title: "[강좌명을 입력하세요]", field: "[분야 / 난이도]", instructor: "[강사명]", description: "[강좌 소개 문구를 입력하세요.]", price: 199000, word: "MASTER", color: "from-slate-950 via-slate-800 to-blue-950", accent: "bg-amber-600", panel: "border-amber-200 bg-amber-50 text-amber-900", pro: true },
];

const won = (price: number) => `${price.toLocaleString("ko-KR")}원`;

function Brand() {
  return <a href="/" aria-label="부테크 홈" className="whitespace-nowrap text-[13px] font-bold tracking-tight text-[#122c4d]"><span className="text-sky-600">▰부자</span>의재테크</a>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0f1f35]">
      <header className="h-[68px] border-b border-[#e8edf2] bg-white">
        <div className="mx-auto flex h-full w-[calc(100%-48px)] max-w-[1248px] items-center justify-between">
          <Brand />
          <nav className="flex items-center gap-5 text-[13px] text-[#122c4d]" aria-label="계정 메뉴">
            <a href="/login" className="hover:underline">로그인</a>
            <a href="/signup" className="flex h-9 items-center rounded border border-[#122c4d] px-4 font-bold hover:bg-slate-50">회원가입</a>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid min-h-[460px] w-[calc(100%-48px)] max-w-[1248px] items-center gap-10 py-12 lg:grid-cols-[1fr_544px] lg:py-0">
          <div className="pt-2">
            <h1 className="mb-2 text-[34px] font-extrabold leading-[1.2] tracking-[-1.7px] text-[#1f2938] sm:text-[42px]">
              수익형 부동산,<br />원하는 강좌만<br />골라서 수강하세요.
            </h1>
            <p className="max-w-[540px] text-[13px] leading-[1.65] text-[#596678] sm:text-[15px]">
              원하는 강좌를 선택해 월 단위로 구독하세요. 각 구독은 선택한 강좌에만 적용됩니다.
            </p>
          </div>
          <div role="img" aria-label="메인 이미지 영역" className="flex h-[240px] items-center justify-center rounded-lg border border-dashed border-[#ccd1d9] bg-[#f4f5f6] text-sm text-[#808a99] lg:h-[340px]">
            IMAGE PLACEHOLDER
          </div>
        </div>
      </section>

      <section className="px-0 pb-[60px] pt-[52px]">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1248px]">
          <div className="mb-8">
            <span className="mb-2 block text-[10px] font-extrabold text-blue-600">개별 강좌 구독</span>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#0f1f35] sm:text-[28px]">수강할 강좌를 선택하세요</h2>
            <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">각 강좌는 독립된 월 구독 상품입니다. 원하는 강좌만 골라 바로 구독하세요.</p>
          </div>

          <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <article key={course.id} className="overflow-hidden rounded-[10px] border border-[#e2e8f0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
                <div className={`relative flex h-[170px] items-center justify-center overflow-hidden bg-gradient-to-br ${course.color}`}>
                  <span aria-hidden="true" className="absolute text-[48px] font-black text-white/[0.07]">{course.word}</span>
                  <span className="absolute left-3 top-3 rounded border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white">COURSE {course.id}</span>
                  {course.pro && <span className="absolute left-3 top-10 rounded bg-amber-400 px-2 py-0.5 text-[9px] font-extrabold text-slate-900">PRO</span>}
                  <span className="absolute right-3 top-3 rounded bg-amber-400 px-3 py-1.5 text-[11px] font-bold text-[#0a1628]">월 {won(course.price)}</span>
                  <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-transparent to-black/50 px-4 py-3 text-sm font-bold text-white">{course.title}</span>
                </div>

                <div className="flex flex-col gap-3 p-4">
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-400">{course.field}</p>
                    <h3 className="text-[15px] font-bold text-[#0f1f35]">강좌 {course.id} — {course.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-500">강사: {course.instructor}</p>
                    <p className="text-xs leading-relaxed text-slate-600">{course.description}</p>
                  </div>

                  <div className={`rounded-lg border p-3.5 ${course.panel}`}>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <strong className="text-xs">강좌 {course.id} · 개별 구독</strong>
                      <span className="whitespace-nowrap text-[10px] text-slate-500">이 강좌만 별도 결제</span>
                    </div>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-[11px] text-slate-500">월 구독료</span>
                      <strong className="text-[22px] tracking-tight text-[#0f1f35]">{won(course.price)}</strong>
                    </div>
                    <a href={`/subscribe?course=${course.id}`} className={`flex h-10 items-center justify-center rounded-md text-[13px] font-bold text-white transition-opacity hover:opacity-90 ${course.accent}`}>
                      이 강좌 구독하기
                    </a>
                  </div>
                  <a href={`/courses/course-${course.id}`} className="text-center text-xs text-slate-500 underline underline-offset-2 hover:text-slate-800">강좌 상세 보기</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e8edf2] bg-[#f8fafc] text-slate-400">
        <div className="mx-auto grid min-h-[100px] w-[calc(100%-48px)] max-w-[1248px] gap-5 py-5 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-8">
          <div><Brand /></div>
          <div className="text-[9px] leading-[1.8] md:text-right">
            <p><strong>상호명</strong> {businessInfo.name}　 <strong>대표</strong> {businessInfo.representative}　 <strong>사업자등록번호</strong> {businessInfo.businessNumber}</p>
            <p>{businessInfo.address}</p>
            <p>고객센터: {businessInfo.customerService}　 개인정보보호정책 책임자: {businessInfo.privacyOfficer}</p>
          </div>
          <nav className="flex gap-4 text-[10px] text-slate-600 md:flex-col md:gap-2 md:text-right" aria-label="정책 링크">
            <a href="/terms" className="hover:underline">이용약관</a>
            <a href="/privacy" className="hover:underline">개인정보처리방침</a>
          </nav>
        </div>
        <div className="mx-auto flex min-h-11 w-[calc(100%-48px)] max-w-[1248px] flex-col justify-center gap-1 border-t border-[#e8edf2] py-3 text-[8px] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 부테크ㅣ부자의 재테크 All rights reserved.</span>
          <span>모든 컨텐츠의 무단복제 및 사용을 금지합니다.</span>
        </div>
      </footer>
    </main>
  );
}
