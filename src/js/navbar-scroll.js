var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

//mouseMove
// const mouseMove = (event) => {
//     let x = event.clientX;
//     let y = event.clientY;
//     if(y < 100) {
//       document.getElementById("navbar").style.top = "0";
//     console.log(x, y);
// }
// }

// export default mouseMove;