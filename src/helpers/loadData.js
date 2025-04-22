const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        
        return {
            id : data.id,
            name: data.name,
            imgOfficial: data.sprites.other["official-artwork"].front_default,
            imgGame: data.sprites.front_default,
            imgCvg: data.sprites.other.dream_world.front_default,
            experience: data.base_experience,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat
        }

    } catch (error) {
        console.log(error);
    }
}

export const fetchPokemon = async (count) => {
    const promises = [];
    for (let i = 1; i <= count; i++) {
      promises.push(fetchData(i));
    }
    const results = await Promise.all(promises);
    return results.filter(pokemon => pokemon !== null);
  };