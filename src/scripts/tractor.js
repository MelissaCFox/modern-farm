import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js"
import {usePlants} from "./field.js"


export const plantSeeds = (planArray) => {
    // let plantedFieldArray = usePlants()
    for (const rowArray of planArray) {
        for (const plant of rowArray) {
            if (plant === "Asparagus") {
                // debugger
                const seed = createAsparagus()
                addPlant(seed)
            } else if (plant === "Potato") {
                const seed = createPotato()
                addPlant(seed)
            } else if (plant === "Soybean") {
                const seed = createSoybean()
                addPlant(seed)
            } else if (plant === "Sunflower") {
                const seed = createSunflower()
                addPlant(seed)
            } else if (plant === "Wheat") {
                const seed = createWheat()
                addPlant(seed)
            } else if (plant === "Corn") {
                const seed = createCorn()
                for (let i=0; i<seed.length; i++)
                addPlant(seed[i])
            }
            
        }
    } 
    // let fieldArray = usePlants()
    // return fieldArray
}

