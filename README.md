# Backend
API URL: https://water-my-plants-app-team132.herokuapp.com/


Users object:
```
{	id: integer created by the database,
	username: string, required,unique
	password: string, required,max 18 characteres
	phoneNumber: string, required, unique
}
```
```
POST to /auth/registration
{ username: string, required, unique,
  password: string, required, max18,
  phoneNumber: string, required, unique
 }
 
 POST to /auth/login
 { username: string, required
   password: string, required
 }
 ```

```
Update Plant Object for PUT requests to /plants/:id
{ 
plant_id: required both come from params.id,
nickname: required, unique,
species: string, optional, defaults to ("Unknown")
image: string, optional, defaults to (null),
water: string, required format is "2021-01-28"
}
```

Plant object for POST requests to /users/:id/plants
```
{	id: integer, database generated
	nickname: string, required, unique,
	species: string, optional, defaults to ("Unknown")
	H2OFrequency: string, required,
	image: string, optional, defaults to (null),
	user_id: requiered comes from params.id,
	water: string, required format is "2021-01-28"
}
```
	

API Methods:

| Action	| Method|	Route |
|---------------|-------|-------------|
| Login		|POST	| /auth/login|
| Register	|POST	|/auth/register|
| Read user by id |GET	|/users/:id	|
|Update User Info|PUT   |/users/:id	|
|Add Plant	|POST  |/users/:id/plants|
|read plant by id|GET 	|/users/:id/plants/:id |
| Read user plants |GET	|/users/:id/plants|
| Delete plant	|DELETE	|/plants/:id|	
| Update plant	|PUT	|/plants/:id|	
