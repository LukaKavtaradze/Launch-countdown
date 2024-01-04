// let days = document.getElementById("days")
// let hours = document.getElementById("hours")
// let minutes = document.getElementById("minutes")
// let seconds = document.getElementById("seconds")


let deadline = new Date("apr 24, 2024  00:00:00").getTime();

let countdown = setInterval(() => {
  const currentdate = new Date().getTime();

  let time = deadline - currentdate;

  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  console.log(days);

  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor(
                    (time % (1000 * 60)) / 1000
                );

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (time < 0) {
    clearInterval(countdown);
    let birthday = document.getElementById("birthday")
    birthday.style.display = "flex"
  }
}, 1000);
