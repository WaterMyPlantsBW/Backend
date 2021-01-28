# Backend
API URL:


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



Plant object:
```
{	id: integer, database generated
	nickname: string, required, unique,
	spicies: string, optional, defaults to ("Unknown")
	H2OFrequency: string, required,
	image: string, optional, defaults to (null)
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
| Delete plant	|DELETE	|/users/:id/plants/:id|	
| Update plant	|PUT	|/users/:id/plants/:id|	
