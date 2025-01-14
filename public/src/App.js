import React from 'react';
import Header from './components/Header';
import ActivityTracker from './components/ActivityTracker';
import CalorieTracker from './components/CalorieTracker';
import SleepTracker from './components/SleepTracker';

function App() {
  return (
    <div>
      <Header />
      <ActivityTracker />
      <CalorieTracker />
      <SleepTracker />
    </div>
  );
}

export default App;
