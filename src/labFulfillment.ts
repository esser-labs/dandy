interface GenericMap<T> {
  [key: string]: T
}

export const labFulfillment = (orders: string[]): string[] => {
  const fulfillmentMap = {
    'Lab One': ['Posterior Crown', 'Anterior Crown'],
    'Lab Two': ['Clear Aligner'],
    'Lab Three': ['Anterior Crown'],
  }

  let unfulfilledOrders = [ ...orders ]
  let labs: string[] = []

  while (unfulfilledOrders.length) {
    const maxLab = getMaxFulfillments(fulfillmentMap, unfulfilledOrders) // Get the lab that can satisfy the largest number of unfulfilled orders
    const services = fulfillmentMap[maxLab]
    unfulfilledOrders = unfulfilledOrders.filter(x => !services.includes(x)) // Filter those services out of the remaining unfulfilled orders
    labs.push(maxLab) // Add that lab to the list of labs
  }
  
  return labs
}

const getMaxFulfillments = (fulfillmentMap: GenericMap<string[]>, orders: string[]): string => {
  let maxLab = ''
  let maxLabCount = 0
  for (const key of Object.keys(fulfillmentMap)) {
    const serviceCount = orders.filter(x => fulfillmentMap[key].includes(x)).length // Check how many unfulfilled orders the lab can fulfill
    if (serviceCount > maxLabCount) {
      maxLab = key // Set the new lab that can handle the most unfulfilled orders
      maxLabCount = serviceCount // Update the maximum number
    } else if (serviceCount === maxLabCount) {
      const choice = Math.round(Math.random()) // Will round to 0 or 1 to make a random choice between two equal lab fulfillments
      maxLab = choice ? key : maxLab // Choose which lab of the equal labs to have as the max lab based on the random 0 or 1
    }
  }

  if (!maxLab) {
    throw new Error(`No orders can be fulfilled, orders: ${orders}`)
  }

  return maxLab
}
