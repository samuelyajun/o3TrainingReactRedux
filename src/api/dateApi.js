import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const date = [
  {
    date: new Date()
  }
];

//This would be performed on the server in a real app. Just stubbing in.

class DateApi {
  static getCurrentDate() {
    const testDate = new Date();
    const date = [
      {
        date: new Date()
      }
    ];
    console.log("in DateApi, testdate: " + testDate.toString());
    console.log("in DateApi, date: " + date[0].date.toString());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       // resolve(date[0].date.toString());
       resolve(Object.assign([], date));
      }, delay);
    });
  }
}

export default DateApi;
