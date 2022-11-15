import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import logo from '../recources/img/m1.png';
import Formm from './Form';
import { Table } from './Table'; 

const App = () => {
  let [NewArray,setDate]=useState([]);
  const DateForm = (Expense) => {
    setDate((New )=>{
  return [Expense,...New]
    });
    Swal.fire({
      icon:'success',
      title:'Added done',
      timer:1500,
    }) 
  };
  let FetchData=()=>{
    axios.get("https://expenses-app-32e19-default-rtdb.firebaseio.com/expensses.json")
    .then(response=>{
      let fetchedData=[];
      for (let key in response.data) {
        let expen=response.data[key];
        expen.id=key;
        fetchedData.push(expen);
      }
   setDate(fetchedData)
    })
    .catch(error=>{
      console.error(error);
    })
  }
  useEffect(()=>{
  FetchData();
  },[])
  let Deleted=(id)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let NewFilter=NewArray.filter((element)=>element.id!==id)
      setDate(NewFilter);
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={logo}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-sm-6 mt-5">
          <div className="row tit">
            <h4 className="">wellcom to sobhi Expense Manager </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <Formm show={DateForm} />
        </div>
      </div>

      <Table data={NewArray} onDeleted={Deleted}/>
    </div>
  );
};
export default App;
