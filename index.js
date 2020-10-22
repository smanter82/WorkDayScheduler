//connect with Moment for times, color-code time blocks to indicate whether it is in the past, present, or future, 
//and figure out how to get new data to replace old data, and update ReadMe file

//Set current date and time in header
let currentDay = document.getElementById("currentDay")
let m = moment().format('dddd, MMMM Do YYYY h:mm:ss a')
currentDay.textContent = m
//javaScript get time


//set variables for button, input, and label 
let $saveBtn1 = $("#saveBtn1")
let $item1 = $("#scheduleItem1")
let $item1activity = $("#scheduleItem1Label")
let $saveBtn2 = $("#saveBtn2")
let $item2 = $("#scheduleItem2")
let $item2activity = $("#scheduleItem2Label")
let $saveBtn3 = $("#saveBtn3")
let $item3 = $("#scheduleItem3")
let $item3activity = $("#scheduleItem3Label")
let $saveBtn4 = $("#saveBtn4")
let $item4 = $("#scheduleItem4")
let $item4activity = $("#scheduleItem4Label")
let $saveBtn5 = $("#saveBtn5")
let $item5 = $("#scheduleItem5")
let $item5activity = $("#scheduleItem5Label")
let $saveBtn6 = $("#saveBtn6")
let $item6 = $("#scheduleItem6")
let $item6activity = $("#scheduleItem6Label")
let $saveBtn7 = $("#saveBtn7")
let $item7 = $("#scheduleItem7")
let $item7activity = $("#scheduleItem7Label")
let $saveBtn8 = $("#saveBtn8")
let $item8 = $("#scheduleItem8")
let $item8activity = $("#scheduleItem8Label")
let $saveBtn9 = $("#saveBtn9")
let $item9 = $("#scheduleItem9")
let $item9activity = $("#scheduleItem9Label")

//Create local storage for schedule items


// let $schedule1 = JSON.parse(localStorage.getItem("$schedule1")) || [];
// if ($schedule1 !== null) {
//     $item1.html(`<div id="scheduleItem1">${$schedule1}</div>`)
// }
let $schedule2 = JSON.parse(localStorage.getItem("$schedule2")) || [];
let $schedule3 = JSON.parse(localStorage.getItem("$schedule3")) || [];
let $schedule4 = JSON.parse(localStorage.getItem("$schedule4")) || [];
let $schedule5 = JSON.parse(localStorage.getItem("$schedule5")) || [];
let $schedule6 = JSON.parse(localStorage.getItem("$schedule6")) || [];
let $schedule7 = JSON.parse(localStorage.getItem("$schedule7")) || [];
let $schedule8 = JSON.parse(localStorage.getItem("$schedule8")) || [];
let $schedule9 = JSON.parse(localStorage.getItem("$schedule9")) || [];


//Pull items from local storage on loading    --  How do I get any new data to replace the old data now???
$item1activity.text($schedule1)
$item2activity.text($schedule2)   
$item3activity.text($schedule3) 
$item4activity.text($schedule4) 
$item5activity.text($schedule5)
$item6activity.text($schedule6)   
$item7activity.text($schedule7) 
$item8activity.text($schedule8)
$item9activity.text($schedule9)

//Set Save button event listeners for each activity $item
//If text is null, do this:  If not, remove item from storage
$saveBtn1.click(function(event){
    if ($item1activity.text() === null) {
        event.preventDefault()
        let $savedStuff1 = $item1.val()
        console.log($savedStuff1)
        $item1activity.text($savedStuff1)  //add div, p, whatever instead of .text, inner html
        $schedule1.push($savedStuff1)
        console.log($schedule1)
        localStorage.setItem("$schedule1", JSON.stringify($savedStuff1))
    } else {
        event.preventDefault()
        $item1activity.text("")        
        localStorage.removeItem("$schedule1")
                                                 //need to finish getting the new value to pop up if user changes schedule.  Also change label to div or p tag.
        
        let $savedStuff1 = $item1.val()
        console.log($savedStuff1)
        $item1activity.text($savedStuff1)
        $schedule1.push($savedStuff1)
        console.log($schedule1)
        localStorage.setItem("$schedule1", JSON.stringify($savedStuff1))

    }
})
$saveBtn2.click(function(event){
    event.preventDefault()
    let $savedStuff2 = $item2.val()
    console.log($savedStuff2)
    $item2activity.text($savedStuff2)
    $schedule2.push($savedStuff2)
    console.log($schedule2)
    localStorage.setItem("$schedule2", JSON.stringify($savedStuff2))
    
})
$saveBtn3.click(function(event){
    event.preventDefault()
    let $savedStuff3 = $item3.val()
    console.log($savedStuff3)
    $item3activity.text($savedStuff3)
    $schedule3.push($savedStuff3)
    console.log($schedule3)
    localStorage.setItem("$schedule3", JSON.stringify($savedStuff3))
    
})
$saveBtn4.click(function(event){
    event.preventDefault()
    let $savedStuff4 = $item4.val()
    console.log($savedStuff4)
    $item4activity.text($savedStuff4)
    $schedule4.push($savedStuff4)
    console.log($schedule4)
    localStorage.setItem("$schedule4", JSON.stringify($savedStuff4))
    
})
$saveBtn5.click(function(event){
    event.preventDefault()
    let $savedStuff5 = $item5.val()
    console.log($savedStuff5)
    $item5activity.text($savedStuff5)
    $schedule5.push($savedStuff5)
    console.log($schedule5)
    localStorage.setItem("$schedule5", JSON.stringify($savedStuff5))
    
})
$saveBtn6.click(function(event){
    event.preventDefault()
    let $savedStuff6 = $item6.val()
    console.log($savedStuff6)
    $item6activity.text($savedStuff6)
    $schedule6.push($savedStuff6)
    console.log($schedule6)
    localStorage.setItem("$schedule6", JSON.stringify($savedStuff6))
    
})
$saveBtn7.click(function(event){
    event.preventDefault()
    let $savedStuff7 = $item7.val()
    console.log($savedStuff7)
    $item7activity.text($savedStuff7)
    $schedule7.push($savedStuff7)
    console.log($schedule7)
    localStorage.setItem("$schedule7", JSON.stringify($savedStuff7))
    
})
$saveBtn8.click(function(event){
    event.preventDefault()
    let $savedStuff8 = $item8.val()
    console.log($savedStuff8)
    $item8activity.text($savedStuff8)
    $schedule8.push($savedStuff8)
    console.log($schedule8)
    localStorage.setItem("$schedule8", JSON.stringify($savedStuff8))
    
})
$saveBtn9.click(function(event){
    event.preventDefault()
    let $savedStuff9 = $item9.val()
    console.log($savedStuff9)
    $item9activity.text($savedStuff9)
    $schedule9.push($savedStuff9)
    console.log($schedule9)
    localStorage.setItem("$schedule9", JSON.stringify($savedStuff9))
    
})


