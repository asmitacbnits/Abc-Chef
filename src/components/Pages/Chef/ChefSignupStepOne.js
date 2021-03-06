import React ,{useState} from 'react';
import { useForm } from "react-hook-form";
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col,Form} from 'reactstrap';
//import { NavLink } from "react-router-dom";
import SingelBanner from '../SingelBanner';
import InputUI from "../../../UI/InputUI";
import {CHEFCREATE_URL} from "../../../API/Helper/allApiUrl";
import {axiosApiCall} from "../../../API/index";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../../history';
const ChefSignupStepOne = (props) =>{
  const initialFields = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword:"",
    userType: "chef",
   
  };
  const { handleSubmit, register, errors,formState } = useForm({
    mode: "onChange"
  });
  const [fields, setFields] = useState(initialFields);
  const [errorMsgPassword, setErrorPassword] = useState(false);
  const [errorMsgEmail, setErrorEmail] = useState(false);
  const  { touched  } = formState;
  const onSubmit = async (fromData) => {

    let  {data}  = await axiosApiCall.post(`${CHEFCREATE_URL}/createChef`, fromData);
                // set token in localStorage
                const details = data.msg;
                if(data.ack===true){
                    history.push('/ChefSignupStepTwo');
                    toast.info(details, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }else{
                    toast.error(details, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
  
  };

  const handleChange = (name,value) => {
     setFields((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const checkPassword = () =>{
    if(touched.password === true && touched.confirmPassword === true){
      if(fields.password !== fields.confirmPassword){
           setErrorPassword(true)
        return
      }else{
        setErrorPassword(false)
      }
   }
}
const checkEmail = () =>{
  if(touched.email === true && touched.confirmEmail === true){
    if(fields.email !== fields.confirmEmail){
         setErrorEmail(true)
      return
    }else{
      setErrorEmail(false)
    }
 }
}
  return(
    <React.Fragment>
      {/* <div className="singel-banner">
        <img src={ImagePath.banner4} alt="" className="img-fluid" />
        <div className="singel-caption">
          <Container>
            <h1>Start Cooking Now</h1>
          </Container>
        </div>
      </div> */}
       
      <SingelBanner
        bannerImg={ImagePath.banner4}
        bannerTitle="Start Cooking Now"
        classNameAli="text-left"
      />

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={7}>
            <div className="threeStep">
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span className="active">1</span>
                    <h3>Create your profile</h3>
                    <p>Sign up and register to cook either online or by downloading our mobile app in stores.</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span>2</span>
                    <h3>Submit Requirements</h3>
                    <p>Chefs must submit a valid Food Safety Certificate as well as pass a mandatory background assessment.</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span>3</span>
                    <h3>Your Business, Your Way</h3>
                    <p>Once approved your business is yours to manage.  Create the schedule you want with the clients you want to serve.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <div className="formBox">
            <Form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
              <div className="booxInfo">basic info</div>
              <h2>Chef Register New Account</h2>
              <InputUI
                  placeholder="First Name"
                  name="firstName"
                  errors={errors}
                  innerRef={register({
                    required: "This is required field",
                  })}
                  fields={fields}
                />
               <InputUI
                  placeholder="Last Name"
                  name="lastName"
                  errors={errors}
                  innerRef={register({
                    required: "This is required field",
                  })}
                  fields={fields}
                />
                <InputUI
                  placeholder="Email"
                  type="email"
                  name="email"
                  errors={errors}
                  innerRef={register({
                    required: "This is required field",
                  })}
                  fields={fields}
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.value)
                  }
                  onBlur={checkEmail}
                /> 
                <InputUI
                  placeholder="Confirm Email"
                  type="email"
                  name="confirmEmail"
                  errors={errors}
                  innerRef={register({
                    required: "This is required field",
                  })}
                  fields={fields}
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.value)
                  }
                  onBlur={checkEmail}
                /> 
                {errorMsgEmail?<div className="text-danger">{"***Confirm Email does not chnaged"}</div>:''}
                <InputUI
                  type="password"
                  placeholder="Password"
                  name="password"
                  errors={errors}
                  innerRef={register({
                    required: "This is required field",
                  })}
                  fields={fields}
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.value)
                  }
                  onBlur={checkPassword}

                /> 
                <InputUI
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  errors={errors}
                  innerRef={register({
                    required: "This is required field",
                  })}
                  fields={fields}
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.value)
                  }
                  onBlur={checkPassword}

                /> 
                {errorMsgPassword?<div className="text-danger">{"***password does not chnaged"}</div>:''}
             
              {/* button comment out for validation */}
              <button className="defaualt" type='submit'>Next</button>

              {/* Comment this NavLink remove after validation. */}
              {/* <NavLink to="/ChefSignupStepTwo" className="defaualt">Next</NavLink> */}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="features">
        <Container>
          <h3 className="heading2">Join a cooking revolution!!!</h3>
          <p className="subheading mb-5">Connect with thousands of food lovers looking to bring the culinary experience to another level.</p>
          <Row>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="features-box">
                <img src={ImagePath.lowfees} alt="" />
                <h4 className="my-4">Marketplace Leading Low Fees</h4>
                <p>Earn what you deserve while exercising your passion!</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="features-box">
                <img src={ImagePath.schedule} alt="" />
                <h4 className="my-4">Your Schedule</h4>
                <p>Manage your bookings and work when its convenient for you!</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="features-box">
                <img src={ImagePath.menu} alt="" />
                <h4 className="my-4">Your Menu</h4>
                <p>Create and prepare meals that reflect you and that you carefully choose!</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3}>
              <div className="features-box">
                <img src={ImagePath.support} alt="" />
                <h4 className="my-4">Our Support</h4>
                <p>You are backed with industry leading App and 24/7 customer service</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  )
}

export default ChefSignupStepOne;