import React from "react"

import api from '../src/api.js'

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

    async function handleUpdate({data}){
        try {
            
            const { _id } = data
      
            if (_id) {
              
              const response = await api.patch(`/home/celulares/${_id}`);
              console.log('dados do celular atualizados', response);
      
              
            } else {
              console.error('celular nao encontrado para atualizar');
            }
          } catch (error) {
            console.error('erro ao atualizar o celular:', error);
          }
    }

    return(
        <tbody>
            <tr>
                <td>{data.marca}</td>
                <td>{data.modelo}</td>
                <td>{data.memoria}</td>
                <td>{data.lançamento}</td>
                <td><button onClick={handleUpdate}>Alterar</button></td>
                <td><button onClick={handleDelete}>Excluir</button></td>
            </tr>
        </tbody>
    )
}

export default Body