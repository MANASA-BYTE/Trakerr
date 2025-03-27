// // import React from 'react'

// // export default function Home() {
// //   return (
// //     <div>Home</div>
// //   )
// // }
// import '../styles/Home.css'; // Create a CSS file for styling

// export default function Home() {
//   return (
//     <div className="home-container">
//       <div className="project-description-box">
//         <h1>Welcome to My Project</h1>
//         <p>
//           This project is a demonstration of a modern web application built with React and React Router.
//           It includes features like user registration, login, and a responsive navigation bar. Feel free
//           to explore and interact with the application!
//         </p>
//       </div>
//     </div>
//   );
// }
import '../styles/Home.css'; // Ensure the correct import path

export default function Home() {
  return (
    <div className="home-container">
      <div className="project-description-box">
        <h1>Attendance Traker</h1>
        <p>
        Missing lectures is fun until attendance shortage starts haunting your dreams!"
        </p>
      </div>
    </div>
  );
}