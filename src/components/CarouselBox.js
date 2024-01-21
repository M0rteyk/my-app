import React, { Component } from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import asdImg from '../assets/asd.jpg'
import assImg from '../assets/ass.jpg'
import aswImg from '../assets/asw.jpg'


export default class CarouselBox extends Component {
       render() {
       return(
         <Carousel>
            <Carousel.Item>
                <img
                   className='d-block w-100'
                   src={ asdImg }
                   alt="Komp"
                />
                <Carousel.Caption>
                    <h3>VENGEANCE i8200 Gaming PC</h3>
                    <p>Повысьте уровень своей игры с игровым ПК CORSAIR VENGEANCE серии i8200</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                   className='d-block w-100'
                   src={assImg}
                   alt="Komp"
                />
                <Carousel.Caption>
                    <h3>ASUS ROG STRIX G35CA</h3>
                    <p>К ПОБЕДЕ НА ПОЛНОЙ СКОРОСТИ!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                   className='d-block w-100'
                   src={aswImg}
                   alt="Komp"
                />
                <Carousel.Caption>
                    <h3>RAZER CORE X</h3>
                    <p>Превратите свой ноутбук Mac с поддержкой Thunderbolt™ 3 или Windows 10 в мощный компьютер настольного класса.</p>
                </Carousel.Caption>
            </Carousel.Item>
           
         </Carousel>
       )
    }
}