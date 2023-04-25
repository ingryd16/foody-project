'use strict'

class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Define os valores padrão para os atributos personalizados
        this._name = 'Man Suit Set';
        this._imageSrc = './img/peerson.png';
        this._price = '$100.00';

        // Obtém os valores dos atributos personalizados, se fornecidos
        if (this.hasAttribute('name')) {
            this._name = this.getAttribute('name');
        }
        if (this.hasAttribute('image-src')) {
            this._imageSrc = this.getAttribute('image-src');
        }
        if (this.hasAttribute('price')) {
            this._price = this.getAttribute('price');
        }

        // Cria o conteúdo do elemento Shadow DOM
        this.shadowRoot.innerHTML = `
        <style>
          .card{
            width: 380px;
            height: 500px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #FF6813;
            gap: 10px;
            justify-content: center;
          }
  
          .infos{
            display: flex;
            width: 90%;
            align-items: center;
            justify-content: space-between;
          }
  
          .infos-card{
            gap: 5px;
            display: grid;
          }
  
          .name{
            font-size: 25px;
            font-weight: bold;
          }
  
          .heart{
            border-radius: 50%;
            height: 35px;
            width: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
          }
  
          .stars{
            display: flex;
            justify-content: space-between;
            font-weight: bold;
          }
  
          .price{
            display: flex;
            width: 90%;
            justify-content: space-between;
            font-size: 20px;
            font-weight: bold;
          }
  
          .percent{
            color: red;
          }
        </style>
        <div class="card">
          <div class="img-card">
            <img src="${this._imageSrc}" alt="">
          </div>
          <div class="infos">
            <div class='infos-card'>
              <div class="name">
                <span>${this._name}</span>
              </div>
              <div class="stars">
                <div class="star">
                  <img src="./img/Star Star Star Star Star.png" alt="">
                </div>
                <div class="num-star">
                  (90)
                </div>
              </div>
            </div>
            <div class="heart">
              <img src="./img/heart.png" alt="">
            </div>
          </div>
          <div class="price">
            <div class="dollar">
              <span>${this._price}</span>
            </div>
            <div class="percent">
              <span> 20% </span>
            </div>
          </div>
        </div>
      `;
    }
}  

customElements.define('my-card', Card);