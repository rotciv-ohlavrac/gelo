import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  text: string = 'Simple text example';

  render() {
    return html`<button>Hello, ${this.text}!</button>`;
  }
}
