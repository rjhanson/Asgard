const request = require('request')

const API_BASE = "https://statsapi.web.nhl.com/"
const API_VERSION = "/api/v1"
const nhl_request = request.defaults({
  baseUrl: API_BASE,
  json: true,
  method: 'GET',
})

const request_wrap = (endpoint, params = {}, filter = {}) => {
  return new Promise((resolve, reject) => {
    nhl_request({
      uri: endpoint,
      qs: params,
    }, (err, resp, body) => {
      if (err) {
        console.log("NHL endpoint err:", err)
        reject(err)
      }
      resolve(body)
    })
  })
}

const err_resp = (endpoint, err_msg) => {
  return {
    error: true,
    from: endpoint,
    error_msg: err_msg,
  }
}

const getTeams = (req, res) => {
  const result = request_wrap("/api/v1/teams")
  result.then((data) => {
    console.log("Got team data", data)
    if (req.params.team) {
      data = data.teams.filter((team) => team.abbreviation == req.params.team)
    }

    res.status(200).send(data)
  }).catch((err) => {
    res.status(400).send(err_resp('getTeams', err))
  })
}

const getSchedule = (req, res) => {
  const params = {}
  if (req.params.team) {
    params.team = req.params.team
  }
  const schedule = request_wrap("/api/v1/schedule", params)
  schedule.then((data) => res.status(200).send(data))
  schedule.catch((err) => res.status(400).send(err_resp('getSchedule', err)))
}

const getRoster = (req, res) => {
  const result = request_wrap("/api/v1/teams/" + req.params.team + "/roster")
  result.then((data) => res.status(200).send(data.roster))
  result.catch((err) => res.status(400).send(err_resp('getRoster', err)))
}

const getDivisionStandings = (req, res) => {
  const result = request_wrap("/api/v1/standings")
  result.then((data) => res.status(200).send(data))
  result.catch((err) => res.status(400).send(err_resp('getDivStandings', err)))
}

const nhl_api = {
  getTeams,
  getSchedule,
  getDivisionStandings,
  getRoster,
}

module.exports = nhl_api
