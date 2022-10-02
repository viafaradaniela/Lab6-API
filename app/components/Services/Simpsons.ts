import { Simpsons } from "../Types/Types";

export const getCharacters = async ():Promise<Array<Simpsons>>  => {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10");
    const data = await response.json();
    console.log(data);
    return data;
};