import '../src/App.css'

import { Link } from 'react-router-dom'

function App(){

    return (
        <div className="container">
            <div className="button">
                <Link to="/new-phone"><button>Novo Celular</button></Link>
                
            </div>
            <div className="table">
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