import React, { useState,useEffect } from 'react';
import { Button,FormControl,Input,InputLabel, FormHelperText } from '@material-ui/core';
import Message from './component/Message'
import db from './config/firebase'
import firebase from 'firebase';
import './App.css';
import FlipMove from 'react-flip-move';


function App() {

  const[input,setInput]=useState('');
  const[messages,setMessage] = useState([]);
  const[username,setUsername]= useState('')


  useEffect(() => {
    db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({id: doc.id , message : doc.data()})))
    });
  },[])

  useEffect(() => {
    setUsername(prompt("Enter Username"))
  },[]);


  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection('messages').add({
      message : input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
// setMessage([...messages, {username:username , message: input}]);
setInput('');
  }
  return (
    <div className="App">
    <h1>Messenger Clone</h1>
    <img src="https://lh3.googleusercontent.com/rkBi-WHAI-dzkAIYjGBSMUToUoi6SWKoy9Fu7QybFb6KVOJweb51NNzokTtjod__MzA" width="150px" height="100px" />
    <h2>Welcome {username}</h2>
    <form className="app__form">
     <FormControl>
  <InputLabel >Enter Message</InputLabel>
  <Input  value={input}
          onChange={(e) => setInput(e.target.value)} />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
<Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
      </form>
      <FlipMove>
      {
        messages.map(({id , message}) => (
          <Message key={id}  username={username} message={message}/>
          
        ))
      }
      </FlipMove>
    </div>
    
  );
}

export default App;
