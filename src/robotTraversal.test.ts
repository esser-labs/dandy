import { robotTraversal } from './robotTraversal'

describe('robotTraversal', () => {
  it('returns true if the robot finishes at origin', () => {
    const input = 'UUDDLRLR'
    const result = robotTraversal(input)

    expect(result).toEqual(true)
  })

  it('returns false if the robot does not finish at origin', () => {
    const input = 'RUD'
    const result = robotTraversal(input)

    expect(result).toEqual(false)
  })

  it('throws an error if there is an invalid move', () => {
    const input = 'RUDM'
    
    expect(() => robotTraversal(input)).toThrowError(`Invalid input move: M`)
  })
})
