import _ from 'lodash'

const createController = (system) => {
  return () => {
    const requests = system.requests
    system.requests = []

    _.each(requests, (request) => {
      const requestGoing = request.from > request.to ? "DOWN" : "UP"

      const elevatorState = _.chain(system.elevators)
        .filter(elevator => (
          elevator.going === undefined || elevator.going === requestGoing
        )).sortBy(elevator => (
          Math.abs(elevator.floor - request.from)
        )).value()[0]

      elevatorState.stops = [request.from, request.to]
      elevatorState.state = "MOVING"
      elevatorState.going = requestGoing
    })
  }
}

export default createController
