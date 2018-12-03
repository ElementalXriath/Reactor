const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;
const server = express();


let nextId = 1;

let users = [
  {
    id: 1,
    name: 'James',
    email: 'James@email.com',
    user: "James0292",
    pass: 'pass'
  },
  {
    id: 2,
    name: 'Aarron',
    email: 'Arron@email.com',
    user: "Arron2",
    pass: 'pass'
  },
  {
    id: 3,
    name: 'Ryan',
    email: 'Ryan@email.com',
    user: "ryan333",
    pass: 'pass'
  },
  {
    id: 4,
    name: 'Greg',
    email: 'Greg@email.com',
    user: "greg1",
    pass: 'pass'
  }
]

const components = [
  {
"postId": 1,
"id": 1,
"name": "id labore ex et quam laborum",
"email": "Eliseo@gardner.biz",
"thumbnail": "dirname/path",
"categories": ['All'],
"body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}, {
"postId": 1,
"id": 2,
"name": "quo vero reiciendis velit similique earum",
"email": "Jayne_Kuhic@sydney.com",
"thumbnail": "dirname/path",
"categories": ['All'],
"body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
}, {
"postId": 1,
"id": 3,
"name": "odio adipisci rerum aut animi",
"email": "Nikita@garfield.biz",
"thumbnail": "dirname/path",
"categories": ['All'],
"body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
}, {
"postId": 1,
"id": 4,
"name": "alias odio sit",
"email": "Lew@alysha.tv",
"thumbnail": "dirname/path",
"categories": ['All'],
"body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
}
]
server.use(bodyParser.json());

server.use(cors());


// CRUD for user data

server.get('/users', (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, 1000);
});

server.get('/users/:user', (req, res) => {
  const user = users.find(user => user.user == req.params.user);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send({ msg: 'user not found' });
  }
});

server.post('/users', (req, res) => {
  const {name, email, username, password} = req.body;

  const user = {
    id: getNextId(),
    name: name,
    email: email,
    username: username,
    password: password
  }
  
  res.json(user);
});

server.put('/users/:id', (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex(f => f.id == id);

  if (userIndex > -1) {
    const user = { ...users[userIndex], ...req.body };

    users = [
      ...users.slice(0, userIndex),
      user,
      ...users.slice(userIndex + 1),
    ];
    res.send(users);
  } else {
    res.status(404).send({ msg: 'user not found' });
  }
});

server.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter(f => f.id !== Number(id));

  res.send(users);
});

function getNextId() {
  return nextId++;
}

// CRUD for component data

server.get('/components', (req, res) => {
  res.send(components);
})

server.get('/components/:id', (req, res) => {

  const component = components.find(component => component.id == req.params.id);

  if (component) {
    res.status(200).json(component);
  } else {
    res.status(404).send({ msg: 'Component not found, Please go back to Components' });
  }
});

server.listen(port, () => {
  console.log('Running on PORT:3333');
});
