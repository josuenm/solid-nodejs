import { Client } from "pg";

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "127.0.0.1",
  port: 5433,
  database: "Users",
});

// Examples created by me to use PostgreSQL using pg package

function getAll() {
  client.connect();
  client
    .query("SELECT * FROM users")
    .then((res) => console.log(res.rows))
    .catch((err) => console.log(err))
    .finally(() => client.end());
}

function getByEmail(email: string) {
  client.connect();
  client
    .query(`SELECT * FROM users WHERE email='${email}'`)
    .then((res) => console.log(res.rows))
    .catch((err) => console.log(err))
    .finally(() => client.end());
}

function insert() {
  client.connect();
  client
    .query(
      "INSERT INTO users(id, name, email, password) values('38b57260-f1a8-4a90-ba40-c44f82b9cc8a', 'Verstappen', 'direct.verstappen@gmail.com', 'cnwbDA5o65nnui6Cw6_ZiQ')"
    )
    .then((res) => console.log(res.rows))
    .catch((err) => console.log(err))
    .finally(() => client.end());
}

function update(id: string, name: string, email: string, password: string) {
  client.connect();
  client
    .query(
      `UPDATE users SET name='${name}', email='${email}', password='${password}' WHERE id='${id}'`
    )
    .then((res) => console.log(res.rows))
    .catch((err) => console.log(err))
    .finally(() => client.end());
}

function deleteUser(id: string) {
  client.connect();
  client
    .query(`DELETE FROM users WHERE id='${id}'`)
    .then((res) => console.log(res.rows))
    .catch((err) => console.log(err))
    .finally(() => client.end());
}

deleteUser("38b57260-f1a8-4a90-ba40-c44f82b9cc8a");
