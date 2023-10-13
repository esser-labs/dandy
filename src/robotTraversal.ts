export enum RobotDirection { // I don't like hardcoded numbers or strings in logic so I created this enum to use in my switch case
  UP = 'U',
  DOWN = 'D',
  LEFT = 'L',
  RIGHT = 'R'
}

export const robotTraversal = (pathInput: string): boolean => {
  let x = 0
  let y = 0

  for (const move of pathInput.toUpperCase()) {
    switch (move as RobotDirection) {
      case RobotDirection.UP:
        y++
        break
      case RobotDirection.DOWN:
        y--
        break
      case RobotDirection.RIGHT:
        x++
        break
      case RobotDirection.LEFT:
        x--
        break
      default:
        throw new Error(`Invalid input move: ${move}`)
    }
  }

  return x === 0 && y === 0
}
