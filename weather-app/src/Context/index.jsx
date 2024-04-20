import { useContext, createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const StateContext = createContext()

// eslint-disable-next-line react/prop-types
export const StateContextProvider = ({children}) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState({})
    const [place, setPlace] = useState('Jaipur')
    const [location, setLocation] = useState('')

    const fetchWeather = async() => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key' : import.meta.env.VITE_API_KEY,
                '-RapidAPI-Host' : 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try{
            const response = await axios.request(options);
            console.log(response.data)
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        }
        catch(e) {
            console.log(e)
            toast.error('This place does not exist');
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [place])

    useEffect(() => {

    },[values])

    return (
        <StateContext.Provider value ={{
            weather,
            setPlace,
            values,
            location,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)