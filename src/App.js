import { useContext, useEffect } from "react";
import { Hompage } from "./components/Hompage";
import { GlobalContext } from "./context/GlobalContext";
function App() {

  let { renderQuestions } = useContext(GlobalContext)
  useEffect(() => {
    renderQuestions()
  }, [])


  return (
    <Hompage />
  );
}

export default App;
