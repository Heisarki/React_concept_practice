import React from 'react'

export default function Section({name}) {
  const list = name.map((name, index) => 
    <h1 key={index}>{index} {name}</h1>
  )
  return (
    <div>{list}</div>
  )
}
