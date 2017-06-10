import createController from '../controller.js'
import createSystem from '../system.js'

test('controller assigns a simple stop', () => {
  const system = createSystem(1, 3)
  system.request(2, 3)
  const control = createController(system)
  control()

  expect(system.requests).toEqual([])
  expect(system.elevators).toEqual([{state: "MOVING", floor: 1, stops: [2, 3]}])
})
