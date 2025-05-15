let noBox = document.querySelector(".no");

noBox.addEventListener("mouseover", () => {
    let x = Math.floor(Math.random() * 10) * 20; // Random multiple of 20
    let y = Math.floor(Math.random() * 10) * 20;
    noBox.style.transform = `translate(${x}px, ${y}px)`;
});


let yesBox = document.querySelector(".yes")
yesBox.addEventListener("click", ()=>{
    document.querySelector("h1").innerText = "I love You too.."

})

let resetBox = document.querySelector("#reset")
resetBox.addEventListener("click", ()=>{
    location.reload();
})

navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=9a3018a5590e4040add16d228687b0a8`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0].formatted); // Human-readable address
    alert(`your address : ${data.results[0].formatted}`)
  })
  .catch(error => {
    console.error("Error:", error);
  });

    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );
  