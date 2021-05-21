export default function Chart(props) {
    const stylesheet = {
        stroke: props.color,
        strokeDashoffset: 600 - (600 * props.progress) / 100 
    }

    return (
        <div className="chart-card">
            <div className="progress">
                <svg className = "chart">
                    <circle cx="95" cy="95" r="95"></circle>
                    <circle cx="95" cy="95" r="95" style={stylesheet}></circle>
                </svg>
                <div className="percentual">
                    <h2>{props.progress}<span>%</span></h2>
                </div>
            </div>
            <div className="subject" style={{backgroundColor: props.bgColor}}>
                <h2>{props.subject}</h2>
            </div>
        </div>
    )
}