import React from 'react'

export default function Section({name}) {
    const list = name.map((name, index) => <h1>{index} {name}</h1>)
  return (
    <div>{list}</div>
  )
}
