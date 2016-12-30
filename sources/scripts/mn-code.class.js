class MnCode extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setMarkup()
    return self
  }

  setMarkup() {
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    code.textContent = this.innerHTML

    pre.append(code)
    this.textContent = ''
    this.insertBefore(pre, this.firstChild)
  }
}

window.customElements.define('mn-code', MnCode)
