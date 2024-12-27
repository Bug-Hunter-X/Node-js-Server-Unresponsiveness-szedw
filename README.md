# Node.js Server Unresponsiveness Bug Report

This repository demonstrates a common, yet subtle bug in Node.js HTTP servers where the server becomes unresponsive after a period of inactivity. The issue stems from resource exhaustion or improper handling of connections, leading to a hanging server that stops accepting new requests.

## Bug Reproduction
1. Clone this repository.
2. Run `node server.js`.
3. Send a few requests to the server (e.g., using `curl`).
4. Wait for a period of inactivity (several minutes).
5. Attempt to send another request.  The request will likely hang or timeout.

## Solution
The provided `server-solution.js` demonstrates a fix, incorporating techniques to prevent connection leaks and resource exhaustion.