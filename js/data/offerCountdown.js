// let day = new Date("02/02/2026 00:00:00").getTime();
// // console.log("total time date :", day);

// function CalculateTime() {
//   let now = new Date().getTime();
//   // console.log("today time :", now);
//   let timeRemaining = day - now;
//   // console.log("remaining time :", timeRemaining);

//   let date = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//   // console.log(date);
//   let hours = Math.floor(
//     (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   // console.log(hours);
//   let minute = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 24));
//   // console.log(minute);
//   let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
//   // console.log(seconds);

//   let ofDate = (document.getElementById("ofDate").innerHTML = date
//     .toString()
//     .padStart(2, 0));
//   console.log(ofDate);

//   let ofHour = (document.getElementById("ofHour").innerHTML = hours
//     .toString()
//     .padStart(2, 0));
//   // console.log(ofHour);

//   let ofMinute = (document.getElementById("ofMinute").innerHTML = minute
//     .toString()
//     .padStart(2, 0));
//   // console.log(ofMinute);

//   let ofSecond = (document.getElementById("ofSecond").innerHTML = seconds
//     .toString()
//     .padStart(2, 0));
//   // console.log(ofSecond);

//   function Timer() {
//     setInterval(CalculateTime, 1000);
//   }
//   Timer();
// }
// CalculateTime();
