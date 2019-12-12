import React from "react";
import "firebase/database";
import {
  useFirebase,
  useFirebaseConnect,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Todos = () => {
  const firebase = useFirebase();
  useFirebaseConnect([
    "todos" // {path: '/todos' } // object notation
  ]);
  const todos = useSelector(state => state.firebase.ordered.todos);

  if (!isLoaded(todos)) {
    return <div>Loading the list....</div>;
  }
  if (isEmpty(todos)) {
    return <div>Todos List is Empty</div>;
  }

  function addSampleTodo() {
    const sampleTodo = {
      text: "Apbrindo a nossa agencia de programacao",
      done: true
    };
    console.log("salvando...");
    /* return firebase
      .database()
      .ref("todos")
      .set({
        text: sampleTodo.text,
        done: sampleTodo.done
      });*/
    return firebase.push("todos", sampleTodo);
  }
  return (
    <div>
      <h2>new Sample Todo</h2>
      <button onClick={addSampleTodo}>Add</button>

      <ul>
        {Object.keys(todos).map((key, id) => (
          <li key={key}>{todos[key].value.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
