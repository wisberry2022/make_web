import Table from './Table.js'

const Result = ({ resultData, searchTarget }) => {
  return (
    <div className="result_box">
      <div className="title_box">
        <h4>검색 결과</h4>
        <strong>{searchTarget}로 검색한 결과입니다.</strong>
      </div>
      <Table resultData={resultData} />
      {console.log(`Result 내부 data:`, resultData)}
    </div>
  )
}

export default Result;