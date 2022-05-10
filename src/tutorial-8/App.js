import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import PersonalInfoForm from './forms/PersonalInfoForm';
import AddressForm from './forms/AddressForm';
import Result from './forms/Result';

import './App.css';

function App() {
  const [formValues, setFormValues] = React.useState({});
  const navigate = useNavigate();

  function nextStep(name) {
    navigate(name);
  }

  function onChangeFormValues(values) {
    setFormValues(prev => ({
      ...prev,
      ...values
    }))
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<PersonalInfoForm nextStep={nextStep} onChangeFormValues={onChangeFormValues} />} />
          <Route path="/address" element={<AddressForm nextStep={nextStep} onChangeFormValues={onChangeFormValues} />} />
          <Route path="/result" element={<Result formValues={formValues} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;