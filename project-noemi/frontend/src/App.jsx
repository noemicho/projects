import '../src/App.css'

import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'

import api from '../src/api.js'

import Body from '../src/Body.jsx'

function App(){

    const [allPhones, setAllNotes] = useState([])

    useEffect(() => {
        async function getAllPhones(){
            const response = await api.get('/home/celulares')

            setAllNotes(response.data)
        }
        getAllPhones()
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
                    
                    {allPhones.map(data => (
                        <Body data={data}/>
                    ))}
                    
                </table>
            </div>
        </div>
    )
}

export default App;