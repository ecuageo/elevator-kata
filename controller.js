const createController = (system) => {
  return () => {
    const requests = system.requests
    system.requests = []

    const elevatorState = system.elevators[0]
    const request = requests[0]

    elevatorState.stops = [request.from, request.to]
    elevatorState.state = "MOVING"
    system.elevators = [elevatorState]
  }
}

export default createController
