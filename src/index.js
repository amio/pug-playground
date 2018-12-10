const pug = require('pug')

initApp()

function initApp () {
  const inputEl = document.querySelector('#source textarea')
  const outputEl = document.querySelector('#result textarea')

  // bind input listener
  inputEl.addEventListener('input', function (ev) {
    const pugText = ev.target.value
    renderPug(pugText, outputEl)
  })

  // enable tab indent
  textareaEnableTabIndent(inputEl)
}

function renderPug (pugText, outputEl) {
  var renderResult = ''
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

function textareaEnableTabIndent (textarea) {
  textarea.onkeydown = function(e) {
      if (e.keyCode == 9 || e.which == 9){
          e.preventDefault();
          var oldStart = this.selectionStart;
          var before   = this.value.substring(0, this.selectionStart);
          var selected = this.value.substring(this.selectionStart, this.selectionEnd);
          var after    = this.value.substring(this.selectionEnd);
          this.value = before + "  " + selected + after;
          this.selectionEnd = oldStart + 2;
      }
  }
}
