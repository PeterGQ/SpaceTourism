import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [visible, setVisible] = useState(false);
  const handle = (item: string) => {};
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handle} />
      {visible && <Alert>Alert</Alert>}
      <Button color="danger" onClick={() => setVisible(true)}>
        button
      </Button>
    </div>
  );
}

export default App;
