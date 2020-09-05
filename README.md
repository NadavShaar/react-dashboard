# React-Dashboard
A showcase of chart widgets in a grid layout.

### Description
When app is initialized, a request is out (to a node server hosted in heroku) to get the widgets data and the layouts config for the widgets grid, if there's no config saved yet, the layouts are taken from a defaults configuration and saved in the server and in store (redux) ({widgets: dashboard: { widgetsConfig }}.
Every layout change is synced with the store and the server, so the user can have his preffered widgets and layout.
##### Libraries: 
react-grid-layout & canvasjs.

Live Demo [here](https://nadavshaar.github.io/react-dashboard/)

![dashboard](https://user-images.githubusercontent.com/8030614/92292802-ad640e00-ef27-11ea-820f-4726cbd515d4.png)
