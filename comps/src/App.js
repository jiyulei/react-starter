import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  const handleOnClick = () => {
    console.log("clicked!");
  }
  
  return (
    <div>
      <div className="text-3xl font-bold underline">hello world</div>
      <div>
        <Button success rounded onClick={handleOnClick} className="mb-5">
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Order
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Checkout
        </Button>
      </div>
      <div>
        <Button danger outline>
          Order
        </Button>
      </div>
    </div>
  );
}

export default App;
