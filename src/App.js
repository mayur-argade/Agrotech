import Amplify, {API} from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Home from './Pages/Home'
import Dashboard from "./Pages/Dashboard";
import { useEffect } from "react";

Amplify.configure(config);

function App() {

  return (
    <div className="App">
      <Home />
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default withAuthenticator(App);
