import _ from 'lodash'

const createController = (system) => {
  return () => {
    const requests = system.requests
    system.requests = []

    const request = requests[0]

    const elevatorState = _.sortBy(system.elevators, (elevator) => (
      Math.abs(elevator.floor - request.from)
    ))[0]

    elevatorState.stops = [request.from, request.to]
    elevatorState.state = "MOVING"
  }
}

export default createController
