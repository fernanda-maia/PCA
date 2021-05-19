import '../assets/css/App.css'

export default function Modal(props) {
    const modalStyle = {
        display: props.visibility || 'none'
    }

    return (
        <div className="alert" style={modalStyle}>
            <img src={props.path} alt={props.alt} />
            <p>{props.result}</p>
            <button onClick={props.callback}>Continue</button>
        </div>
    )
}