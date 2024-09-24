import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Happy Valentines Day!';
    this.subtitle = 'Will you be my Valentine?';
    this.imgSrc = "https://cdn.shopify.com/s/files/1/0139/0811/5514/files/Glad_Dreams_Giver-_Tier_3_480x480.png?v=160322954https://codepen.io/your-work8";
    this.bgColor = '#f9f9f9';
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .container {
        background-color: var(--bg-color, #f9f9f9);
        padding: 16px;
        text-align: center;
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
    };
  }

  render() {
    return html`
      <div class="container" style="background-color: ${this.bgColor}">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
        <img src="${this.imgSrc}" alt="Card Image" />
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);
