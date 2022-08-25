


export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'fa08b93c94msh6634321d6e8dbe0p139fefjsn613148d52132',
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'fa08b93c94msh6634321d6e8dbe0p139fefjsn613148d52132',
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()
    return data
}