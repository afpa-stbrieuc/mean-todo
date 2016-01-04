[![Build Status](https://travis-ci.org/afpa-stbrieuc/mean-todo.svg?branch=master)](https://travis-ci.org/afpa-stbrieuc/mean-todo)

#Sample init todo mean app
use mongodb as persistance, nodejs with express/mongoose, Angularjs as frontend

TODO lots of things ^ ^, DELETE/PUT not working


#install
`npm install`
`bower install`

#run
`grunt serve`

#manual tests

`node server.js`

- get all todos
`curl localhost:3000/api/todos`

- create a todo
`curl -XPOST --data "name=todo1" localhost:3000/api/todos`

- update todo 56898aaf6ae5da2e000001
`curl -XPUT --data "todo or not todo" localhost:3000/api/todos/56898aaf6ae5da2e000001`

- delete todo 56898aaf6ae5da2e000001
`curl -XDELETE localhost:3000/api/todos/56898aaf6ae5da2e000001`

