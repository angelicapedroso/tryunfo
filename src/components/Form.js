import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label
            htmlFor="cardName"
          >
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
            />
          </label>

          <label
            htmlFor="cardDescription"
          >
            <textarea
              data-testid="description-input"
              id="cardDescription"
            />
          </label>

          <label
            htmlFor="cardAttr1"
          >
            <input
              type="number"
              data-testid="attr1-input"
              id="cardAttr1"
            />
          </label>

          <label
            htmlFor="carAttr2"
          >
            <input
              type="number"
              data-testid="attr2-input"
              id="carAttr2"
            />
          </label>

          <label
            htmlFor="cardAttr3"
          >
            <input
              type="number"
              data-testid="attr3-input"
              id="cartAttr3"
            />
          </label>

          <label htmlFor="cardImage">
            <input
              type="text"
              data-testid="image-input"
              id="cardImage"
            />
          </label>

          <label
            htmlFor="cardRare"
          >
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label
            htmlFor="cardSuperTrying"
          >
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="cardSuperTrying"
            />
          </label>

          <button type="submit" data-testid="save-button">Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
