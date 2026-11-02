"use client";

import { useEffect, useState } from "react";
import { businessInfo } from "@/config/business";

const sections = [
  {
    title: "제1조 (개인정보의 처리목적)",
    paragraphs: [
      "회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용하지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.",
      "1. 홈페이지 회원 가입 및 관리: 회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정 이용 방지, 각종 고지·통지 및 고충 처리를 목적으로 개인정보를 처리합니다.",
      "2. 재화 또는 서비스 제공: 강의 콘텐츠 및 자료 제공, 수강 관리, 본인인증, 요금 결제 및 정산, 고객 문의 처리 등을 목적으로 개인정보를 처리합니다.",
      "3. 고충 처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지 및 처리 결과 통보 등을 목적으로 개인정보를 처리합니다.",
    ],
  },
  {
    title: "제2조 (개인정보의 처리 및 보유기간)",
    paragraphs: [
      "① 회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.",
      "② 홈페이지 회원 정보는 회원 탈퇴 시까지 보유합니다. 다만 관계 법령 위반에 따른 수사·조사 진행 중인 경우에는 해당 수사·조사 종료 시까지, 서비스 이용에 따른 채권·채무 관계가 남아 있는 경우에는 해당 관계 정산 시까지 보유할 수 있습니다.",
      "③ 전자상거래 등 관계 법령에 따라 거래기록을 보존해야 하는 경우에는 법령에서 정한 기간 동안 보존합니다. 계약 또는 청약철회, 대금결제 및 재화 등의 공급기록은 5년, 소비자 불만 또는 분쟁 처리 기록은 3년, 표시·광고에 관한 기록은 6개월간 보존합니다.",
      "④ 통신사실확인자료 등은 통신비밀보호법 등 관계 법령에서 정한 기간에 따라 보존합니다.",
    ],
  },
  {
    title: "제3조 (개인정보의 제3자 제공)",
    paragraphs: [
      "① 회사는 제1조에서 정한 개인정보 처리 목적 범위 내에서만 개인정보를 처리하며, 정보주체의 동의 또는 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.",
      "② 회사가 정보주체의 동의를 받아 개인정보를 제3자에게 제공하는 경우에는 제공받는 자, 제공 목적, 제공 항목 및 보유·이용 기간을 사전에 알리고 동의를 받습니다.",
    ],
  },
  {
    title: "제4조 (개인정보처리의 위탁)",
    paragraphs: [
      "① 회사는 원활한 서비스 제공을 위하여 개인정보 처리 업무를 외부 업체에 위탁할 수 있습니다.",
      "② 위탁이 이루어지는 경우 회사는 위탁 업무의 내용과 수탁자를 개인정보 보호법 등 관계 법령에 따라 공개하고, 위탁계약 체결 시 개인정보의 안전한 처리, 목적 외 처리 금지, 재위탁 제한 및 수탁자 관리·감독 등에 관한 사항을 문서에 명시합니다.",
      "③ 위탁 업무의 내용이나 수탁자가 변경되는 경우 본 개인정보 처리방침을 통해 안내합니다.",
    ],
  },
  {
    title: "제5조 (정보주체 및 법정대리인의 권리와 그 행사 방법)",
    paragraphs: [
      "① 정보주체는 회사에 대해 언제든지 개인정보 열람, 정정·삭제, 처리정지 및 동의 철회 등을 요구할 수 있습니다.",
      "② 권리 행사는 서면, 전자우편 등으로 할 수 있으며 회사는 관계 법령에 따라 지체 없이 조치하겠습니다.",
      "③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우 회사는 정정 또는 삭제를 완료할 때까지 해당 개인정보를 이용하거나 제공하지 않습니다.",
      "④ 권리 행사는 법정대리인 또는 위임을 받은 대리인을 통해서도 할 수 있습니다. 이 경우 관계 법령에서 정한 위임장 등 확인 서류를 요청할 수 있습니다.",
      "⑤ 정보주체는 관계 법령을 위반하여 회사가 처리하는 본인 또는 타인의 개인정보 및 사생활을 침해해서는 안 됩니다.",
    ],
  },
  {
    title: "제6조 (처리하는 개인정보 항목)",
    paragraphs: [
      "① 회원 가입 및 관리: 이메일 주소, 이름, 비밀번호 등 회원이 가입 과정에서 입력하는 정보",
      "② 강의 및 서비스 제공: 수강 신청·이용 내역, 결제 및 환불 처리에 필요한 정보, 고객 문의 내용",
      "③ 서비스 이용 과정에서 자동 생성·수집될 수 있는 정보: 접속 로그, 접속 IP 주소, 쿠키, 서비스 이용 기록 및 기기 정보",
      "④ 결제 처리가 외부 결제대행사를 통해 이루어지는 경우 결제정보는 해당 결제대행사가 관련 법령과 자체 개인정보 처리방침에 따라 처리할 수 있습니다.",
    ],
  },
  {
    title: "제7조 (개인정보의 파기)",
    paragraphs: [
      "① 회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.",
      "② 다른 법령에 따라 개인정보를 계속 보존해야 하는 경우에는 해당 개인정보를 별도의 데이터베이스로 옮기거나 보관 장소를 달리하여 보존합니다.",
      "③ 전자적 파일 형태의 개인정보는 복구 또는 재생할 수 없도록 안전한 방법으로 삭제하며, 종이 문서에 기록된 개인정보는 분쇄 또는 소각 등의 방법으로 파기합니다.",
    ],
  },
  {
    title: "제8조 (개인정보의 안전성 확보조치)",
    paragraphs: [
      "회사는 개인정보의 안전성 확보를 위해 내부관리계획 수립 및 직원 교육 등 관리적 조치, 개인정보처리시스템 접근 권한 관리 및 보안프로그램 설치 등 기술적 조치, 자료보관 장소의 접근통제 등 물리적 조치를 시행합니다.",
    ],
  },
  {
    title: "제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부)",
    paragraphs: [
      "① 회사는 서비스 제공 및 이용 환경 개선을 위해 쿠키(cookie)를 사용할 수 있습니다. 쿠키는 웹사이트 서버가 이용자의 브라우저에 보내는 소량의 정보로 이용자의 기기 등에 저장될 수 있습니다.",
      "② 이용자는 웹 브라우저 설정을 통해 쿠키 저장을 허용하거나 차단할 수 있습니다. 다만 쿠키 저장을 차단할 경우 일부 서비스 이용에 제한이 발생할 수 있습니다.",
      "③ 쿠키 설정 방법은 브라우저 버전에 따라 다를 수 있으며, 이용 중인 브라우저의 설정 메뉴에서 개인정보 및 쿠키 관련 항목을 조정할 수 있습니다.",
    ],
  },
  {
    title: "제10조 (개인정보 보호책임자)",
    paragraphs: [
      "① 회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제를 위하여 개인정보 보호책임자를 지정하고 있습니다.",
      `개인정보 보호책임자: ${businessInfo.privacyOfficer}`,
      `문의 이메일: butech8@naver.com`,
      "② 정보주체는 서비스 이용과 관련한 개인정보 보호 문의, 불만 처리 및 피해구제 등을 위 연락처로 문의할 수 있으며, 회사는 지체 없이 답변 및 처리하겠습니다.",
    ],
  },
  {
    title: "제11조 (개인정보 열람청구)",
    paragraphs: [
      "정보주체는 개인정보 보호법 제35조에 따른 개인정보 열람을 요청할 수 있습니다. 개인정보 열람 및 관련 문의는 개인정보 보호책임자에게 이메일(butech8@naver.com)로 요청할 수 있으며, 회사는 관계 법령에 따라 신속하게 처리하도록 노력하겠습니다.",
    ],
  },
  {
    title: "제12조 (권익침해 구제 방법)",
    paragraphs: [
      "정보주체는 개인정보 침해에 대한 피해구제 및 상담을 아래 기관에 문의할 수 있습니다.",
      "1. 개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)",
      "2. 개인정보침해신고센터: 국번 없이 118 (privacy.kisa.or.kr)",
      "3. 대검찰청: 국번 없이 1301 (www.spo.go.kr)",
      "4. 경찰청: 국번 없이 182 (ecrm.police.go.kr)",
    ],
  },
];

export function PrivacyPolicyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full cursor-pointer text-left hover:text-sky-700 md:text-left"
      >
        개인정보처리방침
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
            className="flex max-h-[min(88vh,900px)] w-full max-w-[760px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
              <h2 id="privacy-title" className="text-lg font-bold text-[#122c4d]">
                개인정보 처리방침
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="개인정보 처리방침 닫기"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                ×
              </button>
            </header>

            <div className="overflow-y-auto px-5 py-6 text-[13px] leading-[1.85] text-slate-700 sm:px-7 sm:text-sm">
              <p className="mb-6">
                {businessInfo.name}(이하 "회사")는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 관련 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
              </p>

              {sections.map((section) => (
                <section key={section.title} className="mb-7 last:mb-0">
                  <h3 className="mb-2 text-[14px] font-bold text-[#122c4d] sm:text-[15px]">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="mt-8 border-t border-slate-200 pt-5">
                <h3 className="mb-2 text-[14px] font-bold text-[#122c4d] sm:text-[15px]">
                  제13조 (개인정보 처리방침 시행 및 변경)
                </h3>
                <p>
                  이 개인정보 처리방침은 사이트에 게시한 날부터 적용됩니다. 내용의 추가, 삭제 및 수정이 있을 경우 변경 사항과 시행 시기를 사이트를 통해 안내합니다.
                </p>
              </section>
            </div>

            <footer className="shrink-0 border-t border-slate-200 px-5 py-3 text-right sm:px-7">
              <button
                type="button"
                onClick={() => setOpen(false)}
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
