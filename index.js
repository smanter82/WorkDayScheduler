//connect with Moment for times, color-code time blocks to indicate whether it is in the past, present, or future, and update ReadMe file

//Set current date and time in header
let currentDay = document.getElementById("currentDay")
let m = moment().format('dddd, MMMM Do YYYY h:mm:ss a')
currentDay.textContent = m
//javaScript get time
let currentTime = parseInt(moment().format('H'))
console.log(currentTime)

// function activityBackground(element){
//     const timeVal = parseInt(element.attr('#times1'))
//     if (timeVal < currentTime) {
//         element.css('backgroundColor', 'red')
//     } else if (timeVal > currentTime) {
//         element.css('backgroundColor', 'lightBlue')
//     } else {
//         element.css('backGroundColor', 'green')
//     }
// }

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
let $schedule1 = JSON.parse(localStorage.getItem("$storedStuff1"))
let $schedule2 = JSON.parse(localStorage.getItem("$storedStuff2")) 
let $schedule3 = JSON.parse(localStorage.getItem("$storedStuff3"))
let $schedule4 = JSON.parse(localStorage.getItem("$storedStuff4"))
let $schedule5 = JSON.parse(localStorage.getItem("$storedStuff5"))
let $schedule6 = JSON.parse(localStorage.getItem("$storedStuff6"))
let $schedule7 = JSON.parse(localStorage.getItem("$storedStuff7"))
let $schedule8 = JSON.parse(localStorage.getItem("$storedStuff8"))
let $schedule9 = JSON.parse(localStorage.getItem("$storedStuff9"))


//Pull items from local storage on loading
$item1activity.text($schedule1)
$item2activity.text($schedule2)   
$item3activity.text($schedule3) 
$item4activity.text($schedule4) 
$item5activity.text($schedule5)
$item6activity.text($schedule6)   
$item7activity.text($schedule7) 
$item8activity.text($schedule8)
$item9activity.text($schedule9)

//Set Save button event listeners for each activity $item                       //Why are the save buttons changing text now??
$saveBtn1.click(function(event){
        event.preventDefault()
        $("#scheduleItem1Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff1 = $item1.val()
        //foreach
          var a = $("button");
          $("#scheduleItem1Label").attr("data-name", $savedStuff1);
          $("#scheduleItem1").text($savedStuff1);
          $("#scheduleItemLabel1").append(a);
        console.log($savedStuff1)
        
        localStorage.setItem("$storedStuff1", JSON.stringify($savedStuff1))

})
   
$saveBtn2.click(function(event){
    event.preventDefault()
    $("#scheduleItem2Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff2 = $item2.val()
        //foreach
          var a = $("button");
          $("#scheduleItem2Label").attr("data-name", $savedStuff2);
          $("#scheduleItem2").text($savedStuff2);
          $("#scheduleItemLabel2").append(a);
        console.log($savedStuff2)
        
        localStorage.setItem("$storedStuff2", JSON.stringify($savedStuff2))
    
})
$saveBtn3.click(function(event){
    event.preventDefault()
    $("#scheduleItem3Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff3 = $item3.val()
        //foreach
          var a = $("button");
          $("#scheduleItem3Label").attr("data-name", $savedStuff3);
          $("#scheduleItem3").text($savedStuff3);
          $("#scheduleItemLabel3").append(a);
        console.log($savedStuff3)
        
        localStorage.setItem("$storedStuff3", JSON.stringify($savedStuff3))
    
})
$saveBtn4.click(function(event){
    event.preventDefault()
    $("#scheduleItem4Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff4 = $item4.val()
        //foreach
          var a = $("button");
          $("#scheduleItem4Label").attr("data-name", $savedStuff4);
          $("#scheduleItem4").text($savedStuff4);
          $("#scheduleItemLabel4").append(a);
        console.log($savedStuff4)
        
        localStorage.setItem("$storedStuff4", JSON.stringify($savedStuff4))
    
})
$saveBtn5.click(function(event){
    event.preventDefault()
    $("#scheduleItem5Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff5 = $item5.val()
        //foreach
          var a = $("button");
          $("#scheduleItem5Label").attr("data-name", $savedStuff5);
          $("#scheduleItem5").text($savedStuff5);
          $("#scheduleItemLabel5").append(a);
        console.log($savedStuff5)
        
        localStorage.setItem("$storedStuff5", JSON.stringify($savedStuff5))
    
})
$saveBtn6.click(function(event){
    event.preventDefault()
    $("#scheduleItem6Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff6 = $item6.val()
        //foreach
          var a = $("button");
          $("#scheduleItem6Label").attr("data-name", $savedStuff6);
          $("#scheduleItem6").text($savedStuff6);
          $("#scheduleItemLabel6").append(a);
        console.log($savedStuff6)
        
        localStorage.setItem("$storedStuff6", JSON.stringify($savedStuff6))
    
})
$saveBtn7.click(function(event){
    event.preventDefault()
    $("#scheduleItem7Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff7 = $item7.val()
        //foreach
          var a = $("button");
          $("#scheduleItem7Label").attr("data-name", $savedStuff7);
          $("#scheduleItem7").text($savedStuff7);
          $("#scheduleItemLabel7").append(a);
        console.log($savedStuff7)
        
        localStorage.setItem("$storedStuff7", JSON.stringify($savedStuff7))
    
})
$saveBtn8.click(function(event){
    event.preventDefault()
    $("#scheduleItem8Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff8 = $item8.val()
        //foreach
          var a = $("button");
          $("#scheduleItem8Label").attr("data-name", $savedStuff8);
          $("#scheduleItem8").text($savedStuff8);
          $("#scheduleItemLabel8").append(a);
        console.log($savedStuff8)
        
        localStorage.setItem("$storedStuff8", JSON.stringify($savedStuff8))
    
})
$saveBtn9.click(function(event){
    event.preventDefault()
    $("#scheduleItem9Label").empty();
        // let activity = $(this).attr('data-name')
        let $savedStuff9 = $item9.val()
        //foreach
          var a = $("button");
          $("#scheduleItem9Label").attr("data-name", $savedStuff9);
          $("#scheduleItem9").text($savedStuff9);
          $("#scheduleItemLabel9").append(a);
        console.log($savedStuff9)
        
        localStorage.setItem("$storedStuff9", JSON.stringify($savedStuff9))
    
})


