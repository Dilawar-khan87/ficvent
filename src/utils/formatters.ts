function formatNumberToKFormat(number: number): string {
  if (number < 1000) {
    return number.toString()
  } else {
    const formattedNumber = (number / 1000).toFixed(2)
    return `${formattedNumber}K`
  }
}

export { formatNumberToKFormat }
