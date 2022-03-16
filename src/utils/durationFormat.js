export const durationFormat = total => {
  return `${Math.floor(total.asHours())}:${total.format('mm:ss')}`
}
