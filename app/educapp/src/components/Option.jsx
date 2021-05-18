export default function Option(props) {
    return (
        <div className="card option" onClick={props.callback}>
            {props.content}
        </div>
    )
}