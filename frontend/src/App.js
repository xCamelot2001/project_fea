import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/greeting").then(
        res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  
  return (
     <div>
      {data.message ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>

  )
}

export default App