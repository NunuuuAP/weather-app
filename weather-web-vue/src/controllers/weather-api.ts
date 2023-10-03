import { ref } from 'vue';

const API_URL = "https://weatherapi-com.p.rapidapi.com/current.json"

export interface IWeatherInfo {
    date: string;
    country: string;
    city: string;
    weather: string;
    temp: number;
    humidity: number;
    wind: number;
}

export async function fetchWeather(location: string): Promise<boolean | IWeatherInfo> {
    const response: Response = await fetch(API_URL + "?q=" + location, {
        headers: {
            'X-RapidAPI-Key': '7b95b47ac7msh00d277df9e78282p193bafjsn10f5b421fcdb',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        }
    });

    if (!response.ok) {
        return false;
    }

    const data = await response.json();

    return {
        date: data["location"]["localtime"],
        city: data["location"]["name"],
        country: data["location"]["country"],
        weather: data["current"]["condition"]["text"],
        temp: data["current"]["temp_c"],
        humidity: data["current"]["humidity"],
        wind: data["current"]["wind_kph"]
    };
}

export const location = ref<string>("");