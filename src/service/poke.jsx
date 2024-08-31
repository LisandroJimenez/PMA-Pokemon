export const reqPoke = async (categoria) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${categoria}/`)
        const data = await resp.json()
        return [data]
    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
};
