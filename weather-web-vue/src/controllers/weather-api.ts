import type { Ref } from 'vue';
import { ref } from 'vue';
import { publicIpv4 } from 'public-ip';

const WEATHER_API_URL = "https://weatherapi-com.p.rapidapi.com/forecast.json";
const GEOLOCATION_URL = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/';

export interface IWeatherInfo {
    date: string;
    country: string;
    city: string;
    current: {
        weather: string;
        temp: number;
        humidity: number;
        wind: number;
    };
    hourly: {
        time: string;
        weather: string;
        temp: number;
    }[];
    daily: {
        date: string;
        maxTemp: number;
        minTemp: number;
        weather: string;
    }[];
}

export async function fetchWeather(location: string): Promise<boolean | IWeatherInfo> {
    const response: Response = await fetch(WEATHER_API_URL + "?q=" + location + "&days=7", {
        headers: {
            'X-RapidAPI-Key': '45aec994b2msh6619988aca90959p1021dbjsn8ee852e8e57e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    });

    if (!response.ok) {
        return false;
    }

    const data = await response.json();

    const current = {
        weather: data["current"]["condition"]["text"],
        temp: data["current"]["temp_c"],
        humidity: data["current"]["humidity"],
        wind: data["current"]["wind_kph"]
    };

    const hourly = data["forecast"]["forecastday"][0]["hour"].map((hour: any) => {
        return {
            time: hour.time.substring(11, 13),
            weather: hour.condition.text,
            temp: hour.temp_c.toFixed(0)
        };
    });

    const daily = data["forecast"]["forecastday"].map((day: any) => {
        const date = new Date(day.date);
        const weekPosition = date.getDay();
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        return {
            date: days[weekPosition],
            maxTemp: day.day.maxtemp_c,
            minTemp: day.day.mintemp_c,
            weather: day.day.condition.text
        };
    });

    return {
        date: data["location"]["localtime"],
        city: data["location"]["name"],
        country: data["location"]["country"],
        current: current,
        hourly: hourly,
        daily: daily
    };
}


export async function getLocation(): Promise<boolean | string> {
    const public_ip = await publicIpv4();

    const response: Response = await fetch(GEOLOCATION_URL + '?ip=' + public_ip, {
        headers: {
          'X-RapidAPI-Key': '45aec994b2msh6619988aca90959p1021dbjsn8ee852e8e57e',
          'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
        }
    });

    if (!response.ok) {
        return false;
    }

    const data = await response.json();
    return data["city"];
}

export const location = ref<string>("Madrid");

async function updateLocation() {
    const result = await getLocation();

    if (typeof result === 'string') {
        location.value = result;
    } else {
        console.error('Error obteniendo la ubicación.');
    }
}

export const loading: Ref<boolean> = ref<boolean>(true);
export const error: Ref<string> = ref<string>("");
export const weather: Ref<IWeatherInfo | null> = ref<IWeatherInfo | null>(null);
export const searchs = ref<number>(0);

export const refreshLocation = async () => {
	const data: boolean | IWeatherInfo = await fetchWeather(location.value);
	
	if (data == false) {
		loading.value = false;
		error.value = "Ciudad no existente.";
	} else {
		loading.value = false;
		weather.value = data as IWeatherInfo;
	}
}

updateLocation();

export const resetSearchs = () => {
    searchs.value = 0;
};
