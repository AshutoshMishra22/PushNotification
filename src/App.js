import React, { useEffect } from 'react';
import PushNoti from './pushNoti'
import Webpush from 'web-push'
function App() {
useEffect(()=>{
  const keys={privateKey: "eWtysixaaPGACFPSQgWFSDtEr9NLPimus-zjPcyvBcE",
publicKey: "BGm_wqYnJmPHV_AV1NAB-xMvQ6AUkX4zNwxgGMRUCQtRT6FMEABHszRYG0ibMwy36l64mx5uKsfCO_DRHmvlT-A"
  }
  Webpush.setVapidDetails('mailto:ankur1998mishra@gmail.com',keys.publicKey,keys.privateKey)
  var pushConfig={endpoint:"https://fcm.googleapis.com/fcm/send/cJ0TkS8A7RA:APA91bGHRMau9eQK4LV8Eapcu_cqoO9hMKNe6ZzK9tHqdauMIBlpvnxRew_6uodPK0bfQnoV6UWfss4-qU1dfBzqHg7CKm1fjfIKyCcxOm2HfvvEauyTAcNOw8I8y1TxXWu0ZgYYaXmr",
  expirationTime:null,
  keys:{
    p256dh:"BI9nQMqoj4SyJfaqvInyxmDYqQW3fYYF-eJl08q4GNZ5sDW-A02E5v08Ci_EakKUPYox3QsvzrgMhn3Hg4uEzsg",
    auth:"kOnk7sOdgb1TF3STRt7g1Q"
  }}
  console.log(pushConfig,"pushme pls")
  Webpush.sendNotification(pushConfig,"hiii")
  .catch((err)=>{
    console.log(err,"this error occured")
  })
},[])
  return (
    <div className="App">
      <PushNoti/>
    </div>
  );
}

export default App;
