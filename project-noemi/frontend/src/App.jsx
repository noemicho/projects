import '../src/App.css'

import { Link } from 'react-router-dom'

import { useEffect } from 'react'

function App(){

    useEffect(() => {
        async function getAllPhones(){
            
        }
    }
    , [])

    return (
        <div className="container">
            <div className="button">
                <Link to="/new-phone"><button>Novo Celular</button></Link>
                
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Capacidade de Memória(GB)</th>
                            <th>Data de Lançamento</th>
                            <th>Alterar</th>
                            <th>Excluir</th>
                    
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App;