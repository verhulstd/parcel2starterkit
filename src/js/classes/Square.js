export default class Square {
  #x;
  #y;
  #size;
  #holder;
  #clicked = 0;
  constructor(x, y, size, holder) {
    this.#x = x;
    this.#y = y;
    this.#size = size;
    this.#holder = holder;
    this.htmlRef = this.#generateHTML();
    //console.log(this.htmlRef);
    this.#setStyling();
    this.#setUpEvents();
  }
  #generateHTML() {
    this.#holder.insertAdjacentHTML(
      "beforeend",
      `
        <div class="square"></div>
      `
    );
    return this.#holder.querySelector(".square:last-child");
  }
  #setStyling() {
    const styles = {
      left: this.#x + "px",
      top: this.#y + "px",
      width: this.#size + "px",
      height: this.#size + "px",
      backgroundColor: "blue",
    };
    Object.assign(this.htmlRef.style, styles);
  }
  #setUpEvents() {
    this.htmlRef.onclick = () => {
      this.htmlRef.style.backgroundColor = "red";
      this.#clicked++;
      if (this.#clicked === 5) {
        this.#holder.removeChild(this.htmlRef);
      }
    };
  }
  //   get x() {
  //     return this.#x + "px";
  //   }
  //   get y() {
  //     return this.#y + "px";
  //   }
  //   set x(str) {
  //     this.#x = parseInt(str);
  //   }
}
