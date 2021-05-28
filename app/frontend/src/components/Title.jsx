export default function Title(props) {
    const cardStyle = {
        backgroundColor: props.color || '#6C4360'
    }

    return (
        <div className="card" style={cardStyle} >
            <img src={props.path} alt={props.alt} width="64px"/>
            <h1>{props.title}</h1>
        </div>
       
    );
}