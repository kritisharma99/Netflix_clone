const API_KEY = "963e0665e0b96b5a62c0c2d63b184a8f"

const requests ={
    fetchTrending:`/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`
}

export default requests