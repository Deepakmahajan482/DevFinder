# DevTinder APIs


//auth
- POST /signup
- POST /login
- POST /logout


//profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password


// ConnectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignore/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/accepted/:requestId


//UserRouter
- GET user/connections
- GET user/requests/received
- GET user/feed -Gets you the profiles of other users on platform
status :ignore(pass) ,interested(like) , accepted ,rejected