const SharedDataContext = React.createContext();

function Parent() {
  const [sharedData, setSharedData] = useState("Hello");

  return (
    <SharedDataContext.Provider value={{ sharedData, setSharedData }}>
      <ChildA />
      <ChildB />
    </SharedDataContext.Provider>
  );
}

function ChildA() {
  const { sharedData, setSharedData } = useContext(SharedDataContext);
  return (
    <div>
      <p>Child A: {sharedData}</p>
      <button onClick={() => setSharedData("Hello from A")}>Update</button>
    </div>
  );
}

function ChildB() {
  const { sharedData, setSharedData } = useContext(SharedDataContext);
  return (
    <div>
      <p>Child B: {sharedData}</p>
      <button onClick={() => setSharedData("Hello from B")}>Update</button>
    </div>
  );
}
