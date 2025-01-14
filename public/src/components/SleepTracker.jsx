import React, { useState } from 'react';

const SleepTracker = () => {
  const [hours, setHours] = useState('');

  return (
    <div style={styles.container}>
      <h2>Sleep Tracker</h2>
      <div>
        <label>Hours Slept: </label>
        <input
          type="number"
          placeholder="Enter hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          style={styles.input}
        />
      </div>
      <p>You slept for <strong>{hours || 0}</strong> hours.</p>
    </div>
  );
};

const styles = {
  container: { margin: '20px', padding: '10px', border: '1px solid #ddd' },
  input: { margin: '5px 0', padding: '5px', width: '200px' },
};

export default SleepTracker;
