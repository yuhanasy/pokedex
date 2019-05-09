import pokemontcg from './api'

export const getCards = (paramsName, params) => {
  if (paramsName && params) {
    return pokemontcg.get('/cards', {
      params: {
        [paramsName]: params,
      },
    })
  } else {
    return pokemontcg.get('/cards')
  }
}

export const getByCategory = category => {
  return pokemontcg.get(category)
}
