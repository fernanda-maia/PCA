export default function Controls(props) {
    return (
        <button onClick={props.callback} className="controls-btn">
            <img src={props.path} alt={props.alt}/>
        </button>
    )
}