import Header from "./components/Header";
import Items from "./components/Items";
import AddItems from "./components/AddItems";
import TotalCost from "./components/TotalCost";
import {useState, useEffect } from "react";  
import React from "react";


function App() {
  const [items, setItems] = useState([]) //stores all the list of materials

  const [sumCost, setCost] = useState([]) //stores the total cost of all materials

  useEffect(() => { 
    const getItems = async() => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  })

  const fetchItems = async() => { //fetches the whole table from endpoint to display as list
    const res = await fetch('http://localhost:5000/api/get')
    const data = await res.json()
    console.log(data)
    return data
  }

  const deleteItem = async (id) => { // deletes the selected item using an HTTP delete request made to the endpoint
    await fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE'
    })
    setItems(items.filter((item) => item.id !== id))
  }

  const addItems = async (item) => { // adds an item using an HTTP post request made to the endpoint
    const res = await fetch('http://localhost:5000/api/insert', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    })
    console.log(items)
    const data = await res.json()
    
    setItems([...items], data)
  }

  useEffect(() => {
    const getTotalCost = async() => {
      const totalCost = await fetchTotalCost()
      setCost(totalCost)
    }

    getTotalCost()
  })

  const fetchTotalCost = async() => { //fetches the total cost of all matrtials
    const res = await fetch("http://localhost:5000/api/get/costs")
    const cost = await res.json()

    console.log(cost)
    return cost
  }


  return (
    <div className="container">
      <h1>This is my react app</h1>
      <Header/>
      <AddItems onAdd = {addItems}/>
      {items.length > 0 ? 
        (<Items items = {items} onDelete = {deleteItem}/>) : ("No Materials")
      } 
      {sumCost.length > 0 ?
        (<TotalCost sumCost = {sumCost}/>) : (0)
      }
    </div>
  );
}

export default App;
