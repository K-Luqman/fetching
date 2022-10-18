// import React, { useState, useEffect } from 'react';
//
// const HomePage = () => {
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState([]);
//     const [activeName, setActiveName]= useState(null)
//
//     useEffect(() => {
//         setCount(0);
//         getNames();
//         // eslint-disable-next-line
//     }, []);
//
//     const handleNextItem = () => {
//         setActiveName(name[count + 1]);
//         setCount(count + 1);
//         console.log(name[count]);
//     };
//
//     const getNames = async () => {
//         const res = await fetch('/person');
//         const data = await res.json();
//         setName(data);
//         setActiveName(data[count]);
//     };
//
//     return activeName ? (
//         <div>
//             <button onClick={handleNextItem}>Next</button>
//             <span>{activeName.name}</span>
//         </div>
//     ) : null;
// };
//
// export default HomePage;