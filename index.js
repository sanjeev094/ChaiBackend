const express = require('express')
require('dotenv').config();
const app = express()
const port = 4000

const githubRepo = {
    id: 12345678,
    name: "example-repo",
    full_name: "username/example-repo",
    owner: {
        login: "username",
        id: 12345,
        avatar_url: "https://avatars.githubusercontent.com/u/12345?v=4",
        html_url: "https://github.com/username",
    },
    description: "This is an example repository for demonstration purposes.",
    url: "https://api.github.com/repos/username/example-repo",
    html_url: "https://github.com/username/example-repo",
    language: "JavaScript",
    forks_count: 10,
    stargazers_count: 50,
    watchers_count: 50,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    pushed_at: "2024-01-01T00:00:00Z",
    open_issues_count: 5,
    license: {
        key: "mit",
        name: "MIT License",
        url: "https://api.github.com/licenses/mit",
    },
    topics: ["javascript", "backend", "api"],
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res)=>{
    res.send("sanjeev");
})

app.get('/login',(req,res) => {
    res.send(`<h1>Please Login to this page </h1>`)
})

app.get('/youtube',(req,res) => {
    res.send('<h2>welcome to youtube </h2>')
})

app.get('/github',(req,res) => {
    res.json(githubRepo);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})