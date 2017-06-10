import _ from 'lodash'
import createController from './controller.js'

const createElevatorState = (floorCount, id) => (
  {id: id, state: "CLOSED", floor: 1}
)

const createSystem = (elevatorCount, floorCount) => {
  const elevators = _.times(elevatorCount, createElevatorState.bind(null, floorCount))

  return {
    elevators: elevators,
    request: function(from, to) {
      this.requests.push({from: from, to: to})
    },
    requests: [],
    start: function() {
      const controlElevators = createController(this)
      setInterval(controlElevators, 1000)
    }
  }
}

export default createSystem
