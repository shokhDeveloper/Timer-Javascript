window.addEventListener("load", () => {
    let form = document.querySelector("form")
    form.addEventListener("submit", handleSub)
    let hours = document.querySelector(".timer__hours")
    let hoursTitle = document.querySelector(".hours__title")
    let minut = document.querySelector(".timer__minuts")
    let minutTitle = document.querySelector(".minuts__title")
    let sekund = document.querySelector(".timer__seconds")
    let sekundTitle = document.querySelector(".seconds__title")
    let goo = document.querySelector(".here__go")
    let stop = document.querySelector(".stop")
    let max = document.querySelector(".max")
    function handleSub(e){
        e.preventDefault()
        let sekundValue =  Number(sekund.value)
        let hoursValue = Number(hours.value)
        hoursTitle.textContent = hoursValue + ":"
        let minutValue = Number(minut.value)
        minutTitle.textContent = minutValue  + ":"
        let time = setInterval(() => {
            sekundValue --
            if(sekundValue < 0){
                sekundValue = 60  
                minutValue = minutValue-1
                minutTitle.textContent = minutValue  + ":"
            }else if(minutValue <= 0){
                minutValue = 60
                minutTitle.textContent = minutValue  + ":"
                hoursValue = hoursValue - 1
                hoursTitle.textContent = hoursValue+ ":" 
            }else if(hoursValue <= 0){
                hoursValue = 60
                hoursTitle.textContent = hoursValue+ ":" 
            }
            sekundTitle.textContent = sekundValue  
        }, 1000)     
        
       stop.addEventListener("click", stops) 
       function stops(){
            clearInterval(time)
       }
       goo.addEventListener("click", () => {
            time = setInterval(() => {
                sekundValue --
            if(sekundValue < 0){
                sekundValue = 60  
                minutValue = minutValue-1
                minutTitle.textContent = minutValue  + ":"
            }else if(minutValue <= 0){
                minutValue = 60
                minutTitle.textContent = minutValue  + ":"
                hoursValue = hoursValue - 1
                hoursTitle.textContent = hoursValue+ ":" 
            }else if(hoursValue <= 0){
                hoursValue = 60
                hoursTitle.textContent = hoursValue+ ":" 
            }
            sekundTitle.textContent = sekundValue
            },1000)      
       })
       let maximal = 100
       max.addEventListener("click", () => {
            maximal -= 100    
            time = setInterval(() => {
                sekundValue --
                if(sekundValue < 0){
                    sekundValue = 60  
                    minutValue = minutValue-1
                    minutTitle.textContent = minutValue  + ":"
                }else if(minutValue <= 0){
                    minutValue = 60
                    minutTitle.textContent = minutValue  + ":"
                    hoursValue = hoursValue - 1
                    hoursTitle.textContent = hoursValue+ ":" 
                }else if(hoursValue <= 0){
                    hoursValue = 60
                    hoursTitle.textContent = hoursValue+ ":" 
                }
                sekundTitle.textContent = sekundValue
            }, Number(1000 - maximal))
       })
    }
})