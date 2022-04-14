import { useState } from 'react'

function Home () {

  let [post, setPost] = useState([
    {
      id: 0,
      user: 'Andres',
      description: 'Lorem Ipsum'
    },
    {
      id: 1,
      user: 'Camilo',
      description: 'Lorem Ipsum'
    }
  ])

  return (
    <h1>
      Home view
    </h1>
  )
}

export default Home