import React, { Component } from 'react'
import { Container, Button, Form } from 'react-bootstrap'

export default class Forma extends Component {
       render() {
       return(
         <Container style={{ width: '500px'}}>
            <h1> Свяжитесь с нами </h1>
            <Form>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Ваша почта </Form.Label>
                  <Form.Control type="email" placeholder="Введите ваш Email" />
                  <Form.Text>
                     Вы можете не перживать за утечку ваших данных
                  </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                    <Form.Label>Если у вас возникли проблемы с нашими устройствами, пожалуйста не молчите!</Form.Label>
                    <Form.Control as="textarea" rows="3" />
               </Form.Group>

               <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Согласие на обработку ваших данных" />
               </Form.Group>

             <Button variant="primary" type="submit"> Отправить </Button> 


            </Form>
           
         </Container>
       )
    }
}