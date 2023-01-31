import Button from "./components/button";
import img from './assets/homepage.png'
function App() {
  return (
      <>
         <Button variant="blue" textElement='All' imgElement={img} />
         <Button variant="blue" textElement='Txt' imgElement={img} />
         <Button variant="black" textElement='Allfdasf' imgElement={img} />
         <Button variant="black" textElement='Allfdasf' imgElement={img} />
      </>
  );
}   

export default App;
