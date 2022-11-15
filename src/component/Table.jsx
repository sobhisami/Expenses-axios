import Row from "./Row";

export const Table =({data, onDeleted})=>{
  return(
    <div className="row mt-5 mb-5">
    <div className="custom-card ">
      <table className="table ">
        <thead>
          <tr>
            <th> Title</th>
            <th> Date</th>
            <th>value</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr id="addRow"></tr>
       {data.map(element=>(<Row key={element.id} viewData={element} RowDeleted={onDeleted} />  ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}