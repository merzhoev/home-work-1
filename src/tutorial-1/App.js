import './App.css';
import ProfileFn from './components/ProfileFn';
import ProfileClass from './components/ProfileClass';

function App() {
  return (
    <div className="App">
      <div className="profile">
        <ProfileFn name="Alex Margarin" registredAt={new Date(2001, 7, 3)} />
        <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      </div>
    </div>
  );
}

export default App;