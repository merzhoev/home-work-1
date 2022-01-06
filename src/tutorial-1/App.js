import './App.css';
import ProfileFn from './components/ProfileFn';
import ProfileClass from './components/ProfileClass';

function App() {
  return (
    <div className="App">
      <div className="profile">
        <ProfileFn name="Alex" registredAt={new Date(2001, 8, 3)} />
        <ProfileClass name="Вася" registredAt={new Date(2021, 1, 22)} />
      </div>
    </div>
  );
}

export default App;