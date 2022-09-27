import Table from './Table.js'

const Result = ({ resultData }) => {
  return (
    <div className="result_box">
      <div className="title_box">
        <h4>검색 결과</h4>
      </div>
      <Table resultData={resultData} />
      {console.log(`Result 내부 data:`, resultData)}
    </div>
  )
}

export default Result;