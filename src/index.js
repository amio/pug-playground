const pug = require('pug')

initApp()

function initApp () {
  const inputEl = document.querySelector('.pug textarea')
  const outputEl = document.querySelector('.html textarea')

  // bind input listener
  inputEl.addEventListener('input', ev => {
    const pugText = ev.target.value
    renderPug(pugText, outputEl)
  })
}

function renderPug (pugText, outputEl) {
  let renderResult
  try {
    renderResult = pug.render(pugText, { pretty: true })
    outputEl.classList.remove('error')
  } catch (e) {
    renderResult = e.message
    outputEl.classList.add('error')
    // console.error(e.message)
  }
  outputEl.value = renderResult.trim()
}
