import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"

export const plantSeeds = (planArray) => {
    for (const rowArray of planArray) {
        for (const plant of rowArray) {
            if (plant.name === "Asparagus") {
                const seed = createAsparagus()
                fieldArray.push(seed)
            } else if (plant.name === "Potato") {
                const seed = createPotato()
                fieldArray.push(seed)
            } else if (plant.name === "Soybean") {
                const seed = createSoybean()
                fieldArray.push(seed)
            } else if (plant.name === "Sunflower") {
                const seed = createSunflower()
                fieldArray.push(seed)
            } else if (plant.name === "Wheat") {
                const seed = createWheat()
                fieldArray.push(seed)
            } else if (plant.name === "Corn") {
                const seed = createCorn()
                fieldArray.push(seed)
            }
            
        }
    }
}