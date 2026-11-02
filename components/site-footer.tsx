"use client";

import Image from "next/image";


import { useEffect, useState } from "react";
import { businessInfo } from "@/config/business";
import { PrivacyPolicyModal } from "@/components/privacy-policy-modal";

const termsSections = [
  {
    title: "제1조 목적",
    paragraphs: [
      '본 이용약관은 부테크클래스(이하 "사이트")가 제공하는 부동산·재테크 온라인 강의 및 커뮤니티 서비스의 이용조건과 운영에 관한 제반 사항을 규정함을 목적으로 합니다.',
    ],
  },
  {
    title: "제2조 용어의 정의",
    paragraphs: [
      "본 약관에서 사용되는 주요 용어의 정의는 다음과 같습니다.",
      "① 회원 : 본 약관에 동의하고 개인정보를 제공하여 회원등록을 완료한 자로서, 부테크클래스와 이용계약을 체결하고 서비스를 이용하는 이용자를 말합니다.",
      "② 이용계약 : 부테크클래스 서비스 이용과 관련하여 사이트와 회원 간에 체결하는 계약을 말합니다.",
      "③ 회원 아이디(ID) : 회원 식별 및 서비스 이용을 위해 회원별로 부여되는 고유한 문자와 숫자의 조합을 말합니다.",
      "④ 비밀번호 : 회원 본인임을 확인하고 권익 보호를 위해 회원이 설정한 문자와 숫자의 조합을 말합니다.",
      "⑤ 운영자 : 부테크클래스 사이트를 개설하여 운영하는 자를 말합니다.",
      "⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.",
    ],
  },
  {
    title: "제3조 약관 외 준칙",
    paragraphs: [
      "운영자는 필요한 경우 별도의 운영정책을 공지할 수 있으며, 본 약관과 운영정책이 상충될 경우 운영정책이 우선 적용됩니다.",
    ],
  },
  {
    title: "제4조 이용계약 체결",
    paragraphs: [
      "① 이용계약은 서비스를 이용하려는 자가 본 약관에 동의하고 가입 신청을 하면, 운영자가 이를 승낙함으로써 성립합니다.",
      '② 가입 신청 시 약관 하단의 "동의합니다"를 선택하는 것으로 본 약관에 동의한 것으로 간주합니다.',
    ],
  },
  {
    title: "제5조 서비스 이용 신청",
    paragraphs: [
      "① 회원으로 등록하려는 이용자는 사이트에서 요청하는 정보(ID, 비밀번호, 닉네임 등)를 정확하게 제공해야 합니다.",
      "② 타인의 정보를 도용하거나 허위 정보를 등록한 회원은 서비스 이용 관련 어떠한 권리도 주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.",
    ],
  },
  {
    title: "제6조 개인정보처리방침",
    paragraphs: [
      "사이트 및 운영자는 회원의 비밀번호를 보관하지 않으며, 개인정보 관련 사항은 사이트의 개인정보처리방침을 따릅니다.",
      "운영자는 관계 법령에 따라 회원의 개인정보를 보호하기 위해 최선을 다합니다. 단, 회원의 귀책 사유로 인해 노출된 개인정보에 대해서는 운영자가 책임을 지지 않습니다.",
      "회원이 미풍양속에 저해되거나 국가안보에 위배되는 위법 게시물을 등록·배포할 경우, 관련 기관의 요청이 있을 시 해당 자료를 열람하거나 관련 기관에 제출할 수 있습니다.",
    ],
  },
  {
    title: "제7조 운영자의 의무",
    paragraphs: [
      "① 운영자는 회원으로부터 제기된 의견이나 불만이 정당하다고 인정될 경우 신속하게 처리합니다. 불가피하게 즉시 처리가 어려운 경우, 공지 또는 이메일·쪽지 등을 통해 회원에게 안내합니다.",
      "② 운영자는 안정적인 서비스 제공을 위해 설비 장애 발생 시 지체 없이 수리·복구합니다. 단, 천재지변 또는 부득이한 사유가 있는 경우 서비스 운영을 일시 정지할 수 있습니다.",
    ],
  },
  {
    title: "제8조 회원의 의무",
    paragraphs: [
      "① 회원은 본 약관 및 운영자가 공지하는 운영정책, 관계 법령을 준수해야 하며, 사이트 운영을 방해하거나 명예를 손상하는 행위를 해서는 안 됩니다.",
      "② 회원은 운영자의 명시적 동의 없이 서비스 이용 권한 또는 이용계약상 지위를 타인에게 양도·증여하거나 담보로 제공할 수 없습니다.",
      "③ 회원은 ID 및 비밀번호를 철저히 관리해야 하며, 운영자의 동의 없이 제3자에게 제공해서는 안 됩니다.",
      "④ 회원은 운영자·사이트 및 제3자의 지적 재산권을 침해해서는 안 됩니다.",
    ],
  },
  {
    title: "제9조 서비스 이용 시간",
    paragraphs: [
      "① 서비스는 연중무휴 24시간 제공을 원칙으로 합니다. 단, 시스템 점검·증설·교체 등이 필요한 경우 사전 공지 후 일시적으로 서비스를 중단할 수 있습니다.",
      "② 다음의 경우에는 사전 공지 없이 서비스를 일시 또는 영구 중단할 수 있습니다.",
      "• 긴급 시스템 점검·증설·교체·고장 또는 오동작",
      "• 국가비상사태·정전·천재지변 등 불가항력적 사유",
      "• 기간통신사업자의 전기통신 서비스 중지",
      "• 서비스 폭주 등으로 정상 운영이 불가한 경우",
      "③ 서비스 중단 시 사이트 공지사항을 통해 회원에게 안내하며, 불가항력적 사유로 사전 공지가 어려운 경우 사후에 공지합니다.",
    ],
  },
  {
    title: "제10조 서비스 이용 해지",
    paragraphs: [
      "① 회원이 이용계약을 해지하려면 온라인을 통해 본인이 직접 해지 신청을 해야 합니다.",
      "② 해지 신청과 동시에 관련 데이터가 회원 관리 화면에서 자동 삭제되며, 이후 운영자는 해당 회원의 정보를 열람할 수 없습니다.",
    ],
  },
  {
    title: "제11조 서비스 이용 제한",
    paragraphs: [
      "회원이 다음 각 호에 해당하는 행위를 할 경우, 운영자는 서비스 이용 제한 또는 이용계약 해지 등의 조치를 취할 수 있습니다.",
      "① 가입 시 또는 정보 변경 시 허위 내용을 등록하는 행위",
      "② 타인의 서비스 이용을 방해하거나 정보를 도용하는 행위",
      "③ 운영자·직원 또는 관계자를 사칭하는 행위",
      "④ 사이트 또는 제3자의 인격권·지적재산권을 침해하거나 업무를 방해하는 행위",
      "⑤ 다른 회원의 ID를 부정하게 사용하는 행위",
      "⑥ 다른 회원의 개인정보를 동의 없이 수집·저장·공개하는 행위",
      "⑦ 범죄와 결부된다고 객관적으로 판단되는 행위",
      "⑧ 기타 관계 법령에 위배되는 행위",
    ],
  },
  {
    title: "제12조 게시물의 관리",
    paragraphs: [
      "① 사이트 게시물의 관리 책임은 운영자에게 있으며, 운영자는 불량 게시물을 상시 모니터링하고 발견 또는 신고 시 해당 게시물을 삭제하고 작성 회원에게 주의를 줍니다. 단, 게시물의 내용에 대한 책임은 게시자 본인에게 있습니다.",
      "② 정보통신윤리위원회 등 공공기관의 시정 요구가 있는 경우, 운영자는 회원의 사전 동의 없이 게시물을 삭제하거나 이동할 수 있습니다.",
      "③ 다음에 해당하는 게시물은 불량 게시물로 판단합니다.",
      "• 타인에게 모욕을 주거나 명예를 훼손하는 내용",
      "• 공공질서·미풍양속에 반하는 내용의 유포 또는 링크",
      "• 불법 복제 또는 해킹을 조장하는 내용",
      "• 영리 목적의 광고성 게시물",
      "• 범죄와 결부된다고 인정되는 내용",
      "• 제3자의 저작권 등 권리를 침해하는 내용",
      "• 기타 관계 법령에 위배되는 내용",
      "④ 제3자로부터 명예훼손·지적재산권 침해 등을 이유로 게시 중단 요청이 접수된 경우, 운영자는 해당 게시물을 임시 게시 중단할 수 있으며, 관련 분쟁의 결과에 따라 처리합니다.",
    ],
  },
  {
    title: "제13조 게시물의 보관",
    paragraphs: [
      "운영자가 불가피한 사정으로 사이트를 중단하게 될 경우, 회원에게 사전 공지하고 게시물 이전이 원활하게 이루어질 수 있도록 최선을 다합니다.",
    ],
  },
  {
    title: "제14조 게시물에 대한 저작권",
    paragraphs: [
      "① 회원이 사이트에 게시한 게시물의 저작권은 해당 회원에게 귀속됩니다. 사이트는 게시자의 동의 없이 게시물을 상업적으로 이용할 수 없습니다. 단, 비영리 목적의 경우 또는 서비스 내 게재는 예외로 합니다.",
      "② 회원은 서비스를 통해 취득한 정보를 임의로 가공·판매하는 등 상업적으로 이용할 수 없습니다.",
      "③ 운영자는 제12조 각 호에 해당한다고 판단되는 게시물을 사전 통지 없이 삭제·이동하거나 등록을 거부할 수 있습니다.",
    ],
  },
  {
    title: "제15조 손해배상",
    paragraphs: [
      "① 사이트 이용과 관련하여 발생하는 민·형사상 책임은 1차적으로 회원 본인에게 있습니다.",
      "② 천재지변 등 불가항력적 사유 또는 회원의 고의·과실로 인해 발생한 손해에 대해서는 운영자가 배상 책임을 지지 않습니다.",
    ],
  },
  {
    title: "제16조 면책",
    paragraphs: [
      "① 운영자는 회원이 서비스에서 기대하는 이익을 얻지 못하거나, 서비스 자료의 선택·이용으로 발생하는 손해에 대해 책임을 지지 않습니다.",
      "② 운영자는 사이트 기반 또는 타 통신업자의 전기통신 서비스 장애로 인한 손해에 대해 책임을 지지 않습니다.",
      "③ 운영자는 회원이 저장·게시·전송한 자료와 관련하여 일체의 책임을 지지 않습니다.",
      "④ 운영자는 회원의 귀책 사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.",
      "⑤ 운영자는 회원 상호 간 또는 회원과 제3자 간의 일체의 활동(데이터 전송, 커뮤니티 활동 포함)에 대해 책임을 지지 않습니다.",
      "⑥ 운영자는 회원이 게시하거나 사이트를 통해 제공받는 자료의 진위·신뢰도·정확성 등 내용에 대해 책임을 지지 않습니다.",
      "⑦ 운영자는 회원 간 또는 회원과 제3자 간 서비스를 매개로 한 거래에서 발생하는 손해에 대해 책임을 지지 않습니다.",
      "⑧ 운영자는 귀책 사유 없이 회원 간 또는 회원과 제3자 간에 발생한 분쟁에 대해 책임을 지지 않습니다.",
      "⑨ 운영자는 설비 관리·점검·보수·교체 과정 또는 소프트웨어 운용 중 중대한 과실 없이 발생한 시스템 장애, 제3자의 공격, 대응 방법이 개발되지 않은 바이러스 유포 등 불가항력적 사유로 인한 회원의 손해에 대해 책임을 지지 않습니다.",
    ],
  },
  {
    title: "제17조 유료 서비스 결제 및 환불",
    paragraphs: [
      "① 결제",
      "회원은 부테크클래스에서 제공하는 유료 강의를 수강하기 위해 사이트에서 안내하는 방법에 따라 결제를 진행해야 합니다.",
      "② 환불 기준",
      "유료 강의 결제 후 환불은 아래 기준에 따라 처리됩니다.",
    ],
    refundTable: true,
    afterTable: [
      "③ 환불 신청 방법",
      "환불을 원하는 회원은 사이트 내 고객센터 또는 운영자에게 직접 환불 신청을 해야 하며, 환불은 신청일로부터 영업일 기준 3~5일 이내 처리됩니다.",
      "④ 환불 불가 사유",
      "다음의 경우에는 환불이 제한될 수 있습니다.",
      "• 강의 시작 후 3주차 이후 환불 신청",
      "• 강의 콘텐츠를 무단으로 캡처·녹화·배포한 경우",
      "• 부정한 방법으로 결제하거나 이용약관을 위반한 경우",
      "⑤ 콘텐츠 이용 제한",
      "수강 중이거나 수강 완료한 강의 콘텐츠(영상, 자료 등)의 다운로드, 캡처, 녹화, 재배포는 엄격히 금지되며, 위반 시 법적 조치를 받을 수 있습니다.",
    ],
  },
  {
    title: "제18조 투자 정보 면책",
    paragraphs: [
      "① 부테크클래스에서 제공하는 부동산·재테크 관련 강의 및 콘텐츠는 교육 목적으로만 제공되며, 특정 투자 상품에 대한 투자 권유 또는 투자 자문이 아닙니다.",
      "② 강의 내용을 참고한 투자 결정 및 그로 인해 발생하는 손익은 전적으로 회원 본인의 책임이며, 운영자는 이에 대해 어떠한 책임도 지지 않습니다.",
      "③ 부동산·금융 시장은 변동성이 크므로, 강의 내용이 실제 시장 상황과 다를 수 있으며 운영자는 정보의 정확성·완전성을 보장하지 않습니다.",
    ],
  },
];

export function SiteFooter() {
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    if (!termsOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTermsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [termsOpen]);

  return (
    <>
      <footer className="border-t border-[#e2e8f0] bg-[#f8fafc] text-slate-500">
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1248px] py-8">
          <div className="grid gap-7 sm:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] sm:gap-10">
            <a href="/" aria-label="부테크클래스 홈" className="flex items-start">
              <Image
                src="/images/butech_logo.png"
                alt="부테크클래스"
                width={180}
                height={48}
                className="h-6 w-auto object-contain"
              />
            </a>

            <div className="min-w-0">
              <nav className="mb-5 flex flex-wrap gap-x-10 gap-y-3 text-[12px] font-medium text-[#465873] sm:justify-end">
                <button
                  type="button"
                  onClick={() => setTermsOpen(true)}
                  className="cursor-pointer text-left hover:text-sky-700"
                >
                  이용약관
                </button>
                <PrivacyPolicyModal />
              </nav>

              <div className="text-[11px] leading-[1.9] text-[#8a9bb3] sm:text-[12px]">
                <p className="flex flex-wrap gap-x-6">
                  <span>상호명 {businessInfo.name}</span>
                  <span>대표 {businessInfo.representative}</span>
                  <span>사업자등록번호 {businessInfo.businessNumber}</span>
                </p>
                <p className="flex flex-wrap gap-x-6">
                  <span>{businessInfo.address}</span>
                  <span>고객센터: {businessInfo.customerService}</span>
                </p>
                <p>개인정보보호정책 책임자: {businessInfo.privacyOfficer}</p>
                <p className="flex flex-wrap gap-x-6">
                  <span>Contact: <a className="hover:text-sky-700" href="mailto:butech8@naver.com">butech8@naver.com</a></span>
                  <span>대표자 이메일: <a className="hover:text-sky-700" href="mailto:butechclass@gmail.com">butechclass@gmail.com</a></span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[#e2e8f0] pt-5 text-[10px] text-[#9aa8ba] sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 부테크ㅣ부자의 재테크 All rights reserved.</span>
            <span>모든 컨텐츠의 무단복제 및 사용을 금지합니다.</span>
          </div>
        </div>
      </footer>

      {termsOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setTermsOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
            className="flex max-h-[min(88vh,900px)] w-full max-w-[760px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
              <h2 id="terms-title" className="text-lg font-bold text-[#122c4d]">
                부테크클래스 이용약관
              </h2>
              <button
                type="button"
                onClick={() => setTermsOpen(false)}
                aria-label="이용약관 닫기"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                ×
              </button>
            </header>

            <div className="overflow-y-auto px-5 py-6 text-[13px] leading-[1.85] text-slate-700 sm:px-7 sm:text-sm">
              {termsSections.map((section) => (
                <section key={section.title} className="mb-7 last:mb-0">
                  <h3 className="mb-2 text-[14px] font-bold text-[#122c4d] sm:text-[15px]">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}

                  {section.refundTable && (
                    <div className="my-3 overflow-x-auto">
                      <table className="w-full min-w-[360px] border-collapse text-left text-[12px] sm:text-[13px]">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="border border-slate-200 px-3 py-2 font-semibold">환불 신청 시점</th>
                            <th className="border border-slate-200 px-3 py-2 font-semibold">환불 금액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-slate-200 px-3 py-2">강의 시작 후 1주차 종료 전</td>
                            <td className="border border-slate-200 px-3 py-2">결제 금액의 30% 환불</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 px-3 py-2">강의 시작 후 2주차 종료 전</td>
                            <td className="border border-slate-200 px-3 py-2">결제 금액의 10% 환불</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 px-3 py-2">강의 시작 후 3주차 이후</td>
                            <td className="border border-slate-200 px-3 py-2">환불 불가</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.afterTable?.map((paragraph, index) => (
                    <p key={index} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="mt-8 border-t border-slate-200 pt-5">
                <h3 className="mb-2 text-[14px] font-bold text-[#122c4d] sm:text-[15px]">부칙</h3>
                <p>본 약관은 부테크클래스 사이트 개설일부터 시행합니다.</p>
              </section>
            </div>

            <footer className="shrink-0 border-t border-slate-200 px-5 py-3 text-right sm:px-7">
              <button
                type="button"
                onClick={() => setTermsOpen(false)}
                className="cursor-pointer rounded-md bg-[#122c4d] px-5 py-2 text-xs font-semibold text-white hover:bg-[#1c416e]"
              >
                확인
              </button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
