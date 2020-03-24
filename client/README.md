# next-graphql
next js with graphql

## setup
1. npm install
 #### development
- yarn dev
 #### production
- yarn start

## pm2 version
 #### development
 run in console
  ```
  pm2 start yarn --interpreter bash --name react-next -- dev
  ```

 #### production
 run in console
```
pm2 start yarn --name react-next -- start
```


## troubleshooting
  ### Invariant error
  run in console
   ```console
   grep -r InvariantError node_modules/**/bundle.cjs.js
   ```

## Reference

https://nec.is/writing/graphql-with-next-js-and-apollo/

https://github.com/sly777/ran

https://github.com/hasura/graphql-engine/tree/master/community/sample-apps/nextjs-postgres-graphql
