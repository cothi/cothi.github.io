const freelancer = [
  {
    date: "2021.05",
    order: "** 쇼핑몰, x1",
    subject: "google docs api, 자동 데이터 입력",
    detail: "수기로 발주받은 데이터를 구글 문서에 대입 시키는 작업을api 화를 자동화",
  },
  {
    date: "2021.05",
    order: "** 쇼핑몰, x2",
    subject: "google apps script, 데이터를 취통합을 필요한 애플리케이션 개발",
    detail: "수기로 작성한 물품 데이터를 전체 데이터에 자동 수정하는 작업 자동화"
  },
  {
    date: "2021.06",
    order: "** 학원, x1",
    subject: "학생 관리 애플리케이션",
    detail: "학생 데이터를 엑셀로 수기로 작성 후,  학생 데이터를 pdf 형태로 자동으로 변환하여 출력을 진행"
  },
  {
    date: "2022.04",
    order: "** 쇼핑몰, x3",
    subject: "gogle app script 애플리케이션 추가 기능",
    detail: "google docs로 협업 시, 동시 매크로 사용 기능 추가",
  },
  {
    date: "2022.06",
    order: "** 학원 x2",
    subject: "학생 관리 프로그램 보수 및 데이터 라벨 추가",
  }
]

const award = [
  {
    date: "2015.12",
    order: "제주지방경찰청장",
    subject: "표창장",
    detail: "기초치안확립과 경찰행정발전에 기여한 공"
  },
  {
    date: "2020.02",
    order: "서울창업허브가 주최하고 게임이용자보호센터가 주관",
    subject: "블록체인 관련 창업과 사회문제 해결을 위한 아이디어 발굴 및 실증화 2위",
    detail: "(WAR)plastic surgery blockchain, 유령수술 방지",
  }
]


const certificates = [
  {
    date: "2012-12",
    order: "한국생산성본부 (KPC)",
    subject: "GTQ(그래픽기술자격 2급)",
    details: "포토샵을 다루는 근간 기술을 다룸"
  },
  {
    date: "2016-01",
    order: "microsoft",
    subject: "Microsoft Office Specialist 2007 Master",
    detail: "office 문서를 다룸"
  },
  {
    date: "2019-09",
    order: "대한상공회의소(KCCI)",
    subject: "컴퓨터 활용능력 1급 (Computer User in the field of Spreadsheet & Database Level - 1)",
    detail: "엑셀, 데이터베이스를 다루는 컴퓨터활용 능력",
  },
  {
    date: "2019-10",
    order: "한국포렌식학회(우)",
    subject: "디지털포렌식 전문가 2급 필기",
    detail: "현장에서 디지털 증거의 무결성 및 원본성을 확보하는 증거수집자의 능력을 검증",
  },
  {
    date: "2019.12",
    order: "한국정보통신자격협회 (ICQA)",
    subject: "네트워크 관리사 - Level 2",
    detail: "네트워크 관련 업무 수행을 위한 일반적인 운용지식과 구축기술 NOS운영, Packet분석, Monitoring, 인터넷기술, Protocol 등 기초 이론과 실무능력 검정",
  },
  {
    date: "2020-10",
    order: "한국산업인력공단(HRDK)",
    subject: "정보처리기사 필기",
    detail: "소프트웨어 개발 관련 자격증으로, 정보시스템의 생명주기 전반에 걸친 프로젝트 업무를 수행하는 직무로서 계획수립, 분석, 설계, 구현, 시험, 운영, 유지보수 등의 업무를 수행할 수 있는 능력을 검증",
  },
  {
    date: "2021-10",
    order: "대한상공회의소 (KCCI)",
    subject: "전자상거래운용사",
    detail: "전자상거래에 대한 기초적인 지식과 기능을 가지고 전자상거래관리사의 업무를 보조할 수 있는 자"
  },
]


const education = [
  {
    date: "2012.02",
    order: "제주중앙고등학교",
    subject: "관광정보학",
    detail: "관광현상에 있어서 정보란 교통수단과 함께 관광의 주체인 관광객과 관광의 객체인 관광대상을 연결시켜 주는 관광매체를 이루는 것",
  },
  {
    date: "2014.10",
    order: "의무경찰",
    subject: "해안경비 - 복무",
    detail: "군사훈련을 마친 후 전환되어 대간첩작전 및 각종 치안 업무 보조임무 수행",
  },
  {
    date: "2019.02",
    order: "중앙대학교 미래교육원",
    subject: "컴퓨터 공학 BS - 정보보안 (4.36 / 4.5) ",
    detail: "정보보호(情報保護, Information Security)란, 정보를 보호하고 보안을 유지, 인가된 사용자만(기밀성), 완전하고 정확한 정보에(무결성), 필요로 할 때마다 접근할 수 있도록 하는 것(가용성)"
  },
  {
    date: "2021.03",
    order: "과학기술정보통신부, 한국인터넷진흥원",
    subject: "보안사고 분석대응 과정",
    detail: "보안관제, 침해사고 및 안성코드 분석, 보안 솔루션 개발 분야"
  },
  {
    date: "2021.08",
    order: "codestates",
    subject: "blockchain web3",
    detail: "웹 기반, 블록체인을 활용하는 블록체인 전문가를 양성",
  }
]

const interesting = [
  {
    date: "2015.5",
    order: "제주MBC 국제평화마라톤 사무국",
    subject: "하프 코스 참가",
    detail: "제 15회 2015년 mbc 국제평화마라톤 참가",
  },
  {
    date: "2015.5",
    order: "제주특별자치도 주최",
    subject: "10km 20대 부문 3위",
    detail: "제20회 제주국제관광마라톤 입상 상장",
  },
  {
    date: "2016.03",
    order: "제주MBC 국제평화마라톤 사무국",
    subject: "10km 20대 부문 1위",
    detail: "제 16회 2016년 mbc 국제평화마라톤 입상 상장"
  },
  {
    date: "2018.08",
    order: "대한적십자사",
    subject: "적십자사 헌혈 운동 - 은장",
    detail: "숭고한 인류애의 정신을 발휘하여 적십자 헌혈 운동에 기여",
  },
  {
    date: "2020.1",
    order: "대한적십자사",
    subject: "적십자사 헌혈 운동 - 금장",
    detail: "숭고한 인류애의 정신을 발휘하여 적십자 헌혈 운동에 기여",
  },
  {
    date: "2022.06",
    order: "제주특별자치도 주최",
    subject: "10km 코스 참가",
    detail: "제주국제 관광마라톤 10km 참가",
  },


]

export { freelancer, award, certificates, education, interesting }