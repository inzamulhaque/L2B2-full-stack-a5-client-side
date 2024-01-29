import { Button } from "antd";
import { useGetAllBikesQuery } from "../../redux/features/bike/bikeApi";

const Bikes = () => {
  const { data: bikes, isLoading } = useGetAllBikesQuery(null);
  console.log(bikes);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  const thStyle = {
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    border: "1px solid black",
  };

  const tdStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid black",
  };

  return (
    <>
      <h1>All Bikes</h1>

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}> &nbsp; </th>
            <th style={thStyle}> Name </th>
            <th style={thStyle}> Price </th>
            <th style={thStyle}> Quantity </th>
            <th style={thStyle}> Release Date </th>
            <th style={thStyle}> brand </th>
            <th style={thStyle}> Owner Email </th>
            <th style={thStyle}> Actions </th>
          </tr>
        </thead>
        <tbody>
          {bikes?.data?.map((bike) => (
            <tr key={bike._id}>
              <td style={tdStyle}>
                <input type="checkbox" value={bike._id} />
              </td>
              <td style={tdStyle}>{bike.name}</td>
              <td style={tdStyle}>{bike.price}</td>
              <td style={tdStyle}>{bike.quantity}</td>
              <td style={tdStyle}>{bike.releaseDate}</td>
              <td style={tdStyle}>{bike.brand}</td>
              <td style={tdStyle}>{bike.userEmail}</td>
              <td style={tdStyle}>
                <Button type="primary">Edit</Button>
                <Button type="default">Delete</Button>
                <Button type="primary">Details</Button>
                <Button type="default">Create Variant</Button>
                <Button type="primary">Create Variant</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Bikes;
