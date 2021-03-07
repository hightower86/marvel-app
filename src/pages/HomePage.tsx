import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Props {

}

const HomePage = (props: Props) => {

  const [todos, setTodos] = useState({})

  useEffect(() => {
    const request = async () => {
      try {
        const params = {
          limit: 10,
          apikey: '1bded6638cafa565ae83ba51bc9e1d43'
        }
        const { data } = await axios('http://gateway.marvel.com/v1/public/comics', { params })
        console.log({ data });
        setTodos(data)
      } catch (error) {
        console.log({ error });
      }

    }

    request()

  }, [])
  return (
    <div>
      Home sweet home
      <pre>{JSON.stringify(todos, null, 4)}</pre>
    </div>
  )
}

export { HomePage }
