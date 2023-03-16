"use strict";

var _octokitDts = require("https://cdn.skypack.dev/octokit?dts");

var form = document.forms.search;
form.addEventListener('submit', function (event) {
  // let div = document.createElement('div')
  // div.innerHTML = `<h1>Owner</h1>
  // <p><a href="#">repoName</a></p>`
  // document.body.append(div)
  // console.log('hello')
  event.preventDefault();
  log();
});

function log() {
  var octokit, req, result;
  return regeneratorRuntime.async(function log$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          octokit = new _octokitDts.Octokit({
            auth: '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'
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(octokit.request("GET /search/code", {
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          }));

        case 3:
          req = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(req.json());

        case 6:
          result = _context.sent;
          console.log(result);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

log();