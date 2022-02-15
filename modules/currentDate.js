import DateTime from "../node_modules/luxon/src/datetime.js";
export function displayCurrentDate (dateContainer){
setInterval(() => {
    dateContainer.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  },1000);
}