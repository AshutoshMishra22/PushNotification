import React from 'react'
import Push from 'web-push'
// async function subsciber(){
//   let sw=await navigator.serviceWorker.ready;
//   console.log(sw,"sw --")
//   let push=sw.pushManager.subscribe({
//     userVisibleOnly:true,
//     applicationServerKey:"BBDmJat38JYt-ovOyTyUqP7y0ruHXW7qa3PIkfHKDLeq4zPX9eo9RgNKqAbDg4D2rO7llqgvBgJhs822KFUGcRI"
//   })
//   console.log(JSON.stringify(push),"===push---")
// }
// privateKey: "eWtysixaaPGACFPSQgWFSDtEr9NLPimus-zjPcyvBcE"
// publicKey: "BGm_wqYnJmPHV_AV1NAB-xMvQ6AUkX4zNwxgGMRUCQtRT6FMEABHszRYG0ibMwy36l64mx5uKsfCO_DRHmvlT-A"
// __proto__: Object
// const keySet=Push.generateVAPIDKeys()
    // //Push.setVapidDetails('mailto:ashutoshmishraofficial22@gmail.com',keys.publicKey,keys.privateKey)

    const PushNoti =()=>{
        function onConfirmation(){
            console.log("Granted And .....")
            var register
            const keySet=Push.generateVAPIDKeys()
            console.log(keySet)
            if ('serviceWorker' in navigator){
                navigator.serviceWorker.ready
                .then((reg)=>{
                    register=reg
                    //reg.showNotification("Successful TO get Notify By SW")
                    return reg.pushManager.getSubscription()
                })
                .then((sub)=>{
                    if(sub!==null)
                    {
                        console.log("Have subs")
                    }
                    else{
                        console.log(register,"register")
                        console.log(register.pushManager.subscribe,register.pushManager)
                        register.pushManager.subscribe({
                            userVisibleOnly:true,
                            applicationServerKey:"BGm_wqYnJmPHV_AV1NAB-xMvQ6AUkX4zNwxgGMRUCQtRT6FMEABHszRYG0ibMwy36l64mx5uKsfCO_DRHmvlT-A"
                        })
                    }
                })
                .then((newSub)=>{
                    console.log(JSON.stringify(newSub),"New Subscription")
                    register.showNotification("this is a pUsh Notification ")
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