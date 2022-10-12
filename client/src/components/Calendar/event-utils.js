
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '')

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Trip Start',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}