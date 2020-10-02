
// Get DOM elements
const body = document.querySelector('body')
const text = document.querySelector('.text')

// Run every second
setInterval(function () {
  // Set time variables
  const date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  // Add zero if time is single digit
  if (hour <= 9) {
    hour = '0' + hour
  }

  if (minute <= 9) {
    minute = '0' + minute
  }

  if (second <= 9) {
    second = '0' + second
  }

  // Concatenate values
  const hex = '#' + hour + minute + second

  // Update background color
  body.style.background = hex

  // Update text
  text.textContent = hex
}, 500)



