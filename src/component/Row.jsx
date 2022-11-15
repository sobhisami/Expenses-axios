import { icon } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Row(props) {
  let Deleta=()=>{
    axios.delete(`https://expenses-app-32e19-default-rtdb.firebaseio.com/expensses/${props.viewData.id}.json`
    ).then(response=>{
      props.RowDeleted(props.viewData.id);
    }).catch(error=>{
      console.error(error);
    })
  };
  return(
    <tr>
    <td> {props.viewData.title} </td>
    <td>{props.viewData.date}</td>
    <td>{props.viewData.value} </td>
    <td colSpan="2">{props.viewData.description} </td>
    <td className="text-right">
      <a 
        href="#"
        className="delete"
        onClick={Deleta}
        >
      <FontAwesomeIcon icon ={faTrashAlt} aria-hidden="true"/>
      </a>
    </td>
  </tr>
  );
}
export default Row;