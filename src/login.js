
import { Button, Form, Alert } from 'react-bootstrap';
import React, {useState} from 'react';
import axios from 'axios'

function Login() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [isLogin,setisLogin] = useState(0)

  var onUsernameChange = e =>{
    setUsername(e.target.value)
  }
  var onPasswordChange = e =>{
    setPassword(e.target.value)
  }
  var submit_login = e =>{
    // Adding Login from API using AXIOS
    axios.post('http://localhost:3001/login',{username:username, password: password})
         .then(response => {
            setisLogin(1);
            setUsername('');
            setPassword('');
         })
         .catch(error => {
            setisLogin(2);
         })

    //Adding Dummy Login from Memmory 
      // if(email === 'test@techiestalks.com' && password === 'test1234'){
      //     setisLogin(1);
      //     setEmail('');
      //     setPassword('');
      //   }
      // else{
      //     setisLogin(2);
      // }
    }
  
  return (
    <div>
      {isLogin === 1 ? 
        <Alert variant="success" className="mx-auto w-50 pt-4">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>Aww yeah, you are successfully loged in</p>
        </Alert>
        :
      <div>
        {isLogin === 2 &&
          <Alert variant="danger" className="mx-auto w-50 pt-4">
            <Alert.Heading>Oh Snap! you got an error!</Alert.Heading>
            <p>Your login failed, please check your username and password</p>
          </Alert>
        }
        <Form className="mx-auto w-50 pt-4">
          <Form.Group controlId="FormBasicEmail">
            <Form.Label>Username2</Form.Label>
            <Form.Control type="text" placeholder="enter username" onChange={onUsernameChange} value={username}/>
          </Form.Group>
          <Form.Group controlId="FormBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password" onChange={onPasswordChange} value={password}/>
          </Form.Group>

          <Button variant="primary" type="button" className="mt-2" onClick={submit_login}>submit</Button>
        </Form>
      </div>
      }
    </div>
  );
}

export default Login;
