export default function formatDate(date) {
  if (date) {
    const dateString = date.split('-')
    // if (year === currentYear) {
    //   paramsObj.year = "Toady"
    // }
    return `${dateString[0]} ${dateString[1]} ${dateString[2]}`
  }

  return ' '
}
