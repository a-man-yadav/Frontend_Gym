import React from 'react'

const Step1Basic = ({ programData, setProgramData, nextStep }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sessions") {
      setProgramData({ ...programData, sessions: Number(value) });
    } else {
      setProgramData({ ...programData, [name]: value });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mx-auto mt-2 px-6 mb-1">
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-2 bg-[#E50914] rounded-full"
            style={{ width: "50%" }}
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <p className="text-xs text-right text-gray-300 mt-1">Step 1 of 2</p>
      </div>

      <div className='max-w-2xl mx-auto pt-6 pb-6 px-6 bg-black/30 rounded-2xl mt-6 text-white'>
        <h2 className='text-2xl md:text-3xl font-bold mb-2'>Create Program</h2>
        <label className='text-xs ml-1 text-gray-300'>Title</label>
        <input
          type="text"
          name="title"
          placeholder='e.g. Summer Shred'
          value={programData.title}
          onChange={handleChange}
          className='w-full mb-3 mt-1 p-1 rounded-lg bg-black border border-gray-700 placeholder:text-xs'
        />
        <label className='text-xs ml-1 text-gray-300'>Description</label>
        <textarea
          name="description"
          placeholder='A short description...'
          value={programData.description}
          onChange={handleChange}
          className='w-full mb-3 mt-1 p-1 rounded-lg bg-black border border-gray-700 placeholder:text-xs'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <label className='text-xs ml-1 text-gray-300'>Duration</label>
            <select
              name="duration"
              value={programData.duration}
              onChange={handleChange}
              className='w-full mt-1 p-2 rounded-lg bg-black border border-gray-700 text-sm text-gray-300'
            >
              <option value="">Select Duration</option>
              <option value="4 Weeks">4 Weeks</option>
              <option value="6 Weeks">6 Weeks</option>
              <option value="8 Weeks">8 Weeks</option>
              <option value="10 Weeks">10 Weeks</option>
              <option value="12 Weeks">12 Weeks</option>
              <option value="14 Weeks">14 Weeks</option>
              <option value="16 Weeks">16 Weeks</option>
            </select>
          </div>
          <div className='flex flex-col'>

            <label className='text-xs ml-1 text-gray-300'>Goals</label>
            <select name="goal"
              value={programData.goal}
              onChange={handleChange}
              className='w-full mt-1 p-2 rounded-lg bg-black border border-gray-700 text-sm text-gray-300'
            >
              <option value="">Select Goal</option>
              <option value="strength">strength</option>
              <option value="hypertrophy">hypertrophy</option>
              <option value="fat-loss">fat-loss</option>
              <option value="Weight-gain">Weight-gain</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='text-xs ml-1 text-gray-300'>Level</label>
            <select name="level"
              value={programData.level}
              onChange={handleChange}
              className='w-full mt-1 p-2 rounded-lg bg-black border border-gray-700 text-sm text-gray-300'>
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='text-xs ml-1 text-gray-300'>Number of Sessions</label>
            <select
              name="sessions"
              value={programData.sessions}
              onChange={handleChange}
              className='w-full mt-1 p-2 rounded-lg bg-black border border-gray-700 text-sm text-gray-300'
            >
              <option value={0}>Select sessions</option>
              <option value={3}>3 per week</option>
              <option value={4}>4 per week</option>
              <option value={5}>5 per week</option>
              <option value={6}>6 per week</option>
            </select>
          </div>

        </div>
        <div className='flex flex-col mt-7'>
          <label className='text-xs ml-1 text-gray-300'>Duration of Session</label>
          <select
            name="time"
            value={programData.time}
            onChange={handleChange}
            className='w-full mt-1 p-2 rounded-lg bg-black border border-gray-700 text-sm text-gray-300'
          >
            <option value="">Select time per session</option>
            <option value="30">30 mins</option>
            <option value="45">45 mins</option>
            <option value="60">60 mins</option>
            <option value="75">75 mins</option>
            <option value="90">90 mins</option>
          </select>

        </div>
        <div className="mt-6 text-right">
          <button
            onClick={nextStep}
            className="px-4 bg-[#E50914] py-2 rounded-lg text-white text-sm md:text-base hover:cursor-pointer hover:bg-[#b20710]"
          >
            Next Step →
          </button>
        </div>


      </div>


    </div>
  )
}

export default Step1Basic
