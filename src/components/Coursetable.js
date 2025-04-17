import orders from "../data/courselist.json";
function CourseTable() {
  return (
   <table className="table m-2">
    <thead>
            <th>ID</th>
            <th>Product name</th>
            <th>Description</th>
            <th></th>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.level}</td>
              </tr>
            ))}
          </tbody>
   </table>
  );
}
export default CourseTable;