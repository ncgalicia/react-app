import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./astros.css";
import CircularProgress from "@mui/material/CircularProgress";


function Astro(props){
{/*uso props porque voy a usar como parametro las propiedades de lo del fetch*/}
    return (
        <div className="card">
            <h2>{props.astro.name}</h2>
            <p>{props.astro.craft}</p>
        </div>    
    );
}

function Astros() {
    const [astros, setAstros] = useState();

    const URL ="http://api.open-notify.org/astros.json";

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(URL);
            const data = await response.json();
            setAstros(data.people); 
            console.log(astros);
        }
      {/*controla cuantas veces se ejectuta pero hay que decirle cuando se detenga que es por eso que ponemos el [] */} 
      fetchData(); 
    }, []);
    

    return (
    <>
        <Typography variant="h2" className="h2">ASTROS</Typography>
        <div className="card-container">
            {astros ? (
                astros.map((astro, index) => 
                    <Astro astro={astro} key={index} />)
                ):(
                    <CircularProgress />
            )}
        </div>
        
    </>
    );
}

export default Astros;