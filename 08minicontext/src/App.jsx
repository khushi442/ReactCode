
import UserContextProvider from "./context/userContextProvider";
import userContext from "./context/userContext";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
 
  return (
    <>
      <UserContextProvider>
        <p> Hello Khushi! How are you felling today.All is good.</p>
           <Login/>
           <Profile/>

      </UserContextProvider>
    </>
  );
}

export default App
