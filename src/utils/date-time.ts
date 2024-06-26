const formattedTime = (timestamp: string) => {
  return new Date(timestamp)
    .toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .toUpperCase()
}

const formattedDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

function isFutureDate(datetimeStr: string): boolean {
  const dt = new Date(datetimeStr)

  const currentDatetime = new Date()

  return dt > currentDatetime
}

export { formattedTime, formattedDate, isFutureDate }
