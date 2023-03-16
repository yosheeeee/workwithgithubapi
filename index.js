import { Octokit, App } from "https://cdn.skypack.dev/octokit?dts";
let form = document.forms.search

form.addEventListener('submit', function(event){
    // let div = document.createElement('div')
    // div.innerHTML = `<h1>Owner</h1>
    // <p><a href="#">repoName</a></p>`
    // document.body.append(div)
    // console.log('hello')
    event.preventDefault()
    log()
})

async function log(){
    const octokit = new Octokit({
        auth: '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'
    })

    let req = await octokit.request("GET /search/code",{
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          },
    })

    let result =  await req.json()
    console.log(result)
}

log()
