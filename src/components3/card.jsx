import "./card.css";
import img from "../components3/imagenes/img.png"

function myCard(){    const myInformation = {
        nombre: "Nancy Yareli Galicia",
        formacion: "Ing. en Sistemas Inteligentes",


    };
    return (
        <div className="infoCard">
            <h2>{myInformation.nombre}</h2>
            <p>{myInformation.formacion}</p>
            <img src={img}/>
            
        </div>
    )
    
}

export default myCard;