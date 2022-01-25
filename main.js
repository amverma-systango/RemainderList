
// Primary clock logic

let mainClock = document.getElementById("main-clock");
let reminders = []
let currentDate;

setInterval(function () {
	currentDate = new Date();
	mainClock.innerText = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
}, 1000);

// Primary clock logic ends






// set Reminder logic

let SetReminderTimeHours = document.getElementById("SetReminderTimeHours");
let SetReminderTimeHoursInnerStuff = "";

let SetReminderTimeMinutes = document.getElementById("SetReminderTimeMinutes");
let SetReminderTimeMinutesInnerStuff = "";

for(let i=0; i<=24; i++){
	SetReminderTimeHoursInnerStuff = SetReminderTimeHoursInnerStuff+`<option value="${i}">${i}</option>`;
}

for(let i=0; i<=60; i++){
	SetReminderTimeMinutesInnerStuff = SetReminderTimeMinutesInnerStuff+`<option value="${i}">${i}</option>`;
}

SetReminderTimeHours.innerHTML = SetReminderTimeHoursInnerStuff;
SetReminderTimeMinutes.innerHTML = SetReminderTimeMinutesInnerStuff;

function AddReminder(){
	let reminderToSet = {
		"timeWhenReminderSet": (currentDate.getHours()*60)+currentDate.getMinutes(),
		"intervalTime": parseInt((document.getElementById("SetReminderTimeHours").value)*60)+parseInt(document.getElementById("SetReminderTimeMinutes").value),
		"message": document.getElementById("reminderMessage").value,
		"isCancle": 0,
	}

	// console.log(reminderToSet);
	reminders.push(reminderToSet);
	console.log(reminders);

	showAllReminder();

}

// set Reminder logic ends


// show Reminder logic

function showAllReminder(){
	allReminderDisplayBox = document.getElementById("reminderListBox");
	allReminderDisplayBox.innerHTML = "";

	/*
	allReminderDisplayBox.innerHTML = allReminderDisplayBoxInnerStuff+"<b>bhosadike</b>";
	allReminderDisplayBoxInnerStuff = allReminderDisplayBoxInnerStuff+ reminders.length;

	*/


	for(let i = 0; i<reminders.length; i++)
	{
		

		allReminderDisplayBox.innerHTML = allReminderDisplayBox.innerHTML +`<div class="addedRemainderListItem rounded-border col-12 mx-0 my-2 p-2">
          ${reminders[i]["message"]}<br>
          time interval :${Math.floor(reminders[i]["intervalTime"]/60)}hr${reminders[i]["intervalTime"]%60}min  
        </div>`;
	}

	console.log(reminders.length);

}

// show Reminder logic ends





/*
total seconds in a day - 86400
*/

