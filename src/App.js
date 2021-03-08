import React, { Component, useState } from 'react'
import logo from '/.logo.svg';
import SlotsAvailable from './components/SlotsAvailable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalenderIcon from './components/Calendar';
// import { ReactComponent as CalendarIcon } from '/Assets/CalendarIcon.svg';



function App  () {
  // render() {
    const [selectedDate, setSelectedDate]= useState (null)
    
  return (
    <div className = "App">  

      <DatePicker 
        selected = {selectedDate} onChange = {date=> setSelectedDate(date)}
        dateFormat = 'MMMM d, yyyy'
        minDate = {new Date()}
        filterDate = {date => date.getDay()!== 0}
        showMonthDropdown
        useShortMonthInDropdown
        isClearable
        placeholderText = "Select Date" CalendarIcon
        > 
      </DatePicker> 

      <br></br>
      <br></br>

      <SlotsAvailable time = "3:00 pm" noofslots="10 Available slots"/>
      <SlotsAvailable time = "3:30 pm" noofslots="10 Available slots"/> 
      <SlotsAvailable time = "4:00 pm" noofslots="10 Available slots"/>
      <SlotsAvailable time = "4:30 pm" noofslots="10 Available slots"/>
      </div>
      
    )
  // }
}

export default App;
