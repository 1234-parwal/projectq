// import React, { Component, useState } from 'react'
// import {
//     Box,
//     SelectorDiv,
//     Value,
//     Text,
//     Header,
//     LeftDiv,
//     RightDiv,
//     MonthName,
//     IconsDiv,
//     Boundary,
// } from './styled';
// import SlotsAvailable from './components/SlotsAvailable';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { ReactComponent as CalendarIcon } from 'Assets/CalendarIcon.svg';

// const CustomInput = ({ value, onClick, text }) => (
//     <SelectorDiv onClick={onClick}>
//         <Value>
//             {value ? (
//                 moment(value).format('MMMM Do YYYY, h:mm:ss a')
//             ) : (
//                 <Text>{text}</Text>
//             )}
//         </Value>
//         <IconsDiv>
            
//             <Boundary />
//             <CalendarIcon />
//         </IconsDiv>
//     </SelectorDiv>
// );

// function App  () {
//   // render() {
//     const [selectedDate, setSelectedDate]= useState (null)
    
//   return (
//     <div className="App">
//       {/* <Box> */}
      
//       <DatePicker 
//         selected = {selectedDate} onChange = {date=> setSelectedDate(date)}
//         dateFormat='MMMM d, yyyy'
//         minDate={new Date()}
//         filterDate={date => date.getDay()!== 0}
//         showMonthDropdown
//         useShortMonthInDropdown
//         isClearable
//         placeholderText="Select Date"
//         // <CalendarIcon />
        
//       > 
//       </DatePicker> 
//       {/* </Box> */}
//       <br></br>
        
//       <br></br>
//       <SlotsAvailable time ="3:00 pm" noofslots="10 Available slots"/>
//       <SlotsAvailable time ="3:30 pm" noofslots="10 Available slots"/> 
//       <SlotsAvailable time ="4:00 pm" noofslots="10 Available slots"/>
//       <SlotsAvailable time ="4:30 pm" noofslots="10 Available slots"/>
//       </div>
      
//     )
//   // }
// }

// export default ;