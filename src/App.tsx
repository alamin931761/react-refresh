import { Suspense } from "react";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div>
      <Suspense fallback={<h3>Loading posts...</h3>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default App;
