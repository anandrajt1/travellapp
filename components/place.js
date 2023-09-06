function TravelDestination(props){
    return(
        <div className="card">
            <div className="card-header">
                <img className="card-img" src={"https://source.unsplash.com/1600x1000/?"+props.img}></img>
                <div className={props.rating>=4.5 ? "best" : "hide"}>🌞Best Time to Visit</div>
            </div>

            <div className="card-body">
                <h3>{props.title}</h3>
                <p>{props.about}</p>
            </div>

        </div>
    )
}

export default TravelDestination;