export const getDrinkById = (drinks, idDrink) => {
    return (drinks.find(item => item.idDrink === idDrink))
}
