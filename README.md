# cs546-fp-server
final project server part


## API

| verb | path | description |
|------|------|-------------|
| GET  | /signup | get the signup page |
| POST | /signup | create a new account with {username(uid), password, email} |
| GET  | /login  | get the login page |
| POST | /login  | login with {username(uid), password}|
| POST | /postitem | post a new item with {title, condition, description, originalPrice, currentPrice, tag} |
| POST | /order  | seller create a new order with {buyerid, itemid} |
| GET  | /order/:oid | get the order obeject |
| POST | /order/status/:oid | update the status of the oid with {status} |
| GET  | /itemlist | get all the items (not implemented) |
| GET  | /itemlist/:tag | get all the items with tag(not implemented) |
