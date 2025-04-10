const d3 = Object.assign({}, require('d3'));
const dscc = require('@google/dscc');
const local = require('./localMessage.js');

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

// write viz code here
const drawViz = data => {
  // Clear any existing elements
  document.body.innerHTML = '';
  
  // Create container
  const container = document.createElement('div');
  container.id = 'container';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.overflow = 'auto';
  document.body.appendChild(container);
  
  // Get style values
  const barColor = data.style.appearance.barColor.value 
    ? data.style.appearance.barColor.value.color 
    : '#4285F4';
  const barHeight = data.style.appearance.barHeight.value || 24;
  const barSpacing = data.style.appearance.barSpacing.value || 16;
  const borderRadius = data.style.appearance.borderRadius.value || 4;
  const showValues = data.style.appearance.showValues.value !== false;
  
  // Text formatting
  const labelFontSize = data.style.text.labelFontSize.value || 14;
  const valueFontSize = data.style.text.valueFontSize.value || 14;
  const labelFontColor = data.style.text.labelFontColor.value 
    ? data.style.text.labelFontColor.value.color 
    : '#000000';
  const valueFontColor = data.style.text.valueFontColor.value 
    ? data.style.text.valueFontColor.value.color 
    : '#000000';
  const fontFamily = data.style.text.fontFamily.value || 'Roboto';
  
  // Set container styles
  container.style.fontFamily = fontFamily;
  container.style.padding = '10px';
  
  // Calculate total width for the visualization
  const width = dscc.getWidth();
  const labelWidth = width * 0.2; // 20% for labels
  const valueWidth = width * 0.1; // 10% for values
  const barWidth = width * 0.7; // 70% for bars
  
  // Loop through each row of data
  data.tables.DEFAULT.forEach((row, index) => {
    // Create row container
    const rowElement = document.createElement('div');
    rowElement.style.display = 'flex';
    rowElement.style.alignItems = 'center';
    rowElement.style.marginBottom = `${barSpacing}px`;
    
    // Create label element
    const labelElement = document.createElement('div');
    labelElement.style.width = `${labelWidth}px`;
    labelElement.style.fontSize = `${labelFontSize}px`;
    labelElement.style.color = labelFontColor;
    labelElement.style.fontWeight = 'bold';
    labelElement.style.paddingRight = '10px';
    labelElement.textContent = row['progress_labels'][0];
    
    // Create progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.style.width = `${barWidth}px`;
    progressContainer.style.height = `${barHeight}px`;
    progressContainer.style.position = 'relative';
    progressContainer.style.backgroundColor = '#e0e0e0';
    progressContainer.style.borderRadius = `${borderRadius}px`;
    
    // Get the metric value (assuming percentage format)
    const value = row['progress_values'][0];
    const percentValue = Math.min(100, Math.max(0, value)); // Ensure value is between 0-100
    
    // Create progress bar fill
    const progressFill = document.createElement('div');
    progressFill.style.position = 'absolute';
    progressFill.style.top = '0';
    progressFill.style.left = '0';
    progressFill.style.width = `${percentValue}%`;
    progressFill.style.height = '100%';
    progressFill.style.backgroundColor = barColor;
    progressFill.style.borderRadius = `${borderRadius}px`;
    progressFill.style.transition = 'width 0.5s ease-in-out';
    
    // Add progress bar fill to container
    progressContainer.appendChild(progressFill);
    
    // Create value element
    const valueElement = document.createElement('div');
    valueElement.style.width = `${valueWidth}px`;
    valueElement.style.fontSize = `${valueFontSize}px`;
    valueElement.style.color = valueFontColor;
    valueElement.style.fontWeight = 'bold';
    valueElement.style.paddingLeft = '10px';
    valueElement.style.textAlign = 'right';
    
    // Format the percentage value
    if (showValues) {
      valueElement.textContent = `${percentValue.toFixed(1)}%`;
    }
    
    // Add elements to row
    rowElement.appendChild(labelElement);
    rowElement.appendChild(progressContainer);
    rowElement.appendChild(valueElement);
    
    // Add row to container
    container.appendChild(rowElement);
    
    // Add click event listener for filtering
    rowElement.style.cursor = 'pointer';
    rowElement.addEventListener('click', () => {
      if (data.interactions && data.interactions.interactions && 
          data.interactions.interactions.value && 
          data.interactions.interactions.value.supportedActions && 
          data.interactions.interactions.value.supportedActions.indexOf('FILTER') >= 0) {
        dscc.sendInteraction('interactions', 'FILTER', {
          concepts: ['progress_labels'],
          values: [[row['progress_labels'][0]]]
        });
      }
    });
  });
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
