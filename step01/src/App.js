import PropsElement from "./Step01_props";
import PropsWraper from "./Step02_children";
function App() {
  return (
    <>
      <PropsElement name='lee' nickname='바보' />
      <PropsElement name='kim' nickname='멍청이' />
      <PropsElement nickname='변태' />
      <PropsWraper>
        <PropsElement nickname='멍청이' />
      </PropsWraper>
    </>
  );
}

export default App;
