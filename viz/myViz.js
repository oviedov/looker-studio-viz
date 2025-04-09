// Import dscc library
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);window.dscc=r.dscc},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.dscc={subscribeToData:function(e,t){return t===void 0&&(t={}),new r.SubscriptionsManager(e,t)},sendInteraction:function(e,t,n){var r={type:t,data:n,componentId:e};window.parent.postMessage(r,"*")},getUserLocale:function(){return document.documentElement.lang||"en"},getClientDbVersion:function(){return"1.0.0"}},t.objectTransform=function(e){return e},t.tableTransform=function(e){return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.componentData=e,this.options=t,this.firstData=!0,this.setWindowErrorHandler(),window.addEventListener("message",this.onMessage.bind(this))}return e.prototype.getWidth=function(){var e=document.documentElement.clientWidth;return this.options.width===void 0?e:Math.min(this.options.width,e)},e.prototype.getHeight=function(){var e=document.documentElement.clientHeight;return this.options.height===void 0?e:Math.min(this.options.height,e)},e.prototype.getComponentData=function(e){if(e===void 0)return e;var t={type:e.type,message:{tables:{}},interactions:{},style:e.config.style};return this.options.transform!==void 0?this.options.transform(e):t.message=e.message,this.firstData&&(this.firstData=!1,t.message.tables=this.processFirstData(t.message.tables)),t},e.prototype.processFirstData=function(e){var t={};return e===void 0?t:Object.keys(e).forEach(function(n){var r=e[n],o=[];r.headers.forEach(function(e){o.push(e.name)}),t[n]=[];for(var s=0;s<r.rows.length;s++){var i={};o.forEach(function(e,t){i[e]=r.rows[s][t]}),t[n].push(i)}}),t},e.prototype.onMessage=function(e){if(e.data.componentId!==void 0){var t=this.getComponentData(e.data);this.componentData(t)}},e.prototype.setWindowErrorHandler=function(){window.onerror=function(e,t,n,r,o){console.log({msg:e,url:t,lineNo:n,columnNo:r,error:o})}.bind(this)},e}();t.SubscriptionsManager=r}]);

// Add CSS to document head
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, sans-serif;
  }
  
  #container {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  
  #container > div:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
document.head.appendChild(style);

// Define the DSCC_IS_LOCAL constant
const DSCC_IS_LOCAL = false;

// Create and add the container element
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

function drawViz(data) {
  // Remove any existing elements
  container.innerHTML = '';
  
  try {
    // Get style values
    const barColor = data.style.appearance.barColor.value.color || '#4285F4';
    const barHeight = data.style.appearance.barHeight.value || 24;
    const barSpacing = data.style.appearance.barSpacing.value || 16;
    const borderRadius = data.style.appearance.borderRadius.value || 4;
    const showValues = data.style.appearance.showValues.value !== false;
    
    // Text formatting
    const labelFontSize = data.style.text.labelFontSize.value || 14;
    const valueFontSize = data.style.text.valueFontSize.value || 14;
    const labelFontColor = data.style.text.labelFontColor.value.color || '#000000';
    const valueFontColor = data.style.text.valueFontColor.value.color || '#000000';
    const fontFamily = data.style.text.fontFamily.value || 'Roboto';
    
    // Set container styles
    container.style.fontFamily = fontFamily;
    container.style.padding = '10px';
    
    // Calculate total width for the visualization
    const width = document.body.clientWidth;
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
        if (data.interactions.interactions.value.supportedActions.indexOf('FILTER') >= 0) {
          dscc.sendInteraction('interactions', 'FILTER', {
            concepts: ['progress_labels'],
            values: [[row['progress_labels'][0]]]
          });
        }
      });
    });
  } catch (error) {
    // Error handling
    container.innerHTML = '<div style="color: red; padding: 20px;">Error rendering visualization: ' + error.message + '</div>';
  }
}

// Subscribe to data
dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});