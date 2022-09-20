import './Notice.scss';
import Table from './Table';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const MetroNotice = () => {
  const table_data = [{ thead: ['번호', '제목', '등록자', '등록일'] }]
  const table_content_data = [
    { id: 1, num: 1670, title: '호포변전소 소방설비 개량공사 실시설계용역 사업수행능력 기준(안) 의견 수렴 공고', writer: '관리자', date: '2022-09-14' },
    { id: 2, num: 1669, title: '제25회 시민문화예술강좌 [문화 한입] 수강생 모집', writer: '관리자', date: '2022-08-25' },
    { id: 3, num: 1668, title: '2022년 부산교통공사 역명부기 유상판매 사업 안내', writer: '관리자', date: '2022-08-19' },
    { id: 4, num: 1667, title: '부산 도시철도 1호선 신형전동차 실물모형(Mock-Up) 시민설명회 응모 결과 확인', writer: '관리자', date: '2022-08-03' },
    { id: 5, num: 1666, title: '부산교통공사 기술자문위원회 위원 명단 공개', writer: '관리자', date: '2022-08-01' },
    { id: 6, num: 1665, title: '공공기관 종합청렴도 평가 관련 개인정보 제3자 제공사항 알림', writer: '관리자', date: '2022-07-25' },
    { id: 7, num: 1664, title: '홈페이지(웹) 서비스 일시중지 알림', writer: '관리자', date: '2022-07-12' },
    { id: 8, num: 1663, title: '부산교통공사 비상임이사 공모 관련 추천대상자 공고', writer: '관리자', date: '2022-07-12' },
    { id: 9, num: 1662, title: '부산교통공사 기술자문위원회 위원 공개모집 공고', writer: '관리자', date: '2022-07-11' }
  ]
  return (
    <div className="metro_notice">
      <Table data={table_data} content={table_content_data} />
    </div>
  )
}

const MetroNews = () => {
  const table_data = [{ thead: ['번호', '제목', '등록자', '등록일'] }]
  const table_content_data = [
    { id: 1, num: 1347, title: '부산교통공사 시민문화예술강좌 수강생 모집', writer: '관리자', date: '2022-08-25' },
    { id: 2, num: 1346, title: '부산 1호선 신차모형 시민공개·양산선 차량제작 본격화', writer: '관리자', date: '2022-08-16' },
    { id: 3, num: 1345, title: '부산교통공사, 사회공헌으로 지역사회와 동반성장을 꿈꾸다', writer: '관리자', date: '2022-08-11' },
    { id: 4, num: 1344, title: '부산 도시철도 1호선 신형전동차 실물모형(Mock-Up) 시민설명회 응모 결과 확인', writer: '관리자', date: '2022-08-09' },
    { id: 5, num: 1343, title: '도시철도 안전운행에 필수, “레일을 식혀라”', writer: '관리자', date: '2022-08-08' },
    { id: 6, num: 1342, title: '과거 부산도시철도 이용승객, 30년 만에 운임 납부', writer: '관리자', date: '2022-07-18' },
    { id: 7, num: 1341, title: '부산도시철도 시민기관사가 되어보세요!', writer: '관리자', date: '2022-07-11' },
    { id: 8, num: 1340, title: '부산교통공사, 신입사원 채용 최종 합격자 발표', writer: '관리자', date: '2022-07-04' },
    { id: 9, num: 1339, title: '부산도시철도, 교통약자 이동편의 개선', writer: '관리자', date: '2022-07-04' }
  ]
  return (
    <div className="metro_news">
      <Table data={table_data} content={table_content_data} />
    </div>
  )
}

const MetroData = () => {
  const table_data = [{ thead: ['번호', '제목', '등록자', '등록일'] }]
  const table_content_data = [
    { id: 1, num: 647, title: '2022년 8월 수송수입실적', writer: '관리자', date: '2022-09-13' },
    { id: 2, num: 646, title: '2022년도 8월 열차운행실적(1~4호선)입니다.', writer: '관리자', date: '2022-09-06' },
    { id: 3, num: 645, title: '2022년 상반기 동백전 정책수당 발행실적', writer: '관리자', date: '2022-08-22' },
    { id: 4, num: 644, title: '2022년 7월 수송수입실적', writer: '관리자', date: '2022-08-10' },
    { id: 5, num: 643, title: '도시철도 안전운행에 필수, “레일을 식혀라”', writer: '관리자', date: '2022-08-03' },
    { id: 6, num: 642, title: '2022년도 7월 열차운행실적(1~4호선)입니다.', writer: '관리자', date: '2022-07-20' },
    { id: 7, num: 641, title: '2022년 6월 수송수입실적', writer: '관리자', date: '2022-07-06' },
    { id: 8, num: 640, title: '2022년도 6월 열차운행실적(1~4호선)입니다.', writer: '관리자', date: '2022-06-27' },
    { id: 9, num: 639, title: '2022년 5월 수송수입실적', writer: '관리자', date: '2022-06-07' }
  ]
  return (
    <div className="metro_data">
      <Table data={table_data} content={table_content_data} />
    </div>
  )
}

const MetroCulture = () => {
  const table_data = [{ thead: ['번호', '행사내용', '해당역', '공연일자'] }]
  const table_content_data = [
    { id: 1, num: 13, title: '찾아가는 노동법률 및 심리치유상담', writer: '금사', date: '2022-09-28' },
    { id: 2, num: 12, title: '찾아가는 이동취업센터', writer: '수안', date: '2022-09-28' },
    { id: 3, num: 11, title: '장애인 자립생활 홍보캠페인', writer: '동매', date: '2022-09-23' },
    { id: 4, num: 10, title: '금정구서역 작은도서관 도서교환전 행사 홍보 및 운영', writer: '구서', date: '2022-09-23' },
    { id: 5, num: 9, title: '아름다운 사회통합을 위한 장애아동 인식개선 캠페인', writer: '중앙', date: '2022-09-13' },
    { id: 6, num: 8, title: '에이즈 예방 홍보사업 캠페인', writer: '충렬사', date: '2022-09-12' },
    { id: 7, num: 7, title: '	2022년 나는 No-담, Yes-건 흡연예방 아이디어 공모전 수상작 전시회(부산광역시교육청)', writer: '경성대 · 부경대', date: '2022-08-29' },
    { id: 8, num: 6, title: '국내외 결손가정 어린이 보호캠페인', writer: '구서', date: '2022-08-27' },
    { id: 9, num: 5, title: '거리이동노동상담', writer: '동래', date: '2022-08-25' }
  ]
  return (
    <div className="metro_culture">
      <Table data={table_data} content={table_content_data} />
    </div>
  )
}

const Notice = () => {
  const [cnum, setNum] = useState(0);
  const TabList = [
    { id: 1, title: '공지사항', link: '/' },
    { id: 2, title: '보도자료', link: '/' },
    { id: 3, title: '자료실', link: '/' },
    { id: 4, title: '문화행사', link: '/' },
  ];

  const ComponentSet = [<MetroNotice />, <MetroNews />, <MetroData />, <MetroCulture />];

  return (
    <section className="notice">
      <div className="container">
        <div className="title_box">
          <h3>부산교통공사의 알찬소식!</h3>
          <p>
            부산교통공사의 다양한 소식을 접할 수 있습니다
          </p>
        </div>
        <ul className="notice_list">
          {TabList.map((it, idx) => {
            return (
              <li key={idx} onClick={() => (setNum(idx))} className={idx === cnum ? 'on' : ''}>
                <NavLink to={it.link}>{it.title}</NavLink>
              </li>
            )
          })}
        </ul>
        {ComponentSet[cnum]}
      </div>
    </section>
  )
}

export default Notice;