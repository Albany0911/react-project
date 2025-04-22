import { fetchPokemon } from "./loadData";

export const productDetail = async (count) => {
    try {
        const res = await fetchPokemon(50);      
        const data = res;
        //console.log(data);
        

    } catch (error) {
        console.log(error);
    }
    
    const promises = [];
    for (let i = 0; i < count; i++) {
        promises.push(fetchPokemon(count))
    }
    const results = await Promise.all(promises);
    return results.filter(pokemon => pokemon !== null);
    
}