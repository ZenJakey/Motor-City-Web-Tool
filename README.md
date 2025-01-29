# This isn't intended to be a public site
Motor city's API is inherently insecure, and therefore should not be exposed in a way for this to access it.  
This is intended to be ran on the same network as your Motor City dedicated server. If you want to be fancy you can use a reverse proxy and access this web panel via that, just make sure to add more authentication if you can.

## Getting Started

This should be very easy to get running. This requires the latest node.js & npm

```bash
# first
npm install

# then...
npm run dev
```

Open the link that gets output in your console with your browser to see the result.

From here, all that you need to do is enter your server ip:port, API password, hit connect, and you've got it!
