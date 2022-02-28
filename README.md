# Forume-Backend

## Endpoint Documentation 

The current endpoints for this backend are described below

The API is currently [live on Heroku](https://forume-backend.herokuapp.com/)

#### API Documentation 

Endpoint starting with /api/auth are related to login/signup process.

### Register

**Endpoint**: `[POST] /api/auth/register`

**Input**: Pass in an object containing the following registration information.

|   Key    | Type | Required |     Notes      |
|----------|------|----------|----------------|
| fullname |string|   Yes    | must be unique |
| username |string|   Yes    | must be unique |
| email    |string|   Yes    | must be unique |
| password |string|   Yes    |                |

**Output**: on success, returns an object in the following format.

```
{
    "user_id": 3,
    "fullname": "Jane Doe",
    "username": "jane123",
    "email": "janedoe123@gmail.com",
    "created_at": "2022-02-28T20:17:39.341Z"
}

```


### Login
**Endpoint**: `[POST] /api/auth/login`

**Input**: Pass in an object containing the following login information.

|   Key    | Type | Required |                Notes                       |
|----------|------|----------|--------------------------------------------|
| username |string|   Yes    | user must exist in the database            |
| password |string|   Yes    | password must be valid for the target user |

**Output**: on success, returns an object in the following format.


```
{
    "message": "Welcome Mike!",
    "token": #encrypted token
}
```

### Posts Endpoints

#### Get current posts

**Endpoint**: `[GET] /api/:username/posts`

**Output**: on success, returns an object in the following format.

```
[
    {
        "post_id": 1,
        "post_title": "Feeling the Burn",
        "post_body": "Stayed in the sun too long, and now I am totally burned!",
        "created_at": "2022-02-28T20:02:05.071Z",
        "author_id": 1,
        "username": "Jane"
    },
    {
        "post_id": 2,
        "post_title": "Inspiration for today",
        "post_body": "Happiness is a good flow of life.",
        "created_at": "2022-02-28T20:02:05.071Z",
        "author_id": 1,
        "username": "Jane"
    },
    ...
]

```
**Endpoint**: `[GET] /api/:username/post/:post_id`

**Output**: on success, returns an object in the following format.

```
[
    {
        "post_id": 1,
        "post_title": "Feeling the Burn",
        "post_body": "Stayed in the sun too long, and now I am totally burned!",
        "created_at": "2022-02-28T20:02:05.071Z",
        "author_id": 1
    }
]
```
#### Add new post 

**Endpoint**: `[POST] /api/:username/post`

**Input**: Pass in an object containing the following login information.

|    Field   | Data Type |              Metadata                       |
|------------|-----------|---------------------------------------------|
| post_id    | integer   | not required, the database will generate it |
| post_title | string    | user must exist in the database             |
| post_body  | string    | password must be valid for the target user  |
| author_id  | integer   | not required, the database will generate it |


**Output**: on success, returns an object in the following format.

```
[
    {
        "post_id": 6,
        "post_title": null,
        "post_body": "HEY! Good morning everyone. Time for some morning walk",
        "author_id": 1
    }
]
```

#### Remove post

**Endpoint**: `[DELETE] /api/:username/post/:id`

**Output**: on success, returns an object in the following format.

```
[
    {
        "post_id": 1,
        "post_title": "Feeling the Burn",
        "post_body": "Stayed in the sun too long, and now I am totally burned!",
        "created_at": "2022-02-28T20:02:05.071Z",
        "author_id": 1
    }
]
```

#### Update Post 

**Endpoint**: `[PUT] /api/:username/post/:id`

**Input**: pass in an object containing the following login information.

|    Field   | Data Type |              Metadata                       |
|------------|-----------|---------------------------------------------|
| post_id    | integer   | not required, the database will generate it |
| post_title | string    | user must exist in the database             |
| post_body  | string    | password must be valid for the target user  |
| author_id  | integer   | not required, the database will generate it |

**Output**: on success, returns an object in the following format.

```
[
    {
        "post_id": 2,
        "post_title": "Inspiration for today",
        "post_body": "Happiness is a good flow of life.",
        "created_at": "2022-02-28T20:02:05.071Z",
        "author_id": 1
    }
]
```
### Profile Endpoints

**Endpoint**: `[GET] /api/:username/profile`

**Output**: on success, returns an object in the following format.

```
{
    "user_id": 1,
    "fullname": "Jane Doe",
    "username": "Jane",
    "email": "janedoe@gmail.com",
    "password": "1234",
    "created_at": "2022-02-28T20:02:05.068Z",
    "updated_at": "2022-02-28T20:02:05.068Z"
}
```

**Endpoint**: `[PUT] /api/:username/profile`

**Input**: on success, returns an object in the following format.

|  Field   | Data Type |
|----------|-----------|
| fullname | string    |
| username | string    |
| email    | string    | 
| password | string    |


**Output**: on success, returns an object in the following format.

```
{
    "user_id": 1,
    "fullname": "Jane Dow",
    "username": "Jane",
    "email": "janedo1@gmail.com",
    "password": "1234",
    "created_at": "2022-02-28T20:02:05.068Z",
    "updated_at": "2022-02-28T20:02:05.068Z"
}
```





