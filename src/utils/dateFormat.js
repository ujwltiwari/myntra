export const ddyymm = (originalDate, nextDays = 0) => {
  // 12-02-2023
  const currentDate = new Date(originalDate)
  const day = currentDate.getDate() + nextDays
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  const formattedDate = `${day}-${month}-${year}`
  return formattedDate
}

export const DayDateMonth = (originalDate) => {
  const currentDate = new Date(originalDate)

  const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
  return formattedDate
}

export const DateMonth = (originalDate, nextDays = 0) => {
  const currentDate = new Date(originalDate)
  const day = currentDate.getDate() + nextDays
  const month = currentDate.toLocaleString('en-US', {
    month: 'short',
  })
  return `${day} ${month}`
}
