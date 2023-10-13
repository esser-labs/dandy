import { labFulfillment } from './labFulfillment'

describe('labFulfillment', () => {
  it('returns the correct labs to maximize efficiency', () => {
    const input = ['Posterior Crown', 'Anterior Crown', 'Clear Aligner']
    const result = labFulfillment(input)
    const expected = ['Lab One', 'Lab Two']

    expect(result).toEqual(expected)
  })

  it('returns only one lab if it can fulfill all orders', () => {
    const input = ['Posterior Crown', 'Anterior Crown', ]
    const result = labFulfillment(input)
    const expected = ['Lab One']

    expect(result).toEqual(expected)
  })
})
