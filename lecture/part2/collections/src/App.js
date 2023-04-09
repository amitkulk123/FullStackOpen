import "./App.css";
import Note from "./components/Note.js";

const App = ({ notes }) => {
  /* this will print [1,2,3] */
  // const result = notes.map((note) => note.id);
  // console.log(result);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      {/* alternate form sort of like enumerate in python */}
      {/* <ul>
      {notes.map((note, i) => 
        <li key={i}>
          {note.content}
        </li>
      )}
      </ul> */}
    </div>
  );
};

export default App;
