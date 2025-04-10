export const message = {
  tables: {
    DEFAULT: [
      {
        progress_labels: ['Project A'],
        progress_values: [75]
      },
      {
        progress_labels: ['Project B'],
        progress_values: [45]
      },
      {
        progress_labels: ['Project C'],
        progress_values: [90]
      }
    ]
  },
  style: {
    appearance: {
      barColor: {value: {color: '#4285F4'}},
      barHeight: {value: 24},
      barSpacing: {value: 16},
      borderRadius: {value: 4},
      showValues: {value: true}
    },
    text: {
      labelFontSize: {value: 14},
      valueFontSize: {value: 14},
      labelFontColor: {value: {color: '#000000'}},
      valueFontColor: {value: {color: '#000000'}},
      fontFamily: {value: 'Roboto'}
    }
  },
  interactions: {
    interactions: {
      value: {
        supportedActions: ['FILTER']
      }
    }
  }
};
