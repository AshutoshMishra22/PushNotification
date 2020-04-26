import React from 'react'
import Push from 'web-push'
// privateKey: "0rPKYd7Gxrzt4W4eAqm4RSvb4hA9oOca6bcDznAYfkk"
// publicKey: "BJGaXe-IYZQizmtz4lpqXTi0UNmOcq8dn169YZeayfzv8xCxFvG6ab9WmbLNTVSQiNfCaRI4q-bTCIqrxRt39uc"

let keys={
    privateKey: "0rPKYd7Gxrzt4W4eAqm4RSvb4hA9oOca6bcDznAYfkk",
    publicKey: "BJGaXe-IYZQizmtz4lpqXTi0UNmOcq8dn169YZeayfzv8xCxFvG6ab9WmbLNTVSQiNfCaRI4q-bTCIqrxRt39uc"
}

// let keySet=Push.generateVAPIDKeys()
Push.setVapidDetails('mailto:ashutoshmishraofficial22@gmail.com',keys.publicKey,keys.privateKey)

async function subsciber(){
  let sw=await navigator.serviceWorker.ready;
  let push=sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:""
  })
  console.log(JSON.stringify(push))
}

const PushNoti =()=>{
 // console.log(key)
return(
<button onClick={subsciber}>Push Me</button>
)
}
export default PushNoti