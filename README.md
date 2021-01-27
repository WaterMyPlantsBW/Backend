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
| Login		|POST	| /users/login|
| Register	|POST	|/users/register|
|Add Plant/Create|POST  |/users/:id/plants|
| Read		|Get	|/users/:id	|
| Read		|GET	|/users/:id/plants|
| Delete	|DELETE	|/users/:id/plants/:id|	
| Update	|Put	|/users/:id/plants/:id|	
