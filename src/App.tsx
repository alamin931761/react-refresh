import { Suspense } from "react";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <Suspense fallback={<h3>Loading users...</h3>}>
        <Users />
      </Suspense>
    </div>
  );
};

export default App;
