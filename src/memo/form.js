import React from 'react'
import FormStyle from './form.module.css'
const main = {
    display: 'flex',
    flexDirection: 'column',
}
const file = {
  fontSize: '9px',
  cursor: 'pointer'
}

export default function Form() {
  return (
      <div>
      {/*<h1 className='mg-10'>Form</h1>*/}
          <form className={FormStyle.main}>
              <input type='text' placeholder='your name'></input>
              <input type='text' placeholder='description'></input>
              <textarea type='text' placeholder='comment'></textarea>
              <input style={file} type='file'/>
              <button>Submit</button>
           </form>
    </div>
  )
}
