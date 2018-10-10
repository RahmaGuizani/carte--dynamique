import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function validate(name, number, date) {
  // name: (/^ [A - Z] * $ /).test(name) == true ,true means invalid, so our conditions got reversed
  return {
    name: name.length == 0 || name.length > 21 || /[A-Z]/.test(name) == false,
    number: number.length != 16
  };
}
export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      number: ""
    };
    this.nameChange = this.nameChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.numberChange = this.numberChange.bind(this);
  }

  nameChange(evt) {
    this.setState({ name: evt.target.value });
  }

  dateChange(evt) {
    this.setState({ date: evt.target.value });
  }
  numberChange(evt) {
    this.setState({ number: evt.target.value });
  }
  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { name, number, date } = this.state;
    alert(`this name is true: ${name} `);
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.name,
      this.state.number,
      this.state.date
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(
      this.state.name,
      this.state.number,
      this.state.date
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <div>
        <div className="App">
          <h1 className="Title">CREDIT CARD</h1>

          <div className="Part-left">
            <img
              className="Img-card"
              src="https://t4.ftcdn.net/jpg/00/63/97/01/240_F_63970103_dXdz645GQ9DjenhJOti1eEvsFZY8gucA.jpg"
            />
            <h1 className="Card-number">7253 3256 7895 1245</h1>
            <h3 className="Card-ref">5422</h3>
            <h3 className="Cardholder">CARDHOLDER</h3>
          </div>

          <div className="Part-reight">
            <p className="Card-month">MONTH/Y</p>
            <div className="Card-valid">
              <p>VALID THRU</p>{" "}
            </div>
            <h2 className="Card-valid-num">11/50</h2>
          </div>
          <img
            className="Mastercard"
            src="https://www.lagunblou.com/files/2014/07/VisaMastercardLOGO.jpg"
          />
        </div>
        <div className="forme">
          <form>
            <input
              type="text"
              name="name"
              className={errors.name ? "error" : ""}
              placeholder="Enter your name"
              onChange={this.nameChange}
            />
            <input
              type="txt"
              name="thru"
              className={errors.date ? "error" : ""}
              placeholder="MM/YY"
              onChange={this.thruChange}
            />
            <input
              type="txt"
              name="number"
              className={errors.number ? "error" : ""}
              placeholder="Enter your credit card number"
              onChange={this.numberChange}
            />

            <button disabled={isDisabled}>Enregtrer</button>
          </form>
        </div>
      </div>
    );
  }
}
