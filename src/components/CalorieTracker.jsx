import React, { useState } from 'react';

const CalorieTracker = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock calories for now. Replace with API call for real data.
    setCalories(Math.floor(Math.random() * 500 + 100)); // Random calorie count
  };

  return (
    <div style={styles.container}>
      <h2>Calorie Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter food item"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Get Calories
        </button>
      </form>
      {calories !== null && (
        <p>
          <strong>{food}</strong> has approximately <strong>{calories}</strong>{' '}
          calories.
        </p>
      )}
    </div>
  );
};

const styles = {
  container: { margin: '20px', padding: '10px', border: '1px solid #ddd' },
  input: { margin: '5px 0', padding: '5px', width: '200px' },
  button: { marginLeft: '10px', padding: '5px 10px', backgroundColor: '#6200ea', color: '#fff', border: 'none' },
};

export default CalorieTracker;
