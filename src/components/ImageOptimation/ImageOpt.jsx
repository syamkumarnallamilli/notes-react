// // OptimizedImageGallery.jsx
// import React from "react";
// import LazyLoad from "react-lazyload";
// import "./OptimizedImageGallery.css";

// const images = [
//   {
//     src: "/images/beach.webp",
//     alt: "Beach Sunset",
//     width: 300,
//     height: 200,
//   },
//   {
//     src: "/images/mountain.webp",
//     alt: "Mountain View",
//     width: 300,
//     height: 200,
//   },
//   {
//     src: "/images/forest.webp",
//     alt: "Green Forest",
//     width: 300,
//     height: 200,
//   },
//   // Add more images here
// ];

// export default function OptimizedImageGallery() {
//   return (
//     <div className="image-grid">
//       {images.map((img, index) => (
//         <LazyLoad key={index} height={200} offset={100} once>
//           <img
//             src={img.src}
//             alt={img.alt}
//             width={img.width}
//             height={img.height}
//             loading="lazy"
//             className="image-item"
//           />
//         </LazyLoad>
//       ))}
//     </div>
//   );
// }
