import UserProfile from './profile/profile'
import './index.css'

const someOptions = [
    { value : 'test1', label : 'Test 1' }, 
    { value : 'test2', label : 'Test 2' }, 
    { value : 'test3', label : 'Test 3' }, 
]

function App() {
  return (
    <div className="App">
        <UserProfile></UserProfile>
    </div>
  );
}

export default App;
