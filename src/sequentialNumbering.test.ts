import { sequentialNumbering } from './sequentialNumbering'

describe('sequentialNumbering', () => {
  it('creates sequential groups of teeth', () => {
    const input = '17, 18, 19, 30, 32'
    const expected = '17-19, 30, 32'
    const result = sequentialNumbering(input)

    expect(result).toEqual(expected)
  })

  it('creates multiple sequential groups of teeth', () => {
    const input = '17, 18, 19, 25, 26, 28, 30, 31, 32'
    const expected = '17-19, 25-26, 28, 30-32'
    const result = sequentialNumbering(input)

    expect(result).toEqual(expected)
  })

  it('creates multiple sequential groups of teeth ending with single', () => {
    const input = '17, 18, 19, 25, 26, 28, 29, 30, 32'
    const expected = '17-19, 25-26, 28-30, 32'
    const result = sequentialNumbering(input)

    expect(result).toEqual(expected)
  })

  it('creates a single sequence of all teeth', () => {
    const input = Array.from({length: 32}, (_, i) => i + 1).join(', ')
    const expected = '1-32'
    const result = sequentialNumbering(input)

    expect(result).toEqual(expected)
  })
})
