import createController from '../controller.js'
import createSystem from '../system.js'

test('controller assigns a simple stop', () => {
  const system = createSystem(1, 3)
  system.request(2, 3)
  const control = createController(system)
  control()

  expect(system.requests).toEqual([])
  expect(system.elevators).toEqual([{id: 0, state: "MOVING", floor: 1, stops: [2, 3]}])
})

test('controller assigns the closest elevator', () => {
  const system = createSystem(2, 3)
  system.elevators = [{id: 0, state: "CLOSED", floor: 3},{id: 1, state: "CLOSED", floor: 2}]

  system.request(1, 3)
  const control = createController(system)
  control()

  expect(system.elevators).toEqual([{id: 0, state: "CLOSED", floor: 3},{id: 1, state: "MOVING", floor: 2, stops: [1, 3]}])
})
