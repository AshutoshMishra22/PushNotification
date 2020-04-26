import React from 'react'

async function subsciber(){
  let sw=await navigator.serviceWorker.ready;
  console.log(sw,"sw --")
  let push=sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:"BJGaXe-IYZQizmtz4lpqXTi0UNmOcq8dn169YZeayfzv8xCxFvG6ab9WmbLNTVSQiNfCaRI4q-bTCIqrxRt39uc"
  })
  console.log(JSON.stringify(push),"===push---")
}

const PushNoti =()=>{
return(
<button onClick={subsciber}>Push Me</button>
)
}
export default PushNoti