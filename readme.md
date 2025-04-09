# Progress Bar Scorecard for Looker Studio

This community visualization for Looker Studio displays multiple metrics as progress bars with labels and percentage values, creating a clean scorecard-style visualization.

## Features

- Display multiple metrics as horizontal progress bars
- Customizable bar colors, heights, and spacing
- Show/hide percentage values
- Customizable font styles and colors
- Support for filtering when clicking on bars

## Setup Instructions

### Prerequisites

1. A Google Cloud Platform account
2. A Google Cloud Storage bucket for hosting the visualization
3. Node.js and npm installed on your development machine

### Installation

1. Clone or download this repository
2. Update the `package.json` file with your GCS bucket information:
   ```json
   "dsccViz": {
     "gcsDevBucket": "gs://your-gs-bucket-name",
     "gcsProdBucket": "gs://your-gs-bucket-name-prod",
     "jsFile": "index.js",
     "jsonFile": "config.json",
     "cssFile": "index.css",
     "print": "print.js"
   }
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Authenticate with Google Cloud:
   ```bash
   gcloud auth login
   ```

5. Build and deploy the visualization:
   ```bash
   npm run build
   ```

### Using in Looker Studio

1. In Looker Studio, create a new report or edit an existing one
2. Click "Add a chart" and select "Community Visualizations"
3. Click "Explore more" and then "Deploy your own visualization"
4. Enter the deployed visualization URL (from your GCS bucket)
5. Configure the visualization with your data:
   - Add a dimension for the labels
   - Add one or more metrics for the progress values (percentages)

## Configuration Options

### Data
- **Label Dimension**: Text labels for each progress bar
- **Value Metrics**: Numeric values for the progress bars (percentages)

### Style
- **Bar Color**: Color of the progress bars
- **Bar Height**: Height of the progress bars in pixels
- **Bar Spacing**: Spacing between bars in pixels
- **Show Percentage Values**: Toggle to show/hide percentage values
- **Font Sizes**: Size of label and value text
- **Font Colors**: Color of label and value text
- **Font Family**: Font family for all text

## Notes

- Values are expected to be percentages (0-100)
- For best results, use 5-10 metrics in a single visualization
- The visualization supports interactivity (filtering) when clicking on bars

## Troubleshooting

If you encounter issues:

1. Check the browser console for errors
2. Verify your data format (dimension for labels, metrics for values)
3. Try redeploying the visualization with `npm run build`
4. Clear your browser cache and refresh Looker Studio
