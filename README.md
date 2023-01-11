# Catwiki Express Backend Project (The backend for the Catwiki Website deployed [here](https://catwiki-adeoluwa.netlify.app/))

This project was developed using `Node` v "^18.13.0", `Express` v "^4.18.1", `Typescript` v "^4.7.2" and `Jest` v "^29.3.1" libraries.

The Catwiki Website was deployed with `Netlify` link [here](https://catwiki-adeoluwa.netlify.app/).

Figma design was provided by [devChallenges.io](https://devchallenges.io/).

You can clone project and customise at your end.

### API Documentation

- 'http://127.0.0.1:4000/api/v1/topTen' Endpoint

METHOD: 'GET'

SUCCESS RESPONSE (200): {'success': true, 'data': '**********'}

ERROR RESPONSE (4**, 5**): {'success': false, 'message': '***********'}


- 'http://127.0.0.1:4000/api/v1/details/{cat_id}' Endpoint

METHOD: 'GET'

SUCCESS RESPONSE (200): {'success': true, 'data': '**********'}

ERROR RESPONSE (4**, 5**): {'success': false, 'message': '***********'}


- 'http://127.0.0.1:4000/api/v1/photos/{cat_id}' Endpoint

METHOD: 'GET'

SUCCESS RESPONSE (200): {'success': true, 'data': '**********'}

ERROR RESPONSE (4**, 5**): {'success': false, 'message': '***********'}

- 'http://127.0.0.1:4000/api/v1/breedlist' Endpoint

METHOD: 'GET'

SUCCESS RESPONSE (200): {'success': true, 'data': '**********'}

ERROR RESPONSE (4**, 5**): {'success': false, 'message': '***********'}
