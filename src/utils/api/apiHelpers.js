import pokemontcg from './api'

export const getCards = (params, paramsName) => {
  if (paramsName && params) {
    return pokemontcg.get('/cards', {
      params: {
        [params]: paramsName,
      },
    })
  } else {
    return pokemontcg.get('/cards')
  }
}

export const getByCategory = category => {
  return pokemontcg.get(category)
}

export const getCardDetails = id => {
  return pokemontcg.get(`/cards/${id}`)
}
