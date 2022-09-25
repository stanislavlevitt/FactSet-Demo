const router = require('express').Router()
module.exports = router

const BASE_URL = "https://api.github.com/search/repositories?q=stars:%3E=1&sort=stars&order=desc"

router.get("/", async(req,res)=>{
  let list = []
  let response = await fetch(BASE_URL)
  let data = await response.json()
  data.items.forEach(repo =>{
    list.push({
      starCount: repo.stargazers_count,
      repoName: repo.name,
      date: repo.created_at,
      repoUrl: repo.html_url,
    })
  })

  if(data.incomplete_results) res.send({Warning: "Results may be inaccurate due to high search results", repositories: list})
  else res.send({repositories: list})
})

router.get('/:limit', async (req,res)=>{
  let list = []
  let response = await fetch(generateURL(req.params.limit, req.query.date))
  let data = await response.json()
  data.items.forEach(repo =>{
    list.push({
      starCount: repo.stargazers_count,
      repoName: repo.name,
      date: repo.created_at,
      repoUrl: repo.html_url,
    })
  })

  if(data.incomplete_results) res.send({Warning: "Results may be inaccurate due to high search results", repositories: list})
  else res.send({repositories: list})
})

const generateURL = (limit, date) =>{
  let url = BASE_URL.concat(`&per_page=${limit}`)
  if(date) url = url.concat(`&q=created:>${date}`)

  return url
}
