import React, { Component } from 'react';
import { Breadcrumb,Carousel , Icon,Row,Col ,Typography,Rate} from 'antd';
import './first.css';
import logo from '../logo.svg';
import 'antd/dist/antd.css';
const { Text,Title } = Typography;
const desc = ['1', '2', '3', '4', '5'];


class MyComponent extends Component {
    state = {
        count: 65,
        show: true,
        value:3,
      };
      increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
      };
      onChange = show => {
        this.setState({ show });
      };
    onChange=(a, b, c)=> {
        console.log(a, b, c);
      }
      handleChange = value => {
        this.setState({ value });
      };
      
  render() {
    const HeartSvg = () => (
        <svg width="5em" height="5em" fill="currentColor" viewBox="0 0 1024 1024">
          <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
        </svg>
      );
      
    const HeartIcon = props => <Icon component={HeartSvg} {...props} />;
    return (
      <div > 
           <Breadcrumb>
            <Breadcrumb.Item>صفحه اصلی</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">صفحه 1</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">صفحه 2</a>
            </Breadcrumb.Item>
            </Breadcrumb>
            <div className='page'>
            <Carousel afterChange={this.onChange} style={{width:'99%',margin:'auto'}}>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <img src={logo}/>
                </div>
            </Carousel>
            <Row>
                <Col span={12} >
                     <HeartIcon style={{ color: 'hotpink',float:'left' }} onClick={this.increase} /> 
                    <Text style={{float:'left',paddingTop:'5px',fontSize:'30px'}}>  ({this.state.count})</Text>
                </Col>
                <Col span={12}> 
                    <Icon type="fork"  style={{fontSize: '50px',transform: 'rotate(90deg)',float:'right'}}/>
                    <Text style={{fontSize:'30px'}}>به اشتراک گذاری</Text>
                </Col>
            </Row>
                <Title level={2}>خط لب دریم گلدن</Title>
                <Title level={3} >Golden rose dream</Title>
            <hr/>
            <span style={{float:'left'}}>
                <Rate tooltips={desc} onChange={this.handleChange} value={this.state.value} />
                <span style={{border:'1px solid #646464',width:'300px', backgroundColor:'#646464',padding:'5px',color:'white', margin:'5px'}}>
                {this.state.value ? <span className="ant-rate-text">{desc[this.state.value - 1]}/5</span> : ''}
                </span>
                (235نظر)
            </span>
            <hr style={{marginTop:'60px'}}/>
            <Row style={{paddingTop:'20px'}}>
                <Col span={8}><Title level={2} type="danger">25% تخفیف</Title></Col>
                <Col span={8}><hr style={{ width:'50px',transform: 'rotate(90deg)',marginTop:'25px'}}/></Col>
                <Col span={8}> <Title level={2}>قیمت  :<Text delete>5200</Text> <Text level={2}>4600 ت</Text> </Title>  </Col>
            </Row>
            <hr style={{marginTop:'60px'}}/>
            <Title level={2}>رنگ مد نظرتو انتخاب کن</Title>
            <div >
                <Row className='cadr' >
                    <Col span={4} style={{backgroundColor:'#82CA9C',textAlign:'center',paddingTop:'15px'}}><Icon type="check"style={{fontSize:'70px',color:'white'}} /></Col>
                    <Col span={4} style={{backgroundColor:'#F06EAA'}}></Col>
                    <Col span={4} style={{backgroundColor:'#FFF568',textAlign:'center',paddingTop:'15px'}}><Icon type="percentage" style={{fontSize:'70px',color:'white'}} /></Col>
                    <Col span={4} style={{backgroundColor:'#8781BD',textAlign:'center',paddingTop:'15px'}}><Icon type="percentage" style={{fontSize:'70px',color:'white'}}/></Col>
                    <Col span={4} style={{backgroundColor:'#82CA9C'}}></Col>
                    <Col span={4} style={{backgroundColor:'#82CA9C'}}></Col>
                </Row>
                <Row className='cadr'>
                    <Col span={4} style={{backgroundColor:'#82CA9C'}}></Col>
                    <Col span={4} style={{backgroundColor:'#F06EAA'}}></Col>
                    <Col span={4} style={{backgroundColor:'#FFF568'}}></Col>
                    <Col span={4} style={{backgroundColor:'#8781BD'}}></Col>
                    <Col span={4} style={{backgroundColor:'#82CA9C',textAlign:'center',paddingTop:'15px'}}><Icon type="close" style={{fontSize:'70px',color:'white'}}/></Col>
                    <Col span={4} style={{backgroundColor:'#82CA9C',textAlign:'center',paddingTop:'15px'}}><Icon type="close" style={{fontSize:'70px',color:'white'}} /></Col>
                </Row>
                <Row className='cadr' >
                    <Col span={4} offset={4} style={{backgroundColor:'#82CA9C'}}></Col>
                    <Col span={4}  offset={4}  style={{backgroundColor:'#82CA9C'}}></Col>
                </Row>
            </div>
            </div>
         
                <Row type='flex' justify="center">
                    <Col span={18}  style={{border:'1px solid #F3859B',backgroundColor:'white',margin:'10px',width:'500px', height:'150px',borderRadius:'10px',fontSize:'40px',paddingTop:'30px',textAlign:'center'}}>
                       <Text type='danger'>- </Text>   تعداد   <Text type='danger'>+  </Text> 
                    </Col>
                    <Col span={6}  style={{border:'1px solid #82CA9C',backgroundColor:'#F3859B',margin:'10px',width:'750px', height:'150px',borderRadius:'10px',textAlign:'center',color:'white',fontSize:'40px',paddingTop:'30px'}}>
                    <Icon type="shopping-cart" style={{float:"left",fontSize:'100px'}}/>
                    افزودن به سبد خرید
                  
                    </Col>
                </Row>
                <div className='page'>
                <Row type='flex' justify='center' >
                    <Col span={8}  className='send'>
                        <Icon type="copyright"/>
                        <Title level={3} >ارسال رایگان</Title>
                        <hr style={{ width:'200px'}}/>
                        <Title level={3} >شرایط خدمات</Title>
                    </Col>
                    <Col span={8} className='send'>
                        <Icon type="copyright"  />
                        <Title level={3} >7روز بازگشت رایگان</Title>
                        <hr style={{ width:'200px'}}/>
                        <Title level={3} >شرایط خدمات</Title>
                    </Col>
                    <Col span={8} className='send' >
                        <Icon type="copyright" />
                        <Title level={3} >Golden rose dream</Title>
                        <hr style={{ width:'200px'}}/>
                        <Title level={3} >شرایط خدمات</Title>
                    </Col>
                </Row>

                </div>
                <div className="page">
                    <Text style={{fontSize:'50px'}} >شرایط خدمات</Text>
                    <Icon style={{fontSize:'50px'}} type="copyright"  />
                    <img src={logo} style={{width:'300px',height:'300px'}}/>
                  
                </div>
         
           
          
    </div>
    );
  }
}

export default MyComponent;