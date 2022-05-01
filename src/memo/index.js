import React from 'react'
import Form from './form'
import Feed from './feed'
import Style from './style.module.css'

export default function Memo() {
  return (
    <div className={Style.main}>
      <div className={Style.feed}>
        <Feed />
      </div>
      <div className={Style.form}>
        <Form />  
      </div>
    </div>
  )
}
