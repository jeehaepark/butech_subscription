export type CourseStatus = "recruiting" | "upcoming" | "closed" | "ongoing";

export type Course = {
  id: string;
  title: string;
  description: string;
  monthlyPrice: number;
  status: CourseStatus;
  image: string;
  detailImages: string[];
  tags: string[];
};


export const courses: Course[] = [
  {
    id: "RIS_03",
    title: "[파이팅팔콘] 실전 투자 스터디 3기",
    description: "8주만에 실전 투자자로 거듭나는 실전 투자 스터디",
    monthlyPrice: 192000,
    status: "recruiting",
    image: "/images/banners/Real_Investment_Study_Cohort_03_banner.png",
    detailImages: [
      "/images/courses/RIS_03/detail-01.png",
      "/images/courses/RIS_03/detail-02.png",
      "/images/courses/RIS_03/detail-03.png",
    ],
    tags: ["교재미포함", "8주 속성과정", "선착순모집"],
  },
  {
    id: "PAI_2026",
    title: "[파이팅팔콘] 공매투자 단기속성 클래스",
    description: "아는 사람만 계속 가져가는 시장, 무제한관리 특별혜택",
    monthlyPrice: 73400,
    status: "recruiting",
    image: "/images/banners/Public_Auction_Investment_banner.png",
    detailImages: [
      "/images/courses/PAI_2026/detail-01.png",
      "/images/courses/PAI_2026/detail-02.png",
      "/images/courses/PAI_2026/detail-03.png",
      "/images/courses/PAI_2026/detail-04.png",
      "/images/courses/PAI_2026/detail-05.png",
    ],
    tags: ["교재포함", "오프라인 수업 2회 + A/S 줌 수업 1회 + A/S 오프라인 1회", "선착순모집"],
  },
];

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR").format(price);
}
