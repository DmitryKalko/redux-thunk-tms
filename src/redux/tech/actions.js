export const deleteTech = (id) => ({type: 'DELETE_TECH', payload: id});
export const addTech = (oneTech) => ({type: 'ADD_TECH', payload: oneTech});
export const addTechToFavouriteList = (id) => ({type: 'AAD_TECH_TO_FAVOURITE', payload: id});
export const removeTechFromFavouriteList = (id) => ({type: 'REMOVE_TECH_FROM_FAVOURITE', payload: id});
