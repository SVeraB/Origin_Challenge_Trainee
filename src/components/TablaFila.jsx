import React from 'react'

const TablaFila = ({producto}) => {
  
    const {id, fechaVencimiento, balance} = producto
  
    return (
    <tr>
        <td>{id}</td>
        <td>{fechaVencimiento}</td>
        <td>${balance}</td>

    </tr>
  )
}

export default TablaFila