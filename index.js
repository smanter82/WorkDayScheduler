//connect with Moment for times, color-code time blocks to indicate whether it is in the past, present, or future, 
//and figure out how to get new data to replace old data, and update ReadMe file

//HOW DO I REDO THIS IN JQUERY?? HELP!

//Set current date and time in header
let currentDay = document.getElementById("currentDay")
let m = moment().format('dddd, MMMM Do YYYY h:mm:ss a')
currentDay.textContent = m


//set variables for button, input, and label 
let saveBtn1 = document.querySelector("#saveBtn1")
let item1 = document.querySelector("#scheduleItem1")
let item1activity = document.querySelector("#scheduleItem1Label")
let saveBtn2 = document.querySelector("#saveBtn2")
let item2 = document.querySelector("#scheduleItem2")
let item2activity = document.querySelector("#scheduleItem2Label")
let saveBtn3 = document.querySelector("#saveBtn3")
let item3 = document.querySelector("#scheduleItem3")
let item3activity = document.querySelector("#scheduleItem3Label")
let saveBtn4 = document.querySelector("#saveBtn4")
let item4 = document.querySelector("#scheduleItem4")
let item4activity = document.querySelector("#scheduleItem4Label")
let saveBtn5 = document.querySelector("#saveBtn5")
let item5 = document.querySelector("#scheduleItem5")
let item5activity = document.querySelector("#scheduleItem5Label")
let saveBtn6 = document.querySelector("#saveBtn6")
let item6 = document.querySelector("#scheduleItem6")
let item6activity = document.querySelector("#scheduleItem6Label")
let saveBtn7 = document.querySelector("#saveBtn7")
let item7 = document.querySelector("#scheduleItem7")
let item7activity = document.querySelector("#scheduleItem7Label")
let saveBtn8 = document.querySelector("#saveBtn8")
let item8 = document.querySelector("#scheduleItem8")
let item8activity = document.querySelector("#scheduleItem8Label")
let saveBtn9 = document.querySelector("#saveBtn9")
let item9 = document.querySelector("#scheduleItem9")
let item9activity = document.querySelector("#scheduleItem9Label")

//Create local storage for schedule items
let schedule1 = JSON.parse(localStorage.getItem("schedule1")) || [];
let schedule2 = JSON.parse(localStorage.getItem("schedule2")) || [];
let schedule3 = JSON.parse(localStorage.getItem("schedule3")) || [];
let schedule4 = JSON.parse(localStorage.getItem("schedule4")) || [];
let schedule5 = JSON.parse(localStorage.getItem("schedule5")) || [];
let schedule6 = JSON.parse(localStorage.getItem("schedule6")) || [];
let schedule7 = JSON.parse(localStorage.getItem("schedule7")) || [];
let schedule8 = JSON.parse(localStorage.getItem("schedule8")) || [];
let schedule9 = JSON.parse(localStorage.getItem("schedule9")) || [];


//Pull items from local storage on loading    --  How do I get any new data to replace the old data now???
item1activity.textContent = schedule1
item2activity.textContent = schedule2   
item3activity.textContent = schedule3 
item4activity.textContent = schedule4 
item5activity.textContent = schedule5
item6activity.textContent = schedule6   
item7activity.textContent = schedule7 
item8activity.textContent = schedule8
item9activity.textContent = schedule9

//Set Save button event listeners for each activity item
saveBtn1.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff1 = item1.value
    console.log(savedStuff1)
    item2activity.textContent = savedStuff1
    schedule1.push(savedStuff1)
    console.log(schedule1)
    localStorage.setItem("schedule1", JSON.stringify(savedStuff1))
    
})
saveBtn2.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff2 = item2.value
    console.log(savedStuff2)
    item2activity.textContent = savedStuff2
    schedule2.push(savedStuff2)
    console.log(schedule2)
    localStorage.setItem("schedule2", JSON.stringify(savedStuff2))
    
})
saveBtn3.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff3 = item3.value
    console.log(savedStuff3)
    item3activity.textContent = savedStuff3
    schedule3.push(savedStuff3)
    console.log(schedule3)
    localStorage.setItem("schedule3", JSON.stringify(savedStuff3))
    
})
saveBtn4.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff4 = item4.value
    console.log(savedStuff4)
    item4activity.textContent = savedStuff4
    schedule4.push(savedStuff4)
    console.log(schedule4)
    localStorage.setItem("schedule4", JSON.stringify(savedStuff4))
    
})

saveBtn5.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff5 = item5.value
    console.log(savedStuff5)
    item5activity.textContent = savedStuff5
    schedule5.push(savedStuff5)
    console.log(schedule5)
    localStorage.setItem("schedule5", JSON.stringify(savedStuff5))
})
 
saveBtn6.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff6 = item6.value
    console.log(savedStuff6)
    item6activity.textContent = savedStuff6
    schedule6.push(savedStuff6)
    console.log(schedule6)
    localStorage.setItem("schedule6", JSON.stringify(savedStuff6))
})
 
saveBtn7.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff7 = item7.value
    console.log(savedStuff7)
    item7activity.textContent = savedStuff7
    schedule7.push(savedStuff7)
    console.log(schedule7)
    localStorage.setItem("schedule7", JSON.stringify(savedStuff7))
})
 
saveBtn8.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff8 = item8.value
    console.log(savedStuff8)
    item8activity.textContent = savedStuff8
    schedule8.push(savedStuff8)
    console.log(schedule8)
    localStorage.setItem("schedule8", JSON.stringify(savedStuff8))
})
 
saveBtn9.addEventListener("click", function(event){
    event.preventDefault()
    let savedStuff9 = item9.value
    console.log(savedStuff9)
    item9activity.textContent = savedStuff9
    schedule9.push(savedStuff9)
    console.log(schedule9)
    localStorage.setItem("schedule9", JSON.stringify(savedStuff9))
})
