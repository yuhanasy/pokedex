import axios from 'axios'

const pokemontcg = axios.create({
  baseURL: 'https://api.pokemontcg.io/v1/',
})

export default pokemontcg
