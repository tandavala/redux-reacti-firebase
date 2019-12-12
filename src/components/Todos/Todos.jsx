import React from "react";
import "firebase/database";
import { useFirebase } from "react-redux-firebase";

const Todos = () => {
  const firebase = useFirebase();
  function addSampleTodo() {
    const sampleTodo = { text: "Sample", done: false };
    return firebase
      .database()
      .ref("todos")
      .set({
        text: sampleTodo.text,
        done: sampleTodo.done
      });
  }
  return (
    <div>
      <h2>new Sample Todo</h2>
      <button onClick={addSampleTodo}>Add</button>
    </div>
  );
};

export default Todos;
