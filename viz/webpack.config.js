{
  "dsccViz": {
    "gcsDevBucket": "gs://YOUR_DEV_BUCKET/progress-bar-viz",
    "gcsProdBucket": "gs://YOUR_PROD_BUCKET/progress-bar-viz",
    "jsFile": "index.js",
    "jsonFile": "index.json",
    "cssFile": "index.css"
  },
  "scripts": {
    "build:dev": "dscc-scripts viz build -d dev",
    "build:prod": "dscc-scripts viz build -d prod",
    "push:dev": "dscc-scripts viz push -d dev",
    "push:prod": "dscc-scripts viz push -d prod",
    "update_message": "dscc-scripts viz update_message -f object",
    "start": "dscc-scripts viz start"
  },
  "devDependencies": {
    "@google/dscc-scripts": "^1.0.6",
    "css-loader": "^2.1.0",
    "extract-loader": "^3.1.0",
    "file-loader": "^3.0.1",
    "copy-webpack-plugin": "^4.6.0"
  },
  "dependencies": {
    "@google/dscc": "^0.3.8",
    "d3": "^5.7.0"
  }
}
