import { Sys } from './sys';
import { Wind } from './wind';
import { Main } from './main';
import { Clouds } from './clouds';
import { Weather } from './weather';

export interface CityWeather {
    name: string;
    weathers: Weather[];
    clouds: Clouds;
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    dt: number;
    sys: Sys;
    id: number;
    cod: number;
}