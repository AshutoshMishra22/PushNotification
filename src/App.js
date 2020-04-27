import React from 'react';
//import  { useEffect } from 'react'
import PushNoti from './pushNoti'
//import Webpush from 'web-push'
function App() {
// useEffect(()=>{
//   const keys={privateKey: "eWtysixaaPGACFPSQgWFSDtEr9NLPimus-zjPcyvBcE",
// publicKey: "BGm_wqYnJmPHV_AV1NAB-xMvQ6AUkX4zNwxgGMRUCQtRT6FMEABHszRYG0ibMwy36l64mx5uKsfCO_DRHmvlT-A"
//   }
//   Webpush.setVapidDetails('mailto:ankur1998mishra@gmail.com',keys.publicKey,keys.privateKey)
// },[])
  return (
    <div className="App">
      <PushNoti/>
    </div>
  );
}

export default App;
