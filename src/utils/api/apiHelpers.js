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

export const getTypes = () => {
  return pokemontcg.get('/types')
}

export const getSubtypes = () => {
  return pokemontcg.get('/subtypes')
}

export const getSupertypes = () => {
  return pokemontcg.get('./supertypes')
}
