# express

- [express](#express)
  - [setup](#setup)

## setup

- npm init :`npm init`
- typescript: `npm i -D typescript @types/express @types/node`
- tsconfig : `npx tsc --init`
- package.json :
  - `"main": "src/app.js"`
  - `"build": "npx tsc"`
  - `"start" : "node dist/index.js"`
  - `"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""`
  -
