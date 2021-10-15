import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"

export const harvestPlants = (plantsArray) => {
    const harvestedPlants = []
    for (const plantObj of plantsArray) {

        for (let i=0; i < plantObj.output; i++) {

            if (plantObj.type === "Asparagus") {
                const seed = createAsparagus()
                harvestedPlants.push(seed)
            } else if (plantObj.type === "Potato") {
                const seed = createPotato()
                harvestedPlants.push(seed)
            } else if (plantObj.type === "Soybean") {
                const seed = createSoybean()
                harvestedPlants.push(seed)
            } else if (plantObj.type === "Sunflower") {
                const seed = createSunflower()
                harvestedPlants.push(seed)
            } else if (plantObj.type === "Wheat") {
                const seed = createWheat()
                harvestedPlants.push(seed)
            } else if (plantObj.type === "Corn") {
                
                continue
            } 
        }
        for (let i=0; i < (plantObj.output / 2); i++) {
            if (plantObj.type === "Corn") {
                const seed = createCorn()
                harvestedPlants.push(seed[0])
            }
        }
    }
    return harvestedPlants
}