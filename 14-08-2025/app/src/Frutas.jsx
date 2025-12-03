function Fruticas({frutas}){
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Frutas</th>
          </tr>
        </thead>
        <tbody>
          {frutas.map((fruta, index) => (
            <tr key={index}>
              <td>{fruta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
export default Fruticas