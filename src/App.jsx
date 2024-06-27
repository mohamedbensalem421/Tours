import { useEffect, useState } from "react"
import Tours from "./Tours"

const url = 'https://www.course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)

useEffect(() =>{
  const fetchData = async () =>{
    setLoading(true)
    try {
      const response = await fetch(url)
      if(!response.ok){
        setLoading(true)
      }else{
        setLoading(false)
      }
      const data = await response.json()
      setTours(data)
    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
},[refresh])

if(loading){
  return <h1>Loading...</h1>
}
function rerender () {
  setRefresh(true)
}

  const remove = (id) =>{
    const filterdList = tours.filter((ele) => ele.id != id)
    setTours(filterdList)
  }

  return (
    <>
    {
      tours.length < 1 ? 
      <div className="container">
        <h1>No Tours Left</h1>
        <button className="refreshButton" onClick={rerender}>Refrech</button>
        </div>:
      <div className="container">
      <h1>Our Tours</h1>
      <section>
        {tours.map((tour) =>{
            return <Tours key={tour.id} {...tour} remove={remove}/>
        })}
      </section>
    </div>
    }
  </>
  )
}

export default App
