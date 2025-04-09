exports.message = {
  tables: {
    DEFAULT: [
      {
        progress_labels: ['Ex 1'],
        progress_values: [97.4]
      },
      {
        progress_labels: ['Ex 2'],
        progress_values: [86.9]
      },
      {
        progress_labels: ['Ex 3'],
        progress_values: [97.6]
      }
    ]
  },
  fields: {
    progress_labels: [
      {
        id: 'qt_nzqx6a0xvb',
        name: 'Label',
        type: 'TEXT',
        concept: 'DIMENSION'
      }
    ],
    progress_values: [
      {
        id: 'qt_8jqx6a0xvb',
        name: 'Value',
        type: 'NUMBER',
        concept: 'METRIC'
      }
    ]
  },
  style: {
    appearance: {
      barColor: {
        value: {
          color: '#4285F4'
        }
      },
      barHeight: {
        value: 24
      },
      barSpacing: {
        value: 16
      },
      borderRadius: {
        value: 4
      },
      showValues: {
        value: true
      }
    },
    text: {
      labelFontSize: {
        value: 14
      },
      valueFontSize: {
        value: 14
      },
      labelFontColor: {
        value: {
          color: '#000000'
        }
      },
      valueFontColor: {
        value: {
          color: '#000000'
        }
      },
      fontFamily: {
        value: 'Roboto'
      }
    }
  },
  theme: {
    themeFillColor: {
      color: '#ffffff',
      opacity: 1
    },
    themeFontColor: {
      color: '#000000',
      opacity: 1
    },
    themeFontFamily: 'Roboto',
    themeAccentFillColor: {
      color: '#4285F4',
      opacity: 1
    },
    themeAccentFontColor: {
      color: '#FFFFFF',
      opacity: 1
    },
    themeAccentFontFamily: 'Roboto',
    themeSeriesColor: [
      {
        color: '#4285F4',
        opacity: 1
      },
      {
        color: '#DB4437',
        opacity: 1
      },
      {
        color: '#F4B400',
        opacity: 1
      },
      {
        color: '#0F9D58',
        opacity: 1
      },
      {
        color: '#AB47BC',
        opacity: 1
      }
    ],
    themeIncreaseColor: {
      color: '#0F9D58',
      opacity: 1
    },
    themeDecreaseColor: {
      color: '#DB4437',
      opacity: 1
    },
    themeGridColor: {
      color: '#e9e9e9',
      opacity: 1
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