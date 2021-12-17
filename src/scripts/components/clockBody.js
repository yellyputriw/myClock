class ClockBody extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hour">
      <div class="hr" id="hr"></div>
    </div>
    <div class="min">
      <div class="mn" id="mn"></div>
    </div>
    <div class="sec">
      <div class="sc" id="sc"></div>
    </div>
    `;
  }
}

customElements.define('my-clock', ClockBody);
