import './main.css';
export default function Main({id,name,city}){
    return(
        <div>
        <div className="img">
            <img src="https://m.media-amazon.com/images/I/51MnVEDKPwL._AC_.jpg" alt="teddyImage"/>
            
        </div>
        <div>
            <h1>{name}</h1>
        </div>
        </div>
    )
}