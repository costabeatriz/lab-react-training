const IdCard = (props) => {
    const myDate = props.birth.toDateString()
    return(
        <div className="Idcard">
            <img  className="picture" src={props.picture}/>
            <p><b>First name:</b> {props.firstName}</p>
            <p><b>Last name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birth:</b> {myDate}</p>
        </div>
    )
}


export default IdCard