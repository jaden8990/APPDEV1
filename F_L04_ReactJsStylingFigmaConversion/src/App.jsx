
import { useState } from "react";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
    const [currentScreen, setCurrentScreen] = useState("login");

    return currentScreen === "login" ? (
        <Login onSignup={() => setCurrentScreen("signup")} />
    ) : (
        <SignUp onLogin={() => setCurrentScreen("login")} />
    );
}

export default App;
