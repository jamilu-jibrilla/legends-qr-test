import { useState } from "react";

//styles
import "./styles/App.scss";

//components
import Nav from "./component/Nav";
import Card from "./component/Card";
import Sidebar from "./component/Sidebar";
import UserCard from "./component/UserCard";
import Pagination from "./component/Pagination";

//icons
import rightArrow from "../src/assets/main/left-arror.png";
import leftArrow from "../src/assets/main/right-arrow.png";
import icon from "../src/assets/main/user-icon.png";
import icon2 from "../src/assets/main/icon2.png";
import icon3 from "../src/assets/main/icon3.png";
import icon4 from "../src/assets/main/icon4.png";
import filter from "../src/assets/main/filter-results-button.png";

const Dashboard = ({ users }) => {
  
  const icons = [
    {
      icon: icon,
      text: "USERS",
      num: "2,452",
    },

    {
      icon: icon2,
      text: "ACTIVE USERS",
      num: "2,453",
    },
    {
      icon: icon3,
      text: "USERS WITH LOANS",
      num: "12,453",
    },
    {
      icon: icon4,
      text: "USERS WITH SAVINGS",
      num: "102,453",
    },
  ];

  //state
  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState(false);
  
  const pages = 10;
  const pageLimit = 5;
  
  //functions
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (e) => {
    let pageNum = Number(e.target.textContent);
    setCurrentPage(pageNum);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="App">
      <Nav setDisplay={setDisplay} />
      <main>
        <Sidebar display={display} />
        <div className="main">
          <h1>Users</h1>
          <section className="cards">
            {icons.map((item) => (
              <Card
                key={item.num}
                icon={item.icon}
                text={item.text}
                num={item.num}
              />
            ))}
          </section>

          <section className="mobile-wrapper">
          <div className="wrapper">
            <table>
              <thead>
                <tr>
                  <th>
                    organization <img src={filter} alt="" />
                  </th>
                  <th>
                    username <img src={filter} alt="" />
                  </th>
                  <th>
                    email <img src={filter} alt="" />
                  </th>
                  <th>
                    phone number <img src={filter} alt="" />
                  </th>
                  <th>
                    date joined <img src={filter} alt="" />
                  </th>
                  <th>
                    status <img src={filter} alt="" />
                  </th>
                  <th></th>
                </tr>
              </thead>

              <Pagination
                data={users}
                RenderComponent={UserCard}
                pageLimit={pageLimit}
                dataLimit={10}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </table>
          </div>
            <div className="pagination">
              {/* previous button */}
              <img
                src={leftArrow}
                onClick={goToPreviousPage}
                className={`prev ${currentPage === 1 ? "disabled" : ""}`}
              />

              {/* show page numbers */}
              {getPaginationGroup().map((item, index) => (
                <span
                  key={index}
                  onClick={changePage}
                  className={`paginationItem ${
                    currentPage === item ? "active" : null
                  }`}
                >
                  <span>{item}</span>
                </span>
              ))}

              {/* next button */}
              <img
                src={rightArrow}
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? "disabled" : ""}`}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
