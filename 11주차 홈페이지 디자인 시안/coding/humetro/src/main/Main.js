import Intro from './intro/Intro';
import TimeTable from './time_table/TimeTable';
import Notice from './notice/Notice';

const Main = () => {
  const stationData = [
    { id: 0, lineName: '', stationSet: [] },
    {
      id: 1, lineName: '1호선', stationSet: [
        { code: '95', name: '다대포해수욕장' },
        { code: '96', name: '다대포항' },
        { code: '97', name: '낫개' },
        { code: '98', name: '신장림' },
        { code: '99', name: '장림' },
        { code: '100', name: '동매' },
        { code: '101', name: '신평' },
        { code: '102', name: '하단' },
        { code: '103', name: '당리' },
        { code: '104', name: '사하' },
        { code: '105', name: '괴정' },
        { code: '106', name: '대티' },
        { code: '107', name: '서대신' },
        { code: '108', name: '동대신' },
        { code: '109', name: '토성' },
        { code: '110', name: '자갈치' },
        { code: '111', name: '남포' },
        { code: '112', name: '중앙' },
        { code: '113', name: '부산역' },
        { code: '114', name: '초량' },
        { code: '115', name: '부산진' },
        { code: '116', name: '좌천' },
        { code: '117', name: '범일' },
        { code: '118', name: '범내골' },
        { code: '119', name: '서면' },
        { code: '120', name: '부전' },
        { code: '121', name: '양정' },
        { code: '122', name: '시청' },
        { code: '123', name: '연산' },
        { code: '124', name: '교대' },
        { code: '125', name: '동래' },
        { code: '126', name: '명륜' },
        { code: '127', name: '온천장' },
        { code: '128', name: '부산대' },
        { code: '129', name: '장전' },
        { code: '130', name: '구서' },
        { code: '131', name: '두실' },
        { code: '132', name: '남산' },
        { code: '133', name: '범어사' },
        { code: '134', name: '노포' }
      ]
    },
    {
      id: 2, lineName: '2호선', stationSet: [
        { code: '201', name: '장산' },
        { code: '202', name: '중동' },
        { code: '203', name: '해운대' },
        { code: '204', name: '동백' },
        { code: '205', name: '벡스코(시립미술관)' },
        { code: '206', name: '센텀시티' },
        { code: '207', name: '민락' },
        { code: '208', name: '수영' },
        { code: '209', name: '광안' },
        { code: '210', name: '금련산' },
        { code: '211', name: '남천' },
        { code: '212', name: '경성대 · 부경대' },
        { code: '213', name: '대연' },
        { code: '214', name: '못골' },
        { code: '215', name: '지게골' },
        { code: '216', name: '문현' },
        { code: '217', name: '국제금융센터 · 부산은행' },
        { code: '218', name: '전포' },
        { code: '219', name: '서면' },
        { code: '220', name: '부암' },
        { code: '221', name: '가야' },
        { code: '222', name: '동의대' },
        { code: '223', name: '개금' },
        { code: '224', name: '냉정' },
        { code: '225', name: '주례' },
        { code: '226', name: '감전' },
        { code: '227', name: '사상' },
        { code: '228', name: '덕포' },
        { code: '229', name: '모덕' },
        { code: '230', name: '모라' },
        { code: '231', name: '구남' },
        { code: '232', name: '구명' },
        { code: '233', name: '덕천' },
        { code: '234', name: '수정' },
        { code: '235', name: '화명' },
        { code: '236', name: '율리' },
        { code: '237', name: '동원' },
        { code: '238', name: '금곡' },
        { code: '239', name: '호포' },
        { code: '240', name: '증산' },
        { code: '241', name: '부산대양산캠퍼스' },
        { code: '242', name: '남양산' },
        { code: '243', name: '양산' },
      ]
    },
    {
      id: 3, lineName: '3호선', stationSet: [
        { code: '301', name: '수영' },
        { code: '302', name: '망미' },
        { code: '303', name: '배산' },
        { code: '304', name: '물만골' },
        { code: '305', name: '연산' },
        { code: '306', name: '거제' },
        { code: '307', name: '종합운동장' },
        { code: '308', name: '사직' },
        { code: '309', name: '미남' },
        { code: '310', name: '만덕' },
        { code: '311', name: '남산정' },
        { code: '312', name: '숙등' },
        { code: '313', name: '덕천' },
        { code: '314', name: '구포' },
        { code: '315', name: '강서구청' },
        { code: '316', name: '체육공원' },
        { code: '317', name: '대저' },
      ]
    },
    {
      id: 4, lineName: '4호선', stationSet: [
        { code: '401', name: '미남' },
        { code: '402', name: '동래' },
        { code: '403', name: '수안' },
        { code: '404', name: '낙민' },
        { code: '405', name: '충렬사' },
        { code: '406', name: '명장' },
        { code: '407', name: '서동' },
        { code: '408', name: '금사' },
        { code: '409', name: '반여농산물시장' },
        { code: '410', name: '석대' },
        { code: '411', name: '영산대' },
        { code: '412', name: '동부산대학' },
        { code: '413', name: '고촌' },
        { code: '414', name: '안평' },
      ]
    },
  ]

  return (
    <main>
      <Intro />
      <TimeTable station={stationData} />
      <Notice />
    </main>
  )
}

export default Main;