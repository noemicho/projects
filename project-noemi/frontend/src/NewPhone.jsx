import '../src/NewPhone.css'

import { useState } from 'react'

import api from './api'

function NewPhone(){

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [memoria, setMemoria] = useState('')
    const [lançamento, setLançamento] = useState('')

    async function handleSalvar(){
        if(marca === '' || modelo === '' || memoria=== '' || lançamento === ''){
            console.log("preencha todos os campos")
            return
        }

    
    }

    return(
        <div className="container">
            <div className='group'>
                <h2>Celular</h2>
                <div>
                    <label>Marca</label>
                    <input 
                    type="text" 
                    value={marca}
                    onChange={(event) => setMarca(event.target.value)}
                    />
                </div>
                <div>
                    <label>Modelo</label>
                    <input 
                    type="text" 
                    value={modelo}
                    onChange={(event) => setModelo(event.target.value)}
                    />
                </div>
                
                <div>
                    <label>Memória</label>
                    <input 
                    type="text" 
                    value={memoria}
                    onChange={(event) => setMemoria(event.target.value)}
                    />
                </div>
                
                <div>
                    <label>Lançamento</label>
                    <input 
                    type="date" 
                    value={lançamento}
                    onChange={(event) => setLançamento(event.target.value)}
                    />
                </div>
                
            </div>
            <div className='button-group'>
                <button>Cancelar</button>
                <button onClick={handleSalvar}>Salvar</button>
            </div>
            
        </div>
    )
}

export default NewPhone