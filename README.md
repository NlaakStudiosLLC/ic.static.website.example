
# Dfinity IC Example Static Website

![alt text](https://theme.zdassets.com/theme_assets/9484680/b1e5f381a9c2478e0ef9684d711f7307fc420c70.gif)

## Preview

![alt text](https://github.com/NlaakStudiosLLC/ic.static.website.example/blob/main/.design/ic-website.jpg?raw=true)

Dfinity Internet Computer Static Website example using (Bootstrap, jQuery and Font-Awesome) via CDN

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

In a different window build/deploy the Website Canister

```bash
dfx deploy
```

Example Output:

```bash
Creating a wallet canister on the local network.
The wallet canister on the "local" network for user "default" is "YYYYY-YYYYY-YYYYY-YYYYY-YYY"
Deploying all canisters.
Creating canisters...
Creating canister "website"...
"website" canister created with canister id: "<CANISTER-ID>"
Building canisters...
Installing canisters...
Creating UI canister on the local network.
The UI canister on the "local" network is "XXXXX-XXXXX-XXXXX-XXXXX-XXX"
Installing code for canister website, with canister_id XXXXX-XXXXX-XXXXX-XXXXX-XXX
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

## Results

![alt text](https://github.com/NlaakStudiosLLC/ic.static.website.example/blob/main/.design/ic-website-broken.jpg?raw=true)

Left side is IC Website Canister with missing Background image (relative path to local image) and the right side is the local Express server with working Background image (relative path to local image). Identical Code

## Contact

[Dfinity IC Discord Dev Server](https://discord.gg/gYWyuBVQzR)

Me, Andrew Donelson, Discord -> GWF-Founder#5282
