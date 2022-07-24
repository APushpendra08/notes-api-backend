# notes-api-backend
Notes API Backend - This API will be consumed by Android App present at https://github.com/APushpendra08/notes-app-android-mvvm.git

NOTE : Deployed on https://notes-app-ipa.herokuapp.com/

---------------------
## Setup the app to run
1. Clone the repository
2. Install node modules - ``` npm install ```
3. Create .env files in root of project and add these two parameters - ```SECRET_KEY``` and ```MONGO_URL```. <br><p>```MONGO_URL``` will be connection string for MongoDB to store the data<br>```SECRET_KEY``` will be used for Authentication purpose.</p>
4. Start the Node.js Application - ```npm start```
5. Test the Server - Goto root of the host URL and see if the connection was established and a response was recieved - <br>```Welcome to NotesAPI Backend```

### Endpoints
#### Login Endpoints
| Method   | URL                                      | Description                              | Required Parameters |
| -------- | ---------------------------------------- | ---------------------------------------- |---------------------|
| `GET`    | `/users/signup`                          | Sign-up to NotesApp                      | `username`<br>`password`<br>`email`|
| `POST`   | `/users/signup`                          | Sign-in to NotesApp                      |`username`<br>`password`<br>`email` |

#### Notes Endpoints
| Method   | URL                                      | Description                              | Required Parameters |
| -------- | ---------------------------------------- | ---------------------------------------- |---------------------|
| `GET`    | `/note/`                                 | Get all Notes for the user               | N/A|
| `POST`   | `/note/`                                 | Add a new note for the user              |`title`<br>`description` |
| `DELETE` | `/note/:id`                              | Delete a note for given id               |`id` as param |
| `PUT`    | `/note/:id`                              | Update the note for the given id         |`id` as param<br>`title`<br>`description` |

