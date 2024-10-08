
  <h3><b>My Songs App</b></h3>
 a MERN full-stack application for managing song information with CRUD operations and generating overall statistics about songs, artists, albums, and genres.

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://react.dev/">React with TypeScript</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://redux-saga.js.org/">Redux Saga</a></li>
    <li><a href="https://emotion.sh/docs/introduction">Emotion</a></li>
    <li><a href="https://rebassjs.org/">Styled Components-RebassJs</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://mongoosejs.com/">Monogoose</a></li>
  </ul>
</details>

<details>
  <summary>Deployment</summary>
  <ul>
    <li><a href="https://www.docker.com/">Docker</a></li>
  </ul>
</details>

### Setup

Clone this repository to your desired folder:

### Install

Install this project with:

```sh
  cd frontend
  npm install
  cd backend
  npm install
```
--->
Mongo Db setup
use CMD 
```sh
mongosh
use songdb
db.songs.insertMany(
  [{"title": "Shape of You", "artist": "Ed Sheeran", "album": "Divide", "genre": "Pop"},
    {"title": "Blinding Lights", "artist": "The Weeknd", "album": "After Hours", "genre": "Synth-Pop"},
    {"title": "Bohemian Rhapsody", "artist": "Queen", "album": "A Night at the Opera", "genre": "Rock"},
    {"title": "Stairway to Heaven", "artist": "Led Zeppelin", "album": "Led Zeppelin IV", "genre": "Rock"},
    {"title": "Rolling in the Deep", "artist": "Adele", "album": "21", "genre": "Soul"},
    {"title": "Smells Like Teen Spirit", "artist": "Nirvana", "album": "Nevermind", "genre": "Grunge"},
    {"title": "Hotel California", "artist": "Eagles", "album": "Hotel California", "genre": "Rock"},
    {"title": "Lose Yourself", "artist": "Eminem", "album": "8 Mile", "genre": "Hip-Hop"},
    {"title": "Like a Rolling Stone", "artist": "Bob Dylan", "album": "Highway 61 Revisited", "genre": "Folk-Rock"},
    {"title": "Billie Jean", "artist": "Michael Jackson", "album": "Thriller", "genre": "Pop"},
    {"title": "Halo", "artist": "Beyoncé", "album": "I Am... Sasha Fierce", "genre": "R&B"},
    {"title": "Imagine", "artist": "John Lennon", "album": "Imagine", "genre": "Pop"},
    {"title": "Yesterday", "artist": "The Beatles", "album": "Help!", "genre": "Rock"},
    {"title": "Purple Rain", "artist": "Prince", "album": "Purple Rain", "genre": "Rock"},
    {"title": "Hey Jude", "artist": "The Beatles", "album": "Hey Jude", "genre": "Rock"},
    {"title": "Sweet Child O' Mine", "artist": "Guns N' Roses", "album": "Appetite for Destruction", "genre": "Rock"},
    {"title": "Uptown Funk", "artist": "Mark Ronson ft. Bruno Mars", "album": "Uptown Special", "genre": "Funk"},
    {"title": "I Will Always Love You", "artist": "Whitney Houston", "album": "The Bodyguard", "genre": "Pop"},
    {"title": "Hallelujah", "artist": "Leonard Cohen", "album": "Various Positions", "genre": "Folk"},
    {"title": "Let It Be", "artist": "The Beatles", "album": "Let It Be", "genre": "Rock"}
]
);
```
### Usage

To run the frontend project(run on localhost:3000), execute the following command:

```sh
  cd frontend
  npm start
  ```
To run the backend project(run on localhost:5000), execute the following command:

```sh
  cd backend
  npm run dev
```
