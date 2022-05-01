import React from 'react'
import Section from './section'

export default function Renderlist() {
    const name = ["heisar", "John", "good"]
  return (
      <div>
          <h1>Renderlist</h1>
      <Section name={name}/>
    </div>
  )
}
