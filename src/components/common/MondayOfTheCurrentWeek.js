import React from 'react';

const GetFormattedDate = () =>  {
	  var date = new Date();

  	  date.setDate(date.getDate() - (date.getDay() + 6) % 7);
	  var year = date.getFullYear();
	  var month = (1 + date.getMonth()).toString();
	  var day = date.getDate().toString();
	  day = day.length > 1 ? day : '0' + day;

  	  return month + '/' + day + '/' + year;
};	

const MondayOfTheCurrentWeek = ({currentDate}) => {
		var formattedCurrentDate=''; 
		if (currentDate ==='') {
			formattedCurrentDate = GetFormattedDate();
		} else {
            formattedCurrentDate = currentDate;
            console.log("currentDate:" +currentDate);
        }

		return (
			  <span>{formattedCurrentDate}</span>
		);
};

export default MondayOfTheCurrentWeek;



