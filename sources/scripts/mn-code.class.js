class MnCode extends HTMLElement { // eslint-disable-line no-unused-vars
  constructor(self) {
    self = super(self)
    this.setMarkup()
    this.setHighlight()
    return self
  }

  setMarkup() {
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    code.classList = this.classList
    code.textContent = this.innerHTML

    pre.appendChild(code)
    this.textContent = ''
    this.insertBefore(pre, this.firstChild)
  }

  setHighlight() {
    const code = this.querySelector('code')
    window.hljs.highlightBlock(code)
  }
}

window.customElements.define('mn-code', MnCode)
