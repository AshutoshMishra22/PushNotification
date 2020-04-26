import React from 'react'
import Push from 'web-push'
async function subsciber(){
  let sw=await navigator.serviceWorker.ready;
  console.log(sw,"sw --")
  let push=sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:"BBDmJat38JYt-ovOyTyUqP7y0ruHXW7qa3PIkfHKDLeq4zPX9eo9RgNKqAbDg4D2rO7llqgvBgJhs822KFUGcRI"
  })
  console.log(JSON.stringify(push),"===push---")
}
// privateKey: "RcacGveLKnCWqjXVzadm3A434lkbzBhZTGg3CpLdhAc"
// publicKey: "BBDmJat38JYt-ovOyTyUqP7y0ruHXW7qa3PIkfHKDLeq4zPX9eo9RgNKqAbDg4D2rO7llqgvBgJhs822KFUGcRI"
// __proto__: Object
const PushNoti =()=>{
    // const keySet=Push.generateVAPIDKeys()
    // //Push.setVapidDetails('mailto:ashutoshmishraofficial22@gmail.com',keys.publicKey,keys.privateKey)
    // console.log(keySet,"KeySet")
return(
<button onClick={subsciber}>Push Me</button>
)
}
export default PushNoti