# recipe-app-backend

Backend application for recipe-app and recipe-mobile.

## Tech Stack
- Node JS
- Express JS
- PostgreSQL

## Packages
- "argon2": "^0.30.3"
- "body-parser": "^1.20.2"
- "cloudinary": "^1.34.0"
- "cors": "^2.8.5"
- "dotenv": "^16.0.3"
- "express": "^4.18.2"
- "jsonwebtoken": "^9.0.0"
- "morgan": "^1.10.0"
- "multer": "^1.4.5-lts.1"
- "pg": "^8.9.0"
- "uuid": "^9.0.0"

## Features
- CRUD
- File Upload
- Authentication / User Login
- Authorization

## Env Variables
- DB_USER
- DB_HOST
- DB_NAME
- DB_PASS
- DB_PORT
- JWT_KEY
- PORT
- IMAGE_NAME
- IMAGE_KEY
- IMAGE_SECRET

## API References

### Register User

> POST /auth/register

Request Body:
| Key | Value |
| ----------- | ----------- |
| email | user email |
| password | password |
| fullname | user full name |

### Login

> POST /auth/login

Request Body:
| Key | Value |
| ----------- | ----------- |
| email | user email |
| password | user password |

### Get All Recipe

> GET /recipe

### Get Recipe by ID

> GET /recipe/:id

### Get User's Recipe

> GET /recipe/myrecipe

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |

### Insert Recipe

> POST /recipe

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |

Request Body:
| Key | Value |
| ----------- | ----------- |
| title | recipe title |
| category_id | recipe category id |
| ingredient | recipe ingredient |
| image | recipe image |

### Update Recipe

> PUT /recipe/:id

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |

Request Body:
| Key | Value |
| ----------- | ----------- |
| title | recipe title |
| category_id | recipe category id |
| ingredient | recipe ingredient |
| image | recipe image |

### Delete Recipe

> DELETE /recipe/:id

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |
