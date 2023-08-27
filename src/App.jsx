import { useState } from 'react'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import './App.css'

const App = () => {
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    date: ''
  })

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    dateW: ''
  })

  const [osubmitButtonClicked, setOsubmitButtonClicked] = useState(false);
  const [tsubmitButtonClicked, setTsubmitButtonClicked] = useState(false);
  const [thsubmitButtonClicked, setThsubmitButtonClicked] = useState(false);

  const generalChange = (fieldName, e) => {;
    setGeneral(prevState => ({
        ...prevState,
        [fieldName]: e.target.value
      }));
  };

  const educationChange = (fieldName, e) => {
    setEducation(prevState => ({
      ...prevState,
      [fieldName]: e.target.value
    }));
  };

  const experienceChange = (fieldName, e) => {
    setExperience(prevState => ({
      ...prevState,
      [fieldName]: e.target.value
    }));
  };

  const formSubmit1 = (e) => {
    e.preventDefault();
    setOsubmitButtonClicked(true);
  }

  const formSubmit2 = (e) => {
    e.preventDefault();
    setTsubmitButtonClicked(true);
  }

  const formSubmit3 = (e) => {
    e.preventDefault();
    setThsubmitButtonClicked(true);
  }

  return (
    <div className='main'>
      <div className='general-info'>
        <p>General info</p>
        <form onSubmit={formSubmit1}>
          <label htmlFor='nameInput'>Enter name:</label>
          <input
            type='text'
            id='nameInput'
            onChange={(e) => generalChange('name', e)}
          />
          <label htmlFor='emailInput'>Enter email:</label>
          <input
            type='text'
            id='emailInput'
            onChange={(e) => generalChange('email', e)}
          />
          <label htmlFor='phoneInput'>Enter phone:</label>
          <input
            type='text'
            id='phoneInput'
            onChange={(e) => generalChange('phone', e)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div> 
      <div className='education'>
        <p>Education</p>
        <form onSubmit={formSubmit2}>
        <label htmlFor="schoolInput">School name:</label>
          <input
            type='text'
            id='schoolInput'
            onChange={(e) => educationChange('school', e)}
          />
          <label htmlFor="degreeInput">Degree:</label>
          <input
            type='text'
            id='degreeInput'
            onChange={(e) => educationChange('degree', e)}
          />
          <label htmlFor="dateInput">Date of education:</label>
          <input
            type='text'
            id='dateInput'
            onChange={(e) => educationChange('date', e)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='experience'>
        <p>Experience</p>
        <form onSubmit={formSubmit3}>
        <label htmlFor="companyInput">Company name:</label>
          <input
            type='text'
            id='companyInput'
            onChange={(e) => experienceChange('company', e)}
          />
          <label htmlFor="positionInput">Position:</label>
          <input
            type='text'
            id='positionInput'
            onChange={(e) => experienceChange('position', e)}
          />
          <label htmlFor="dateWInput">Date of work:</label>
          <input
            type='text'
            id='dateWInput'
            onChange={(e) => experienceChange('dateW', e)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='cv-example'>
        <General general={osubmitButtonClicked ? general : null}/>
        <Education education={tsubmitButtonClicked ? education : null}/>
        <Experience experience={thsubmitButtonClicked ? experience : null}/>
      </div>
    </div>
  )
}

export default App
