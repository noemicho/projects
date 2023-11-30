import '../src/App.css'

function App(){
    const handleNewPhone = () =>{
        
    }

    return (
        <div className="App">
            <div className="new-phone">
                <button onClick={handleNewPhone}>
                    Novo Celular
                </button>
            </div>
            <div className="">
                <table>
                    <thead>
                        <td>Marca</td>
                        <td>Modelo</td>
                        <td>Capacidade de Memória(GB)</td>
                        <td>Data de Lançamento</td>
                        <td>Alterar</td>
                        <td>Excluir</td>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App;