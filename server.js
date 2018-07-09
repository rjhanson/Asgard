const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const forever = require('forever')

const port = process.env.PORT || 3000
const api_version = 'v1'

const nhl = require('./api/middleware/nhl')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// API V1 defs
// TODO: Route all api calls through version checking middleware
// app.use(/api/:version/teams)
// app.use(/api, version_checker)
app.get('/api/:version/teams/', nhl.getTeams)
app.get('/api/:version/teams/:team', nhl.getTeams)
app.get('/api/:version/roster/:team', nhl.getRoster)
app.get('/api/:version/standings/:team', nhl.getDivisionStandings)
app.get('/api/:version/schedule/:team', nhl.getSchedule)

// Serve the static files
app.use('/', express.static(`${__dirname}/dist`))

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

forever.startServer(app.listen(port, () => console.log(`Listening on port ${port}`)), {
  watch: true,
  watchDir: './api/'
})
