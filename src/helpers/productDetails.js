import { fetchPokemon } from "./loadData";

export const productDetail = async (id) => {
    return new Promise((resolve, reject) => {
        fetchPokemon(id).then((data) => {
            const product = data.find((item) => item.id === id);
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Product not found"));
            }
        });
    });    
}