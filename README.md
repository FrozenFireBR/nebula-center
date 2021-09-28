# Nebula Center
### Official wrapper of Nebula Center Botlist
---
## Usage

### Receive response when your bot receives a vote

```js
const express = require('express');
const app = express();
const Nebula = require('nebula-center');
const webhook = new Nebula.Webhook({auth: /* your nebula authorization, can get it on discord.gg/AxcQf5Pf58 */, makeRequest: true});

app.listen(3000)//localhost:3000/webhook

app.post('/webhook', webhook.receiveVote(vote => {
  console.log(vote)//{ user: 'some id', bot: 'your bot id', totalVotes: 'number of votes' }
}))
```
##### At [Discord Server](https://discord.gg/AxcQf5Pf58), use `!getToken <@your bot>` and open your DM channel for you to send your project url, based on the example above, the url would be: https://localhost:3000/webhook. It is recommended that you create a private url to receive the response from the server.
---
### Gets info from user or bot

```js
const api = new Nebula.Api({ auth: 'some auth', makeRequest: true});
console.log(api.getUser('753252894974804068'))// { reps: Number, vip: Boolean, bots: Object }
console.log(api.getBot(''))
```