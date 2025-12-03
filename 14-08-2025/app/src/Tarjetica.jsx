function Tarjetica({frutas}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            frutas.map((fruta,posicion) => (
                                <tr>
                                    <td>{ posicion }</td>
                                    <td>{fruta}</td>
                                </tr>
                            )
                            )      
                        }
                    
                </tbody>
            </table>
            
        </div>
    )
}
export default Tarjetica