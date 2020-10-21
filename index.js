//Still need to finish for items #5-9, connect with Moment for times, color-code time blocks to indicate whether it is in the past, present, or future, 
//and figure out how to get new data to replace old data 

//set variables for button, input, and label (#1-4 so far)
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

//Create local storage for schedule items
let schedule1 = JSON.parse(localStorage.getItem("schedule1")) || [];
let schedule2 = JSON.parse(localStorage.getItem("schedule2")) || [];
let schedule3 = JSON.parse(localStorage.getItem("schedule3")) || [];
let schedule4 = JSON.parse(localStorage.getItem("schedule4")) || [];

//Pull items from local storage on loading    --  How do I get any new data to replace the old data now???
item1activity.textContent = schedule1
item2activity.textContent = schedule2   
item3activity.textContent = schedule3 
item4activity.textContent = schedule4 

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