import logo from './logo.svg';
import './App.css';
//import useState
import React, {useState} from 'react';
//import Form
import Form from './Components/Form'

//details that the form will have
const initialFormDetails = {
  memberName: "", //TEXT INPUT
  memberEmail:"", //TEXT INPUT
  memberRole:"",  //DROPDOWN 
}

function App() {
  //STEP 1
  // Give the state variable you just declared a default value.
  const [teamMembers, setTeamMember] = useState([]); 

  //this wil hold the all values which enterd in the form 
  //and then set back to initial deatils
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  
  const updateForm = (inputName, inputValue) => {
    setFormDetails({
      [inputName]: inputValue
    });
  };

  const submitForm = () => {
    const newTeamMember = {
      memberName: formDetails.memberName.trim(),
      memberEmail: formDetails.memberEmail.trim(),
      memberRole: formDetails.memberRole.trim(),
    };

    if (!newTeamMember.memberName || !newTeamMember.memberEmail || !newTeamMember.memberRole)
    {
      return
    };

    setTeamMember([...teamMembers, newTeamMember]);
    setFormDetails(initialFormDetails);
  }

  //STEP 2
  return(
    <div className="App">
      <h1>Team Member App</h1>
      <Form 
        details={formDetails}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  )




  /*THIS WAS GIVEN*/
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
