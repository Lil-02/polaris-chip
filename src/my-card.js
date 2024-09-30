import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "";
    this.subtitle = "";
    this.imgSrc = "";
    this.fancy = false;
    this.bgColor= "";
    this.choices;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px;
      }
      .container {
        padding: 16px;
        text-align: center;
      }
      :host([fancy]) {
        display: block;
        background-color: var(--bg-color, #790d6e);
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px blue
      }
      
      img {
        max-width: 100%;
        border-radius: 8px;
      }
      h1, h2 {
        margin: 0;
        padding: 5px 0;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      imgSrc: { type: String },
      bgColor: { type: String },
      fancy: {type: Boolean, reflect: true }
    };
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  render() {
    return html`
      <div class="container" style="background-color: ${this.bgColor}">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
        <h3>${this.choices}</h3>

        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Choices</summary>
        <div>
         <slot>${this.choices}</slot>
        </div>
    </details>
        <p><slot name= "Choices">${this.choices} </slot></p>
        <img src="${this.imgSrc}" alt="Card Image" />
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);
