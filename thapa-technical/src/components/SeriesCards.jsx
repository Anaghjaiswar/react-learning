export const SeriesCards = (props) => {
    console.log(props);
    return (
        <li>
        <div>
            <img src= {props.currElement.img_url}/>
        </div>
        <h2>
            Name: {props.currElement.name}
        </h2>
        <h3>Rating: {props.currElement.rating}</h3>
        <p>
            summary: {props.currElement.description}
        </p>
        <p>genre : {props.currElement.genre}</p>
        <p>cast : {props.currElement.cast}</p>
        <a href={props.currElement.watch_url} target='_blank'>
            <button>Watch Now</button>
        </a>
        </li>
    )
}