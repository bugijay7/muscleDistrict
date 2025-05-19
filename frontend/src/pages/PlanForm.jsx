import React, { useState } from 'react';

function PlanForm() {
  const [plan, setPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/save-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // ✅ Important to send cookies for session
        body: JSON.stringify({ plan }), // ✅ No more username here
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Plan saved successfully: ${data.plan.plan_type}`);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error saving plan:', error);
      alert('Failed to save plan');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Select Your Plan</h2>

      <div className="space-y-4">
        {['Basic', 'Platinum', 'Elite'].map((option) => (
          <label key={option} className="flex items-center space-x-3">
            <input
              type="radio"
              name="plan"
              value={option}
              checked={plan === option}
              onChange={(e) => setPlan(e.target.value)}
              className="form-radio text-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={!plan}
        className={`mt-6 w-full py-2 px-4 text-white font-semibold rounded ${
          plan ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Save Plan
      </button>
    </form>
  );
}

export default PlanForm;
