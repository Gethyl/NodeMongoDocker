use local;

db.runCommand( { create: "TodoList", capped: true, size: 64 * 1024 } );

// show collections;

db.runCommand({insert:"TodoList", documents:[{itemId:1,item:"Gethyl First ToDo in Container", completed:false}]});

// db.TodoList.find()