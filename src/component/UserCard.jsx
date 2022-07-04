import { Link } from "react-router-dom";   
const UserCard = ({data, setId}) => {

   let year = data.createdAt.split("T")[0].toString()
   let date = new Date(year).toString().split(" ").slice(1 )

   let dateGiven = new Date(year)
   let currentDate = new Date()


    return (
        <tr>
            <td>{"freestyle"}</td>
            <td> <Link to={`/home/${data.id}`}>{data.userName}</Link> </td>
            <td>{data.email}</td>
            <td>{data.phoneNumber.slice(5)}</td>
            <td>{`${date[0]} ${date[1]}, ${date[2]} ${date[3]}`}</td>
            <td ><span className={`btn  ${dateGiven > currentDate ? "active" : "pending"}`}>{dateGiven > currentDate ? "active" : "pending"}</span></td>
            <td className="option">...</td>
        </tr>
                
    )
}
export default UserCard