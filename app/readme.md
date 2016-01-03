##tests

- get all todos
`curl localhost:3000/api/todos`

- create a todo
`curl -XPOST --data "name=todo1" localhost:3000/api/todos`

- update todo 56898aaf6ae5da2e000001
`curl -XPUT --data "name=todo1" localhost:3000/api/todos/56898aaf6ae5da2e000001`

- delete todo 56898aaf6ae5da2e000001
`curl -XDELETE localhost:3000/api/todos/56898aaf6ae5da2e000001`


