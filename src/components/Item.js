import {FaTimes} from 'react-icons/fa'
import React from 'react'

const Item = ({item, onDelete}) => {
  return (
    <div className="item">
      <h3>{item.name} 
        <FaTimes style={{color: 'red'}} onClick = {() => onDelete(item.id)}/>
      </h3>
      <p>Volume: {item.volume} m3, Cost: {item.cost} per m3</p>
    </div>
  )
}

export default Item
