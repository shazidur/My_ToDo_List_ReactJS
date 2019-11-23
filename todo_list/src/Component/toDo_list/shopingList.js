import React, {Component} from 'react'
import { Icon, Row, Col, Button, Layout } from 'antd';


import 'antd/dist/antd.css';

class Todo extends Component {

    render() { 
        return (
          <div>
          <Row style= {{maxHeight:'100%', maxWidth : '100%', margin:'5% 20% 20% 20%' }}>
            <h1> My Shoping list </h1>
          <Row>
            <Col span ={24}>
              <h3> <Icon type="caret-right" />  Total Number of Item : <b> 10  </b>  </h3>
            </Col>
            <br/> <br/><br/> <br/>
          </Row>
          <Row >
            <Col span = { 6}>
                <span> Value </span>  
            </Col>
            <Col span = { 6}>
                <Button> + </Button> 
            </Col>
            <Col span = { 6}>
                <Button> - </Button> 
            </Col>
            <Col span = { 6}>
                <Button> Delete </Button>
            </Col>
          </Row>
          </Row>
          </div>
        );
    }
}
 
export default Todo