const colors = {
  yellow: '#FFE300',
  lightBlue: '#4BD5EE',
  black: '#000',
  white: '#FFF',
};

const themes = {
  light: {
    colors: {
      bg: '#E8EAED',
      text: '#3c4858',
      colors,
    },
    cards: {
      borderColor: '#E5E9F2',
      backgroundColor: '#fff',
    },
    buttons: {
      solid: {
        backgroundColor: '#000',
        borderColor: '#E5E9F2',
        color: '#FFE300',
      },
      outline: {
        borderColor: '#E5E9F2',
        backgroundColor: '#EFF2F7',
        color: 'inherit',
      },
    },
    inputs: {
      backgroundColor: '#EFF2F7',
      borderColor: '#E5E9F2',
      color: '#3C4858',
    },
    appBar: {
      backgroundColor: '#000',
      borderColor: '#333',
      color: '#4BD5EE',
    },
    primaryHeading: {
      color: '#4BD5EE',
    },
    radar: {
      color: '#4BD5EE',
      backgroundColor: '#000',
      grid: '#3C4858',
    },
  },
  dark: {
    colors: {
      bg: '#000',
      text: '#abb1ba',
      colors,
    },
    cards: {
      borderColor: '#3C4858',
      backgroundColor: '#333',
    },
    buttons: {
      solid: {
        backgroundColor: '#4BD5EE',
        borderColor: 'none',
        color: '#FFE300',
      },
      outline: {
        borderColor: '#3C4858',
        backgroundColor: '#333',
        color: 'inherit',
      },
    },
    inputs: {
      backgroundColor: '#FFF',
      borderColor: '#3C4858',
      color: '#273444',
    },
    appBar: {
      backgroundColor: '#333',
      borderColor: '#3C4858',
      color: '#4BD5EE',
    },
    primaryHeading: {
      color: '#FFE300',
    },
    radar: {
      color: '#FFE300',
      backgroundColor: '#000',
      grid: '#333',
    },
  },
};

export default themes;
