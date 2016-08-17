import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const ratingRanks = [
  {
    id: '1',
    rating: 'Ahead'
  },
  {
    id: '2',
    rating: 'On-Track'
  },
  {
    id: '1',
    rating: 'At Risk'
  }
];


class RatingRankApi {
  static getAllRatingRanks() {
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], ratingRanks));
      }, delay);
    });
  }
}

export default RatingRankApi;
