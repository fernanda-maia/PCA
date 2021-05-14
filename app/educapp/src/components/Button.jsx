import {Link} from 'react-router-dom'

export default function Button(props) {
    const styles = {
        backgroundColor: props.color,
        borderColor: props.border
    }
    
    return (
        <Link to={props.url}>
            <div className="course-btn" style={styles}>
                <img src={props.img} alt={props.classroom} />
                <h3>{props.classroom}</h3>
                <span className="arrow">
                    <img src="https://img.icons8.com/offices/80/000000/door-opened.png" alt="Enter"/>
                </span>
            </div>
        </ Link>
    );
}