import createSystem from '../system.js'

test('createSystem returns a single elevator', () => {
  const system = createSystem(1, 1)
  expect(system.elevators).toEqual([{state: "CLOSED", floor: 1}])
})
