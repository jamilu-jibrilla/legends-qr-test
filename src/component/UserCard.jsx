import { Link } from "react-router-dom";
import activeUser from "../assets/main/active-user.png";
import blacklistUser from "../assets/main/blacklist-user.png";
import viewUser from "../assets/main/view-user.png";

const UserCard = ({ data }) => {
  let year = data.createdAt.split("T")[0].toString();
  let date = new Date(year).toString().split(" ").slice(1);

  let dateGiven = new Date(year);
  let currentDate = new Date();

  const handleDetailsView = (e) => {
    let tableRow = e.target.parentElement;
    let currentDetailBox = tableRow.lastElementChild;
    let allDetailBox = Array.from(document.querySelectorAll(".card-option"));
    let lastEl = document.querySelector(".last-el");

    if (lastEl) {
      lastEl.classList.toggle("display");
      lastEl.classList.remove("last-el");
    } else {
      allDetailBox.forEach((item) => {
        item.classList.remove("display");
      });
      currentDetailBox.classList.toggle("display");
      currentDetailBox.classList.add("last-el");
    }
  };

  return (
    <tr>
      <td>{"freestyle"}</td>
      <td>{data.userName} </td>
      <td>{data.email}</td>
      <td>{data.phoneNumber.slice(5)}</td>
      <td>{`${date[0]} ${date[1]}, ${date[2]} ${date[3]}`}</td>
      <td>
        <span
          className={`btn  ${dateGiven > currentDate ? "active" : "pending"}`}
        >
          {dateGiven > currentDate ? "active" : "pending"}
        </span>
      </td>
      <td onClick={handleDetailsView} className="option">
        ...
      </td>
      <div className="card-option">
        <Link to={`/home/${data.id}`}>
          <p>
            <img src={activeUser} alt="icon" /> View Details
          </p>
        </Link>
        <p>
          <img src={blacklistUser} alt="icon" /> Blacklist User
        </p>
        <p>
          <img src={activeUser} alt="icon" /> Activate User
        </p>
      </div>
    </tr>
  );
};
export default UserCard;
