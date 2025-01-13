import React, { useState } from 'react';

const ActivityTracker = () => {
  const [steps, setSteps] = useState('');
  const [exerciseTime, setExerciseTime] = useState('');

  return (
    <div style={styles.container}>
      <h2>Activity Tracker</h2>
      <div>
        <label>Steps Walked: </label>
        <input
          type="number"
          placeholder="Enter steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <label>Exercise Time (mins): </label>
        <input
          type="number"
          placeholder="Enter minutes"
          value={exerciseTime}
          onChange={(e) => setExerciseTime(e.target.value)}
          style={styles.input}
        />
      </div>
      <p>
        You walked <strong>{steps || 0}</strong> steps and exercised for{' '}
        <strong>{exerciseTime || 0}</strong> minutes today.
      </p>
    </div>
  );
};

const styles = {
  container: { margin: '20px', padding: '10px', border: '1px solid #ddd' },
  input: { margin: '5px 0', padding: '5px', width: '200px' },
};

export default ActivityTracker;
