import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData() : OpenMeteoResponse | undefined {

    const  URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m";

    const [data, setData] = useState<OpenMeteoResponse>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const json = await response.json();
                setData(json as OpenMeteoResponse);
            } catch (error) {
                // Log error; mantener el estado anterior en caso de fallo
                // eslint-disable-next-line no-console
                console.error('Error fetching data:', error);
            }
        };

        void fetchData();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return data;

}

/*

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
*/