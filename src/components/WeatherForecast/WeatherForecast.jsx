import './WeatherForecast.css';

const weather = (props) => {


    return (
    <div className="weather">
        <h2>Day of the Week: {props.day}</h2>
        <img src={props.img} alt={props.imgAlt} />
        <p><span>conditions: {props.conditions} </span>current weather conditions</p>
        <p><span>time:{props.time} </span>time of day</p>
    </div>
    );

};

export default weather