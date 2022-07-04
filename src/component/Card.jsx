const Card = ({icon}) => {
    return (
        <div className="Card">
            <img className="icon" src={icon} alt="icon" />
            <h3 className="users">Users</h3>
            <h3 className="numbers">2,453</h3>
        </div>
    )
}

export default Card