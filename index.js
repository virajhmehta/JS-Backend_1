require("dotenv").config();
const express = require("express");
// import express from "express" line 1 == 2
const app = express();
const port = 3000;

const githubData = {
  login: "virajhmehta",
  id: 40292937,
  node_id: "MDQ6VXNlcjQwMjkyOTM3",
  avatar_url: "https://avatars.githubusercontent.com/u/40292937?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/virajhmehta",
  html_url: "https://github.com/virajhmehta",
  followers_url: "https://api.github.com/users/virajhmehta/followers",
  following_url:
    "https://api.github.com/users/virajhmehta/following{/other_user}",
  gists_url: "https://api.github.com/users/virajhmehta/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/virajhmehta/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/virajhmehta/subscriptions",
  organizations_url: "https://api.github.com/users/virajhmehta/orgs",
  repos_url: "https://api.github.com/users/virajhmehta/repos",
  events_url: "https://api.github.com/users/virajhmehta/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/virajhmehta/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 4,
  following: 2,
  created_at: "2018-06-15T09:19:26Z",
  updated_at: "2024-02-06T11:35:03Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.get("/", (req, res) => {
  res.send("iviraj");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("JS Backend");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
