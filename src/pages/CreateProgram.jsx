import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Step2Builder from '../components/CreateProgram/Step2Builder';
import Step1Basic from '../components/CreateProgram/Step1Basic';

const CreateProgram = () => {

  const [step, setStep] = useState(1);

  const [programData, setProgramData] = useState({
    title: "",
    description: "",
    duration: "",
    goal: "",
    level: "",
    sessions: 0,
    time: "",
    days: []
  })

  console.log("programData", programData, "step", step)

  return (
    <div>
      <Navbar />

      <div className='px-4'>
        {step === 1 && (
          <Step1Basic
            programData={programData}
            setProgramData={setProgramData}
            nextStep={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <Step2Builder
            programData={programData}
            setProgramData={setProgramData}
            prevStep={() => setStep(1)}
          />
        )}
      </div>
    </div>
  )
}

export default CreateProgram
