import React from 'react';
import { useState } from 'react';
import CarBox from './CarBox';
import { CAR_DATA } from '../Data/CarData';

const PickCar = () => {
  const [active, setActive] = useState('SecondCar');
  const [colorBtn, setColorBtn] = useState('btn1');

  const btnID = id => {
    setColorBtn(colorBtn === id ? '' : id);
  };

  const coloringButton = id => {
    return colorBtn === id ? 'colored-button' : '';
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Browse Vehicle Models</h3>
              <h2>Our Inventory of Cars for Sale</h2>
              <p>
                Explore our impressive inventory of vehicles available for sale.
                Choose from a diverse range of amazing cars for your next
                adventure or business needs.
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton('btn1')}`}
                  onClick={() => {
                    setActive('SecondCar');
                    btnID('btn1');
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton('btn2')}`}
                  id="btn2"
                  onClick={() => {
                    setActive('FirstCar');
                    btnID('btn2');
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton('btn3')}`}
                  id="btn3"
                  onClick={() => {
                    setActive('ThirdCar');
                    btnID('btn3');
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton('btn4')}`}
                  id="btn4"
                  onClick={() => {
                    setActive('FourthCar');
                    btnID('btn4');
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton('btn5')}`}
                  id="btn5"
                  onClick={() => {
                    setActive('FifthCar');
                    btnID('btn5');
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton('btn6')}`}
                  id="btn6"
                  onClick={() => {
                    setActive('SixthCar');
                    btnID('btn6');
                  }}
                >
                  VW Passat CC
                </button>
              </div>

              {active === 'FirstCar' && <CarBox data={CAR_DATA} carID={0} />}
              {active === 'SecondCar' && <CarBox data={CAR_DATA} carID={1} />}
              {active === 'ThirdCar' && <CarBox data={CAR_DATA} carID={2} />}
              {active === 'FourthCar' && <CarBox data={CAR_DATA} carID={3} />}
              {active === 'FifthCar' && <CarBox data={CAR_DATA} carID={4} />}
              {active === 'SixthCar' && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickCar;
