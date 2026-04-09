// import { useEffect } from "react";
// import { usePage } from "@inertiajs/react";

// export default function CloseFlashMessages() {
//   const { flash } = usePage();

//   useEffect(() => {
//     if (!flash || Object.keys(flash).length === 0) return;

//     const timer = setTimeout(() => {
//       const alerts = document.querySelectorAll(".alert");
//       alerts.forEach((alert) => {
//         alert.classList.add("animate__fadeOut");
//         setTimeout(() => {
//           alert.style.display = "none";
//         }, 500);
//       });
//     }, 2500); // disappear after 2.5s

//     return () => clearTimeout(timer);
//   }, [flash]); // runs every time flash changes

//   return null;
// }
