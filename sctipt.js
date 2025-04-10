// function changecolor(event) {
//    document.querySelector(".send-email").addEventListener("click");
// }

// let slideUp = (e, t = 500, s, d) => {
//       (e.style.transitionProperty = "height, margin, padding"),
//          (e.style.transitionDuration = t + "ms"),
//          (e.style.boxSizing = "border-box"),
//          (e.style.height = e.offsetHeight + "px"),
//          e.offsetHeight,
//          (e.style.overflow = "hidden"),
//          (e.style.height = 0),
//          (e.style.paddingTop = 0),
//          (e.style.paddingBottom = 0),
//          (e.style.marginTop = 0),
//          (e.style.marginBottom = 0),
//          window.setTimeout(() => {
//             (e.style.display = "none"),
//                e.style.removeProperty("height"),
//                e.style.removeProperty("padding-top"),
//                e.style.removeProperty("padding-bottom"),
//                e.style.removeProperty("margin-top"),
//                e.style.removeProperty("margin-bottom"),
//                e.style.removeProperty("overflow"),
//                e.style.removeProperty("transition-duration"),
//                e.style.removeProperty("transition-property");
//          }, t);
//    },
//    slideDown = (e, t = 500, s, d) => {
//       e.style.removeProperty("display");
//       let o = window.getComputedStyle(e).display;
//       "none" === o && (o = "block"), (e.style.display = o);
//       let r = e.offsetHeight;
//       (e.style.overflow = "hidden"),
//          (e.style.height = 0),
//          (e.style.paddingTop = 0),
//          (e.style.paddingBottom = 0),
//          (e.style.marginTop = 0),
//          (e.style.marginBottom = 0),
//          e.offsetHeight,
//          (e.style.boxSizing = "border-box"),
//          (e.style.transitionProperty = "height, margin, padding"),
//          (e.style.transitionDuration = t + "ms"),
//          (e.style.height = r + "px"),
//          e.style.removeProperty("padding-top"),
//          e.style.removeProperty("padding-bottom"),
//          e.style.removeProperty("margin-top"),
//          e.style.removeProperty("margin-bottom"),
//          window.setTimeout(() => {
//             e.style.removeProperty("height"),
//                e.style.removeProperty("overflow"),
//                e.style.removeProperty("transition-duration"),
//                e.style.removeProperty("transition-property");
//          }, t);
//    };
// var slideToggle = (e, t = 500, s, d) =>
//    "none" === window.getComputedStyle(e).display
//       ? slideDown(e, t, s, d)
//       : slideUp(e, t, s, d);

// let changes = document.querySelectorAll(".send-email");

// let sliders = document.querySelectorAll(".FAQ-card");
// console.log(sliders);
// let slides = document.querySelector(".FAQ-dics");

// sliders.forEach(function (slider) {
//    let panel = slider.querySelector(".FAQ-disc");
//    console.log(panel);
//    slider.addEventListener("click", function (e) {
//       slider.classList.toggle("active");
//       slideToggle(panel, 500);
//    });
// });

// changes.forEach(function (change) {
//    change.onclick = function (y) {
//       change.classList.add("button-active");
//    };
// });

let slider = new Siema({
   selector: ".slides-content",
   duration: 200,
   easing: "ease-out",
   perPage: {
      664: 2,
      1024: 3,
   },
   startIndex: 0,
   draggable: true,
   multipleDrag: true,
   threshold: 20,
   loop: false,
   rtl: false,
   onInit: () => {},
   onChange: () => {},
});

document.querySelector(".prev").addEventListener("click", () => slider.prev());
document.querySelector(".next").addEventListener("click", () => slider.next());
