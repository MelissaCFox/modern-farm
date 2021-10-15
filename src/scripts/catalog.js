

export const catalog = (array) => {
    let HTMLString = ""
    for (const seedObj of array) {
        HTMLString += `<section class="plant">${seedObj.type}</section>`
    }
    return HTMLString
}