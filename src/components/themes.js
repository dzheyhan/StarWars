const colors = {
  yellow: '#FFE300',
  lightBlue: '#4BD5EE',
  black: '#000',
  white: '#FFF',
  grayOne: '#3c4858',
};

const themes = {
  light: {
    themeColors: {
      ...colors,
    },
    colors: {
      bg: '#E8EAED',
      text: colors['grayOne'],
      textOne: colors['yellow'],
      textTow: colors['lightBlue'],
      textTree: colors['grayOne'],
    },
    cards: {
      borderColor: '#E5E9F2',
      backgroundColor: colors['white'],
    },
    buttons: {
      solid: {
        backgroundColor: colors['black'],
        borderColor: '#E5E9F2',
        color: colors['yellow'],
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
      backgroundColor: colors['black'],
      borderColor: '#333',
      color: colors['lightBlue'],
    },
    primaryHeading: {
      color: colors['lightBlue'],
    },
    radar: {
      color: colors['lightBlue'],
      backgroundColor: colors['black'],
      grid: '#3C4858',
    },
  },
  dark: {
    themeColors: {
      ...colors,
    },
    colors: {
      bg: colors['black'],
      text: '#abb1ba',
      textOne: colors['lightBlue'],
      textTow: colors['yellow'],
      textTree: colors['lightBlue'],
    },
    cards: {
      borderColor: '#3C4858',
      backgroundColor: '#333',
    },
    buttons: {
      solid: {
        backgroundColor: colors['lightBlue'],
        borderColor: 'none',
        color: colors['yellow'],
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
      color: colors['lightBlue'],
    },
    primaryHeading: {
      color: colors['yellow'],
    },
    radar: {
      color: colors['yellow'],
      backgroundColor: colors['black'],
      grid: '#333',
    },
  },
};

export { themes, colors };
