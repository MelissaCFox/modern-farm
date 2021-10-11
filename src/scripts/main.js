import {createPlan} from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const testCorn = createCorn()
// console.log(testCorn)

// const cornSeed = createCorn()
// const asparagusSeed = createAsparagus()
// const wheatSeed = createWheat()
// const potatoSeed = createPotato()
// const soybeanSeed = createSoybean()
// const sunflowerSeed = createSunflower()

// addPlant(wheatSeed)
// addPlant(sunflowerSeed)
// addPlant(soybeanSeed)
// addPlant(cornSeed)
// addPlant(asparagusSeed)
// addPlant(potatoSeed)

// const testField = usePlants()
// console.log(testField)

const yearlyPlan = createPlan()
// console.log(yearlyPlan)

// console.log("Welcome to the main module")


plantSeeds(yearlyPlan) //Is this actually pushing seed objects to the fields array?
const testField = usePlants()
console.log(testField)


