import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  let [cars,setCars] = useState([]);

  useEffect(() => {
    getCars();
  },[])

  const getCars = () => {
    axios.get('/api/getcars')
    .then(response => {
      setCars(response.data);
    })
  }

  // const addUser = () => {
  //   axios.get('/api/users')
  //   .then(response => {
  //     console.log(response.data)
  //   })
  //   .catch(() => {
  //     console.log('error')
  //   });
  // }

  const onCarSubmit = () => {
    axios.post('/api/addcar',{
      brand:'Porsche',
      model:'911',
      year:2018,
      avail:true
    })
    .then( response => {
      getCars();
      console.log(response.data);
    })
  }

  const onCarRemove = () => {
    axios.post('/api/removecar',{
      brand:'Nissan'
    })
    .then(response => {
      console.log(response.data);
      getCars();
    })
  }

  const onCarUpdate = () => {
    axios.post('/api/updatecar',{
      id:'66906ecc391f667f4babb35c',
      brand:'Ford'
    })
    .then(response => {
      getCars();
    })
  }

  return(
    <>
      <div className="App">
        <h1>Add car</h1>
        <button
          onClick={() => onCarSubmit()}
        >
          Add car to DB
        </button>
        <hr/>
        { cars.map(car => (
          <div key={car._id}>{car.brand}</div>
        ))}
        <hr/>
        <h2>Remove elements</h2>
        <button onClick={() => onCarRemove()}>Delete</button>
        <hr/>
        <h2>Update elements</h2>
        <button onClick={() => onCarUpdate()}>Update</button>
      </div>
    </>
  )
}

export default App;