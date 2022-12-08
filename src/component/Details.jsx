//icons
import star from "../assets/details/star.png";
import fullstar from "../assets/details/full-star.png";
import backArrow from "../assets/details/return-arr.png";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//components
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";

const Details = () => {
  const { id } = useParams();

  //usrl
  const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;
  const [user, setUser] = useState(null);

  //state
  const [display, setDisplay] = useState(false);

  // useffect
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((res) => {
        setUser(res);
      })
      .catch((error) => console.log(error.message));
  }, [url]);

  return (
    <div className="Details">
      <Nav setDisplay={setDisplay} />
      <main>
        <Sidebar display={display} />
        {user ? (
          <section className="user-details">
            <h3 className="back">
              <Link to="/Home">
                <img src={backArrow} alt="" />
              </Link>
              <a className="arr-text" href="/Home">
                back to users
              </a>
            </h3>

            <div className="userheading">
              <div className="heading">
                <h2>User Details</h2>
              </div>
              <div className="btn-holder">
                <button className="blacklist">BLACKLIST USER</button>
                <button className="activate">ACTIVATE USER</button>
              </div>
            </div>

            <div className="user">
              <div className="up-sect">
                <div className="section1">
                  <div className="image">
                    <img src={user.profile.avatar} alt="profile avatar" />
                  </div>
                  <div>
                    <h2>{`${user.profile.firstName}`}</h2>
                    <p>adsdsfdf</p>
                  </div>
                </div>
                <div className="user-tier">
                  <h4> users tier</h4>
                  <div className="stars">
                    <img src={star} alt="start" />
                    <img src={star} alt="star" />
                    <img src={fullstar} alt="star" />
                  </div>
                </div>
                <div className="money-sect">
                  <h4>{user.accountBalance}</h4>
                  <p>{user.accountNumber} bank</p>
                </div>
              </div>
              <div className="links">
                <h4 className="first-child"> General Details</h4>
                <h4> Documents</h4>
                <h4>Bank Details</h4>
                <h4>Loans</h4>
                <h4>Savings</h4>
                <h4>App and system</h4>
              </div>
            </div>

            <div className="main-details">
              <div className="sects">
                <h2>Personal information</h2>

                <div className="group1">
                  <div className="mini-sect">
                    <h3>FULL NAME</h3>
                    <h5>{`${user.profile.firstName} ${user.profile.lastName}`}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>PHONE NUMBER</h3>
                    <h5>{user.phoneNumber}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>EMAIL ADDRESS</h3>
                    <h5>{user.email}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>BVN</h3>
                    <h5>{user.profile.bvn}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>GENDER</h3>
                    <h5>{user.profile.gender}</h5>
                  </div>
                </div>

                <div className="group2">
                  <div className="mini-sect">
                    <h3>MARITAL STATUS</h3>
                    <h5>unknown</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>CHILDREN</h3>
                    <h5>unknown</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>TYPE OF RESIDENCE</h3>
                    <h5>unknown</h5>
                  </div>
                </div>
              </div>

              <div className="sects">
                <h2>EDUCATION and EMPLOYMENT</h2>

                <div className="group1">
                  <div className="mini-sect">
                    <h3>LEVEL OF EDUCATION</h3>
                    <h5>{user.education.level}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>EMPLOYMENT STATUS</h3>
                    <h5>{user.education.employmentStatus}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>SECTOR OF EMPLOYMENT</h3>
                    <h5>{user.education.sector}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>DURATION OF EMPLOYMENT</h3>
                    <h5>{user.education.duration}</h5>
                  </div>
                </div>

                <div className="group2">
                  <div className="mini-sect">
                    <h3>OFFICE MAIL</h3>
                    <h5>{user.education.officeEmail}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>MONTHLY INCOME</h3>
                    <h5>{`${user.education.monthlyIncome[0]}`}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>LOAN REPAYMENT</h3>
                    <h5>{user.education.loanRepayment}</h5>
                  </div>
                </div>
              </div>

              <div className="sects">
                <h2>Socials</h2>

                <div className="group2">
                  <div className="mini-sect">
                    <h3>TWITTER</h3>
                    <h5>{user.socials.twitter}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>FACEBOOK</h3>
                    <h5>{user.socials.facebook}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>INSTAGRAM</h3>
                    <h5>{user.socials.instagram}</h5>
                  </div>
                </div>
              </div>

              <div className="sects">
                <h2>Guarantor</h2>

                <div className="group2">
                  <div className="mini-sect">
                    <h3>FULL NAME</h3>
                    <h5>{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>PHONE NUMBER</h3>
                    <h5>${user.guarantor.phoneNumber}</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>EMAIL ADDRESS</h3>
                    <h5>unknown</h5>
                  </div>

                  <div className="mini-sect">
                    <h3>RELATIONSHIP</h3>
                    <h5>unknown</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Details;
