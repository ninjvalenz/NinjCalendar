
monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
weeksArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

currentDate = new Date();

var monthLabelElement = document.getElementById('monthLabel');
var buttonLeftElement = document.getElementById('calendarNavLeft');
var buttonRightElement = document.getElementById('calendarNavRight');
var calendarContentElement = document.getElementById('calendarTable');
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDay();
var currentYear = currentDate.getFullYear();
var currentMonthDays = new Date(currentYear, (currentMonth + 1), 0).getDate();
var currentMonthStartWeek = new Date(currentYear, (currentMonth), 1).getDay();
var currentMonthLastWeek = new Date(currentYear, (currentMonth + 1), 0).getDay();

Initializations(buttonLeftElement, "Left");
Initializations(buttonRightElement, "Right");

createCalendar();

function Initializations(buttonElement, actionType){

    if(buttonElement.addEventListener){
        buttonElement.addEventListener("click", createCalendar, false);
        buttonElement.action = actionType;
    }
}

function createCalendar(evt){

   var m_index = currentMonth;
   var actionToDo = null;

    if(evt != null)
        actionToDo = evt.target.action;
    
    if(actionToDo != null){

        if(actionToDo == "Left"){
            if(currentMonth > 0)
                m_index = currentMonth - 1;

            currentMonth = m_index;
        }
        else{

            if(currentMonth < 11){
                m_index = currentMonth + 1;
                currentMonth = m_index;
            }
        }
    }

    monthLabelElement.innerHTML = monthsArray[m_index] + " " + currentDate.getFullYear();
    addWeeks();
    addDays();
    
}

function addWeeks(){
     var htmlString = "<tr>";

    for(var x = 0; x < weeksArray.length; x++){
       htmlString = htmlString + "<td>" + weeksArray[x] + "</td>";
       
    }
    
    htmlString = htmlString + "</tr>";
    calendarContentElement.innerHTML = htmlString;
}

function addDays(){
     var daysDisplayed = 1;
     var continuePrinting = 0;

    while(daysDisplayed < currentMonthDays){
        var htmlString = "<tr>";

        for(var x = 0; x < weeksArray.length; x++){
                if(daysDisplayed <= currentMonthDays){
                    if(x == currentMonthStartWeek)
                        continuePrinting = 1;

                    var cellValue = "&nbsp;";

                    if(continuePrinting == 1){
                        cellValue = daysDisplayed;
                        daysDisplayed = daysDisplayed + 1;
                    }

                    htmlString = htmlString + "<td>" + cellValue + "</td>";
                }
                else
                    break;
            }

        htmlString = htmlString + "</tr>";
        calendarContentElement.innerHTML = calendarContentElement.innerHTML + htmlString;
    }
}








