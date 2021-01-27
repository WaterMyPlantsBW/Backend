# Backend
Users object:
{	id: integer created by the database,
	username: string, required
	password: string, required
}

Plant onjext:
{	id: integer, database generated
	nickname: string, required, unique
	H2OFrequency: string, 


| Action	| Method|	Route |
|---------------|-------|-------------|
| Login		|POST	| /users/login|
| Register	|POST	|/users/register|
| Read		|Get	|/users/:id	|
| Read		|GET	|/users/:id/plants|
| Delete	|Get	|/users/:id/plants/:id|	
| Update	|Put	|/users/:id/plants/:id|	
