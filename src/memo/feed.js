import React from 'react'
import {data} from './data'

const feedMain = {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',


  boxShadow: '0 0 3px black',
  margin: '10px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '89vh',
  
};
const feedChild = {
  minHeight: "400px",
  width: '400px',
  boxShadow: '0 0 3px black',
  margin: '10px',

  overflow: "hidden",
  borderRadius: '10px'
}


const test = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'start',
  padding: '10px',
  color: '#ccc',
  fontSize: '13px',
  backgroundColor: "rgb(49, 49, 49)"
}

const list = data.map((data, index) => (
  <div key={index} style={feedChild}>
    <img className='image' src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg' />
    <div style={test}>
      <h1>{data.title}</h1>
      <p1>{data.description}</p1>
      <a href={data.readMore}>Readmore...</a>
    </div>
  </div>)
)

export default function feed() {
  return (
    <div>
      <div style={feedMain}>
            {list}
            {/* <div style={feedChild}>child</div>
            <div style={feedChild}>child</div>
            <div style={feedChild}>child</div>
            <div style={feedChild}>child</div> */}
          </div>
    </div>
  )
}
