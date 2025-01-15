import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Health Tracker App</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#6200ea',
    padding: '10px',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
};

export default Header;
