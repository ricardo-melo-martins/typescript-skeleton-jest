/**
 * Simple example
 */
import Inspiring from '../src/InspiringExample'

describe('Inspiring test (e2e)', () => {
  const phrase = Inspiring.quotes(0)
  test('The phrase on index 0 is type string', () => {
    expect(typeof phrase).toBe('string')
  })
  test('The phrase on index 0 contains specified word', () => {
    expect(phrase).toContain('Act')
  })
})
