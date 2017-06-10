import createSystem from '../system.js'

test('createSystem returns a single elevator', () => {
  const system = createSystem(1, 1)
  expect(system.elevators).toEqual([{id: 0, state: "CLOSED", floor: 1}])
})

test('createSystem returns a few elevators', () => {
  const system = createSystem(3, 1)
  expect(system.elevators).toEqual([{id: 0, state: "CLOSED", floor: 1},{id: 1, state: "CLOSED", floor: 1},{id: 2, state: "CLOSED", floor: 1}])
})

test('createSystem accepts a request and stores it', () => {
  const system = createSystem(1, 3)
  system.request(2, 3)
  expect(system.requests).toEqual([{from: 2, to: 3}])
})

