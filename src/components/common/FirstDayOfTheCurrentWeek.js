import React from 'react';

const GetFormattedDate = () =>  {
	  var date = new Date();
	  var year = date.getFullYear();
	  var month = (1 + date.getMonth()).toString();
	  var day = date.getDate().toString();
	  day = day.length > 1 ? day : '0' + day;
	  return month + '/' + day + '/' + year;
};	

const FirstDayOfTheCurrentWeek = ({currentDate}) => {
		currentDate = GetFormattedDate();
		return (
			  <span>{currentDate}</span>
		);
};

export default FirstDayOfTheCurrentWeek;



