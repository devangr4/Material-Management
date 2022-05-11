import { useState } from "react"
import React from "react"

const AddItems = ({onAdd}) => {
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(0)
    const [cost, setCost] = useState(0)
    const [date, setDate] = useState("")
    const [color, setColor] = useState("#000000")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert("Please enter name for new material")
            return
        }

        if(volume <= 0){
            alert("Please enter volume for new material greater than 0")
            return
        }

        if(cost <= 0){
            alert("Please enter cost for new material greater than 0")
            return
        }

        if(!date){
            alert("Please enter date for new material")
            return
        }

        onAdd({name, volume, cost, date, color})

        setName("")
        setVolume(0)
        setCost(0)
        setDate("")
        setColor("#000000")
    }
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Name</label>
            <input type="text" placeholder="New Material"
                value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Volume (m3)</label>
            <input type="number" placeholder="0"
                value={volume} onChange={(e) => setVolume(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Cost (USD per m3)</label>
            <input type="number" placeholder="0.00"
                value={cost} onChange={(e) => setCost(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Delivery Date</label>
            <input type="date" placeholder="Select Date"
                value={date} onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Color</label>
            <input type="color" placeholder="Select Color"
                value={color} onChange={(e) => setColor(e.target.value)}></input>
        </div>

        <input type="submit" value="Add material" className="btn btn-block"></input>
        </form>
    )
}

export default AddItems
