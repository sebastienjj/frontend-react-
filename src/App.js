
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
// import { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";
// import People from "../pages/People";
// import Show from "../pages/Show";

// function Main(props) {

//   return (
//     <main>
//       <Switch>
//         <Route exact path="/">
//           <People/>
//         </Route>
//         <Route
//           path="/people/:id"
//           render={(rp) => (
//             <Show
//               {...rp}
//             />
//           )}
//         />
//       </Switch>
//     </main>
//   );
// }

// export default Main;
