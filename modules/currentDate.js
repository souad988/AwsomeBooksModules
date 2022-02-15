import {DateTime} from '.././node_modules/luxon/build/es6/luxon.js';

export default function displayCurrentDate(dateContainer) {
  setInterval(() => {
    dateContainer.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
}
