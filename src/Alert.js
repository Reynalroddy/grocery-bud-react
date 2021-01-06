import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const Message = ({message,variant,removeAlert,lists}) => {
 useEffect(()=>{

  const timeout = setTimeout(()=>{
removeAlert()
  },3000)
     return ()=> clearTimeout(timeout)
 },[removeAlert]) //lists was used  lol..code didnt break but wtf....

  return <Alert variant={variant}>
 {message}
</Alert>;
};

export default Message;
