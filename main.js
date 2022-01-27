
// Primary clock logic

let mainClock = document.getElementById("main-clock");
let reminders = []
let currentDate;
let currentTimeInMinutes;

setInterval(function () {
	currentDate = new Date();
	mainClock.innerText = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
	currentTimeInMinutes = (currentDate.getHours()*60)+currentDate.getMinutes();

}, 1000);

setInterval(function () {
	//check for any reminder
	console.log("intervval chala");

	for(let itr=0; itr<reminders.length; itr++){
		if( currentTimeInMinutes ===  reminders[itr]["nextReminderAt"] ){
			console.log(reminders[itr]["message"]+" "+reminders[itr]["nextReminderAt"]);

			reminders[itr]["nextReminderAt"] = currentTimeInMinutes + reminders[itr]["intervalTime"];
			console.log(reminders[itr]["nextReminderAt"]);

			// show notification logic
			notifiactionListBox = document.getElementById("notifiactionListBox");
			notifiactionListBox.innerHTML = `<div class="alert alert-warning" role="alert"><b>${reminders[itr]["message"]}<b>
			<br>
			<i>reminded at:</i> ${Math.floor(reminders[itr]["nextReminderAt"]/60)}hr${reminders[itr]["nextReminderAt"]%60}min
			</div>
			`+notifiactionListBox.innerHTML;

			var audio = new Audio('./asset/bell.mp3');
			audio.play();
			// show notification logic ends
		}
	}

	showAllReminder();
}, 60000);

// Primary clock logic ends






// set Reminder logic

let SetReminderTimeHours = document.getElementById("SetReminderTimeHours");
let SetReminderTimeHoursInnerStuff = "";

let SetReminderTimeMinutes = document.getElementById("SetReminderTimeMinutes");
let SetReminderTimeMinutesInnerStuff = "";

for(let i=0; i<=24; i++){
	SetReminderTimeHoursInnerStuff = SetReminderTimeHoursInnerStuff+`<option value="${i}">${i}</option>`;
}

for(let i=1; i<=60; i++){
	SetReminderTimeMinutesInnerStuff = SetReminderTimeMinutesInnerStuff+`<option value="${i}">${i}</option>`;
}

SetReminderTimeHours.innerHTML = SetReminderTimeHoursInnerStuff;
SetReminderTimeMinutes.innerHTML = SetReminderTimeMinutesInnerStuff;

function AddReminder(){
	let reminderToSet = {
		"timeWhenReminderSet": currentTimeInMinutes,
		"intervalTime": parseInt((document.getElementById("SetReminderTimeHours").value)*60)+parseInt(document.getElementById("SetReminderTimeMinutes").value),
		"nextReminderAt": currentTimeInMinutes + parseInt((document.getElementById("SetReminderTimeHours").value)*60)+parseInt(document.getElementById("SetReminderTimeMinutes").value),
		"message": document.getElementById("reminderMessage").value,
		"isCancle": 0,
	}

	// console.log(reminderToSet);
	reminders.push(reminderToSet);
	// console.log(reminders);

	showAllReminder();

}

// set Reminder logic ends


// show Reminder logic

function showAllReminder(){
	allReminderDisplayBox = document.getElementById("reminderListBox");
	allReminderDisplayBox.innerHTML = "";

	for(let i = 0; i<reminders.length; i++)
	{
		

		allReminderDisplayBox.innerHTML = allReminderDisplayBox.innerHTML +`<div class="addedRemainderListItem rounded-border col-12 mx-0 my-2 p-2">
          ${reminders[i]["message"]}<br>
          reminder set on: ${Math.floor(reminders[i]["timeWhenReminderSet"]/60)}hr${reminders[i]["timeWhenReminderSet"]%60}min
          <br>
          time interval :${Math.floor(reminders[i]["intervalTime"]/60)}hr${reminders[i]["intervalTime"]%60}min
          <br>
          next reminder on :${Math.floor(reminders[i]["nextReminderAt"]/60)}hr${reminders[i]["nextReminderAt"]%60}min  
        </div>`;
	}

	//console.log(reminders.length);

}

// show Reminder logic ends



function showAllNotification(passedreminder){
	
}
// show notification logic ends






/*
total seconds in a day - 86400
*/

