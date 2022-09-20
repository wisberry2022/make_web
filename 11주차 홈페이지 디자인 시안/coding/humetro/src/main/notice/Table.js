import { Link } from 'react-router-dom';

const Table = ({ data, content }) => {
  const thead = data[0].thead;
  return (
    <table>
      <thead>
        <tr>
          {thead.map((it, idx) => {
            return (
              <th key={idx}>{it}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {content.map((it, idx) => {
          return (
            <tr key={idx}>
              <td>{it.num}</td>
              <td>
                <Link to="/">
                  {it.title}
                </Link>
              </td>
              <td>{it.writer}</td>
              <td>{it.date}</td>
            </tr>
          )

        })}
      </tbody>
    </table>
  )
}

export default Table;