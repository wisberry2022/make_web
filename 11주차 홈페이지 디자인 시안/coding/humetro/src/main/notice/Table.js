const Table = ({ table_data }) => {
  return (
    <table>
      <thead>
        <tr>
          {table_data.thead.map(it)}
        </tr>
      </thead>
    </table>
  )
}

export default Table;