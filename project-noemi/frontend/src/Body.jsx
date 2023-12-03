import React from "react"

import api from '../src/api.js'

import { Link } from "react-router-dom"

function Body({data}){

    async function handleDelete(){
        try {
            const { _id } = data
      
            if (_id) {
              
              const response = await api.delete(`/home/celulares/${_id}`);
              console.log('celular deletado', response);
      
              window.location.reload()
            } else {
              console.error('celular nao encontrado para deletar');
            }
          } catch (error) {
            console.error('erro ao excluir o celular:', error);
          }
    }

    

    return(
        <tbody>
            <tr>
                <td>{data.marca}</td>
                <td>{data.modelo}</td>
                <td>{data.memoria}</td>
                <td>{data.lançamento}</td>
                <td><Link to='/update'><button>Alterar</button></Link></td>
                <td><button onClick={handleDelete}>Excluir</button></td>
            </tr>
        </tbody>
    )
}

export default Body