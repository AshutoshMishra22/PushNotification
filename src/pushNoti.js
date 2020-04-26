import React from 'react'
// import Push from 'web-push'
// async function subsciber(){
//   let sw=await navigator.serviceWorker.ready;
//   console.log(sw,"sw --")
//   let push=sw.pushManager.subscribe({
//     userVisibleOnly:true,
//     applicationServerKey:"BBDmJat38JYt-ovOyTyUqP7y0ruHXW7qa3PIkfHKDLeq4zPX9eo9RgNKqAbDg4D2rO7llqgvBgJhs822KFUGcRI"
//   })
//   console.log(JSON.stringify(push),"===push---")
// }
// // privateKey: "RcacGveLKnCWqjXVzadm3A434lkbzBhZTGg3CpLdhAc"
// // publicKey: "BBDmJat38JYt-ovOyTyUqP7y0ruHXW7qa3PIkfHKDLeq4zPX9eo9RgNKqAbDg4D2rO7llqgvBgJhs822KFUGcRI"
// // __proto__: Object
// const keySet=Push.generateVAPIDKeys()
    // //Push.setVapidDetails('mailto:ashutoshmishraofficial22@gmail.com',keys.publicKey,keys.privateKey)

    const PushNoti =()=>{
        function onConfirmation(){
            console.log("Granted And .....")
            if ('serviceWorker' in navigator){
                navigator.serviceworker.ready
                .then((reg)=>{
                    reg.showNotification("Successful TO get Notify By SW")
                })
            }
            else{
                console.log("No service Worker")
                new Notification("Successful TO get Notify")
            }
            
        }
        const subsciber=()=>{
            Notification.requestPermission((result)=>{
                console.log(result)
                if (result!=='granted'){
                    console.log("Permission NOT Granted")
                }
                else{
                    onConfirmation()
                }
            })
        }
return(
<button onClick={subsciber}>Push Me</button>
)
}
export default PushNoti