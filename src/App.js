import { Explorer } from "./component/Explorer";
import { files } from "./data";
import "./styles.css";
//create a file explorer
export default function App() {
  return (
    <div className="App">
      <Explorer data={files} />
    </div>
  );
}
