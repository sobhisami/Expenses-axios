import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Formm = ({show}) => {
  let onsubmit = (event) => {
    event.preventDefault();
    if (cheak()) {
      SaveObject();
    }
  };
  let cheak = () => {
    if (
      TitleRef.current.value != '' &&
      DateRef.current.value != '' &&
      ValueRef.current.value != '' &&
      DescriptionRef.current.value != ''
    ) {
      return true;
    }
    MessageError("enterData");
    return false;
  };
  let MessageError =(Message)=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Enter the Data!',
  });
  }
  let SaveObject = () => {
    let Objectt = {
      title: TitleRef.current.value,
      date: DateRef.current.value,
      value: ValueRef.current.value,
      description: DescriptionRef.current.value,
    };
    axios.post("https://expenses-app-32e19-default-rtdb.firebaseio.com/expensses.json",
    Objectt,
    ).then(response=>{
      Objectt.id=response.data.name;
   console.log(response);
   show(Objectt);
   clear();
    }).catch(error=>{
     console.error(error);
    })
  };
  let clear = () => {
    TitleRef.current.value = '';
    DateRef.current.value = '';
    ValueRef.current.value = '';
    DescriptionRef.current.value = '';
  };
  let TitleRef = useRef();
  let DateRef = useRef();
  let ValueRef = useRef();
  let DescriptionRef = useRef();

  return (
    <form
      className="row"
      onSubmit={onsubmit}>
      <div className="mb-3 col-md-6">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control addTitle"
          aria-describedby=""
          ref={TitleRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control addDate"
          aria-describedby=""
          ref={DateRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Value</label>
        <input
          type="number"
          className="form-control addValue"
          aria-describedby=""
          ref={ValueRef}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label
          htmlFor="title"
          className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control addDescrption"
          aria-describedby=""
          ref={DescriptionRef}
        />
      </div>
      <div className="mb-3 col-md-12 text-right">
        <button
          type="submit"
          className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
};
export default Formm;
