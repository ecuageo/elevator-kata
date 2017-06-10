import _ from 'lodash'

const createElevatorState = (floorCount, id) => (
  {state: "CLOSED", floor: 1}
)

let elevators

const createSystem = (elevatorCount, floorCount) => {
  elevators = _.times(elevatorCount, createElevatorState.bind(null, floorCount))

  return {
    elevators: elevators,
    request: function(from, to) {
      this.requests.push({from: from, to: to})
    },
    requests: []
  }
}

export default createSystem
