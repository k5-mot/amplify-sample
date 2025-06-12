import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import {Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export const Main: React.FC = () => {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <h1>Welcome, {user?.username}!</h1>
                    <button onClick={signOut}>Sign Out</button>
                    <App />
                </div>
            )}
      </Authenticator>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
