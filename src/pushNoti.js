import React from 'react'
import Push from 'web-push'
async function subsciber(key){
  let sw=await navigator.serviceWorker.ready;
  console.log(sw,"sw --")
  let push=sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:key
  })
  console.log(JSON.stringify(push),"===push---",key)
}

const PushNoti =()=>{
    const keySet=Push.generateVAPIDKeys()
    //Push.setVapidDetails('mailto:ashutoshmishraofficial22@gmail.com',keys.publicKey,keys.privateKey)
    console.log(keySet,"KeySet")
return(
<button onClick={subsciber(keySet.publicKey)}>Push Me</button>
)
}
export default PushNoti