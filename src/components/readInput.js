import React, { useState } from 'react'

export default function ReadInput() {

    const [data, setData]= useState({name:"", phone:""})

    const read = (e) => {
        console.log(e.target.value)
        //setData({...data, phone: e.target.value })
    }
    
    const save = (e) => {
        console.log(data)
    }

    return (
        <>
            <h1>Read Input From Textfied</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                <input placeholder="Key tracking" onChange={read}></input>

                <input placeholder="Enter your name" type="text" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }}></input>
                <input placeholder="Enter you phone number" type="number" value={data.phone} onChange={(e) => { setData({ ...data, phone: e.target.value }) }}></input>
                <button type="submit" onClick={save}
                    style={{
                        border: "1px solid black",
                        background: "black",
                        color: "white",
                        padding: "5px",
                        borderRadius: "7px"
                }}>submit</button>
                </div>
        </>
  )
}
