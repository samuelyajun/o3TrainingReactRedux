import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const teacherAids = [
  {
    id: 'christine-house',
    firstName: 'Christine',
    lastName: 'House'
  },
  {
    id: 'sam-allen',
    firstName: 'Sam',
    lastName: 'Allen'
  },
  {
    id: 'bo-wahlin',
    firstName: 'Bo',
    lastName: 'Wahlin'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (teacherAid) => {
  return teacherAid.firstName.toLowerCase() + '-' + teacherAid.lastName.toLowerCase();
};

class TeacherAidApi {
  static getAllTeacherAids() {
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], teacherAids));
      }, delay);
    });
  }
}

export default TeacherAidApi;
