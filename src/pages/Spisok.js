import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col, Button} from 'react-bootstrap'
import CarouselBox from '../components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel'

export default class Spisok extends Component {
       render() {
       return(
        <>
          <Container>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                      <Nav.Link eventKey="1">ASUS G10CE ROG Strix</Nav.Link>
                                      
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="2">IRBIS Groovy SFF</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="3">MSI Infinite X2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="4">IRBIS Noble MT</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="5">HP Z2 Mini G5</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="6">IRBIS Groovy MT</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="7">Lenovo Legion T7</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="8">Lenovo ThinkCentre M70q Gen 3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="9">Dell OptiPlex 7010 Micro</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="10">HP Pro Mini 260 G9</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="11">Lenovo IdeaCentre Gaming 5</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="12">MSI MAG Infinite S3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="13">Altos P10 F8</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="14">Apple Mac Mini</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="15">ASUS G10DK ROG Strix</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="16">Gigabyte AORUS MODEL X 11th</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="17">HP Omen GT13</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content className='mt-2'>
                                    <Tab.Pane eventKey="1">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1023240/358" />
                                            <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 10400F;
                                            <p></p>
                                            Тактовая частота: 2900 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: GeForce GTX 1650;
                                            <p></p>
                                            Объём видеопамяти: 4096 Мб;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 54 870 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1053239/358" />
                                            <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 11400;
                                            <p></p>
                                            Тактовая частота: 2600 МГц;
                                            <p></p>
                                            Объём установленной памяти: 8 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 256 Гб;
                                            <p></p>
                                            Графический чипсет: Intel UHD Graphics 730;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 43 750 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/5959302/264" />
                                            <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i7;
                                            <p></p>
                                            Модель: 13700KF;
                                            <p></p>
                                            Тактовая частота: 3400 МГц;
                                            <p></p>
                                            Объём установленной памяти: 32 Гб;
                                            <p></p>
                                            Объём установленного HDD: 2 ТБ;
                                            <p></p>
                                            Объём установленного SSD: 1 ТБ;
                                            <p></p>
                                            Графический чипсет: GeForce RTX 4080;
                                            <p></p>
                                            Объём видеопамяти: 16384 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 300 010 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="4">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1053443/264" />
                                        <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 11400;
                                            <p></p>
                                            Тактовая частота: 2600 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: GeForce RTX 3050;
                                            <p></p>
                                            Объём видеопамяти: 8192 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 89 260 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                            
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="5">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/5941277/264" />
                                        <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 10600;
                                            <p></p>
                                            Тактовая частота: 3300 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 256 Гб;
                                            <p></p>
                                            Графический чипсет: Intel UHD Graphics 630;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 79 250 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="6">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1053427/264" />
                                        <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 11400;
                                            <p></p>
                                            Тактовая частота: 2600 МГц;
                                            <p></p>
                                            Объём установленной памяти: 8 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 256 Гб;
                                            <p></p>
                                            Графический чипсет: Intel UHD Graphics 730;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 37 160 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="7">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1097256/264" />
                                            <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i7;
                                            <p></p>
                                            Модель: 12700KF;
                                            <p></p>
                                            Тактовая частота: 3600 МГц;
                                            <p></p>
                                            Объём установленной памяти: 32 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 2 Тб, 512 Гб;
                                            <p></p>
                                            Графический чипсет: GeForce RTX 3080;
                                            <p></p>
                                            Объём видеопамяти: 10240 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 288 090 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="8">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1053796/264" />
                                            <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 12500T;
                                            <p></p>
                                            Тактовая частота: 2000 МГц;
                                            <p></p>
                                            Объём установленной памяти: 8 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 256 Гб;
                                            <p></p>
                                            Графический чипсет: Intel UHD Graphics 770;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 73 440 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                     <Tab.Pane eventKey="9">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/6004345/264" />
                                        <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i3;
                                            <p></p>
                                            Модель: 13100T;
                                            <p></p>
                                            Тактовая частота: 2500 МГц;
                                            <p></p>
                                            Объём установленной памяти: 8 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 256 Гб;
                                            <p></p>
                                            Графический чипсет: Intel UHD Graphics 730;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 51 930 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="10">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/5933277/264" />
                                            <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 1235U;
                                            <p></p>
                                            Тактовая частота: 1300 МГц;
                                            <p></p>
                                            Объём установленной памяти: 8 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: Intel UHD Graphics 730;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 58 780 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="11">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1096773/264" />
                                        <p>
                                            Производитель: AMD;
                                            <p></p>
                                            Линейка: Ryzen 5;
                                            <p></p>
                                            Модель: 5600G;
                                            <p></p>
                                            Тактовая частота: 3900 МГц;
                                            <p></p>
                                            Объём установленной памяти: 8 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: GeForce RTX 3050;
                                            <p></p>
                                            Объём видеопамяти: 8192 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 61 740 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="12">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/6035443/264" />
                                        <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i5;
                                            <p></p>
                                            Модель: 11400F;
                                            <p></p>
                                            Тактовая частота: 2600 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: GeForce GTX 1660 SUPER;
                                            <p></p>
                                            Объём видеопамяти: 6144 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 75 010 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="13">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/5955566/264" />
                                        <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i7;
                                            <p></p>
                                            Модель: 12700;
                                            <p></p>
                                            Тактовая частота: 2100 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: NVIDIA T1000;
                                            <p></p>
                                            Объём видеопамяти: 8192 Мб;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 150 660 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="14">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/6006262/264" />
                                        <p>
                                            Производитель: Apple;
                                            <p></p>
                                            Линейка: M2 Series;
                                            <p></p>
                                            Модель: M2 Pro;
                                            <p></p>
                                            Тактовая частота: 2424 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: Apple M2 Pro 16-core;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 183 490 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="15">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/5943699/264" />
                                        <p>
                                            Производитель: AMD;
                                            <p></p>
                                            Линейка: Ryzen 7;
                                            <p></p>
                                            Модель: 5800X;
                                            <p></p>
                                            Тактовая частота: 3800 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: 1 Тб;
                                            <p></p>
                                            Объём установленного SSD: 512 Гб;
                                            <p></p>
                                            Графический чипсет: GeForce RTX 3070;
                                            <p></p>
                                            Объём видеопамяти: 8192 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 131 630 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="16">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/921024/264" />
                                        <p>
                                            Производитель: Intel;
                                            <p></p>
                                            Линейка: Core i9;
                                            <p></p>
                                            Модель: 11900K;
                                            <p></p>
                                            Тактовая частота: 3500 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 3 Тб;
                                            <p></p>
                                            Графический чипсет: GeForce RTX 3080;
                                            <p></p>
                                            Объём видеопамяти: 10240 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 210 110 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="17">
                                        <img src="https://www.regard.ru/api/site/cacheimg/goods/1060578/264" />
                                        <p>
                                            Производитель: AMD;
                                            <p></p>
                                            Линейка: Ryzen 7;
                                            <p></p>
                                            Модель: 5800X;
                                            <p></p>
                                            Тактовая частота: 3800 МГц;
                                            <p></p>
                                            Объём установленной памяти: 16 Гб;
                                            <p></p>
                                            Объём установленного HDD: не установлен;
                                            <p></p>
                                            Объём установленного SSD: 1 Тб;
                                            <p></p>
                                            Графический чипсет: GeForce RTX 3080;
                                            <p></p>
                                            Объём видеопамяти: 10240 Мб;
                                            <p></p>
                                            Сетевой интерфейс: Wi-Fi, Bluetooth;
                                            </p>
                                            <p variant="primary" type="submit"> Цена: 200 180 ₽ </p>
                                            <Button variant="primary" type="submit"> Все характеристики </Button>
                                            <p></p>
                                            <Button variant="primary" type="submit"> В корзину </Button>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                  </Tab.Container>
          </Container>
          
      
       </>
       )
    }
}