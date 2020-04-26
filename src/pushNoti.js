import React from 'react'

async function subsciber(){
  let sw=await navigator.serviceWorker.ready;
  let push=sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:""
  })
  console.log(JSON.stringify(push))
}

const Push =()=>{
 // console.log(key)
return(
<button onClick={subsciber}>Push Me</button>
)
}
export default Push