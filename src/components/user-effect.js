import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { up } from '../state/actions/counter'
import { addPost } from '../state/actions/post'



export default function UseEfx() {
  const countData = useSelector((state) => state.counter);
  const posts = useSelector((state) => state.post);

  const dispatch = useDispatch();
  console.log(countData)
  console.log(posts)

  useEffect(() => {
    console.log("from useEffect")
  },[countData])
  const display = () => {
    posts.map((posts)=>(console.log(posts.id)))
  }

  return (
      <div>
          <h1>Use Effect</h1>
          <div>
              {countData}
          </div>
      <button onClick={() => { dispatch(up(10)) }}>click</button>
      <button onClick={() => { dispatch(addPost({ id: countData, description: "what is it" })) }}>Add Post</button>
      <button onClick={display}>Display State</button>
      

     </div>
  )
}
