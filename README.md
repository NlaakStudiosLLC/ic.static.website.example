
# ic.static.website.example

![alt text](https://github.com/NlaakStudiosLLC/ic.static.website.example/blob/main/.design/ic-website.jpg?raw=true)

Dfinity Internet Computer Static Website example using (Bootstrap, jQuery and fontawesome) via CDN


## Express Example Deployment (local :3000)

Open a separate window/shell to start your local dev with express

```bash
npm install
npm start
```

Open browser at `http://localhost:3000`

## IC Example Deployment (local :8000)

### Start Local IC

Open a separate window/shell to start your local chain

```bash
dfx start
```

### Build/Deploy to local IC

In a different window build/deploy the Website Cansiter

```bash
dfx deploy
```

Example Output:

```
Creating a wallet canister on the local network.
The wallet canister on the "local" network for user "default" is "rno2w-sqaaa-aaaaa-aaacq-cai"
Deploying all canisters.
Creating canisters...
Creating canister "website"...
"website" canister created with canister id: "renrk-eyaaa-aaaaa-aaada-cai"
Building canisters...
Installing canisters...
Creating UI canister on the local network.
The UI canister on the "local" network is "rdmx6-jaaaa-aaaaa-aaadq-cai"
Installing code for canister website, with canister_id renrk-eyaaa-aaaaa-aaada-cai
Uploading assets to asset canister...
Starting batch.
Staging contents of new and changed assets:
  /index.html 1/1 (2353 bytes)
  /index.html (gzip) 1/1 (1001 bytes)
Committing batch.
Deployed canisters. 
```

Now, open the file `.dfx/local/canister_ids.json` and get your canister id `website.local` and add it to the url below

Open browser at `http://localhost:3000?canisterId=<CANISTER-ID>`
