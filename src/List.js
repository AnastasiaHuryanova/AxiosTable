import "./styles.css";

export default function List({ data }) {
  const info = [
    "id",
    "name",
    "nickname",
    "email",
    "phone",
    "street",
    "suite",
    "city",
    "zipcode",
    "company name"
  ];
  return (
    <table>
      <tbody>
        <tr>
          {info.map((headers, index) => (
            <th key={index}>{headers}</th>
          ))}
        </tr>
        {data.map((names) => (
          <tr key={names.id}>
            <td>{names.id}</td>
            <td>{names.name}</td>
            <td>{names.username}</td>
            <td>{names.email}</td>
            <td>{names.phone}</td>
            <td>{names.address.street}</td>
            <td>{names.address.suite}</td>
            <td>{names.address.city}</td>
            <td>{names.address.zipcode}</td>
            <td>{names.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
