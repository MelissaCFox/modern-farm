let fieldArray = []

export const addPlant = (seedObject) => {
    fieldArray.push(seedObject)
}

export const usePlants = () => {
    return fieldArray.map(fieldArray => ({...fieldArray}))
}