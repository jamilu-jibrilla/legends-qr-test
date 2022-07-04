const Card = ({ icon, text, num }) => {
  return (
    <div className="Card">
      <img className="icon" src={icon} alt="icon" />
      <h3 className="users">{text}</h3>
      <h3 className="numbers">{num}</h3>
    </div>
  );
};

export default Card;
