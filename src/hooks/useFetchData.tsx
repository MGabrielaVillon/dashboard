//Importe los hooks useState y useEffect de React.}
//Importe la interfaz como tipos de datos (type) OpenMeteoResponse
//  del archivo ../types/DashboardTypes.tsx.
//Declare que el componente useFetchData retorna un objeto del tipo 
// OpenMeteoResponse.

import { useEffect, useState } from 'react';

import { type OpenMeteoResponse } from "../types/DashboardTypes";


//Dentro de useFetchData:
//Declare la constante de estado data y la función de 
// actualización setData del tipo OpenMeteoResponse (o null). 
// El valor predeterminado es de tipo null.

//Defina la constante URL con el endpoint de los datos de Open-Meteo.

//Agregue el hook useEffect para que reaccione únicamente después 
// del primer renderizado del DOM.

//Retorne data al final del componente.


export default function useFetchData() : OpenMeteoResponse | undefined { 

    const URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m";

    const [data, setData] = useState<OpenMeteoResponse>();

    useEffect(() => { 
        const fetchData = async () => {

            const response = await fetch(URL);
            const json = await response.json();
            setData(json);

        };

        fetchData();

    }, []);

    return data;

}
