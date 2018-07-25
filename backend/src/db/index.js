import loki from 'lokijs';
import Todo from '../models/todo';
import { pick, extend } from 'lodash';

const TODOS_COLLECTION = 'todos';

const db = new loki('./todos.db', {
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

function databaseInitialize() {
  let todos = db.getCollection(TODOS_COLLECTION);

  if (!todos) {
    console.log('Create todos')
    todos = db.addCollection(TODOS_COLLECTION);
    todos.insert(new Todo("Todo 1"));
    todos.insert(new Todo("Todo 2"));
    todos.insert(new Todo("Todo 3"));
  }
}

export const todos = () => {
  const col = db.getCollection(TODOS_COLLECTION);

  return {
    getAll: () => col.find({}).map(mapTodo),
    get,
    add,
    update,
    del,
  }

  function get(id) {
    return mapTodo(col.get(id));
  }

  function add(body) {
    const {
      text,
      completed,
    } = body;

    if (text) {
      return mapTodo(col.insert(new Todo(text, completed)));
    }
  }

  function update(id, body) {
    const updates = pick(body, ['text', 'completed']);
    const todo = col.get(id);

    if (todo) {
      return mapTodo(col.update(extend({}, todo, updates)));
    }
  }

  function del(id) {
    const todo = col.get(id);

    if (todo) {
      return col.remove(todo);
    }
  }
};

const mapTodo = (todo) => {
  if (todo) {
    return extend(
      {},
      { id: todo.$loki },
      pick(todo, ['text', 'completed'])
    );
  }
}

export default db;
