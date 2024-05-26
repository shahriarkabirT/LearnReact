import Card from './Card/CardController.jsx'
 import Parants from './Props/Parants.jsx'
  import Greet from './Conditional_Rendaring/Parant.jsx'
  import List from './Lists/App.jsx'
  import ClickEvent from './ClickEvent/App.jsx'
  import Hook from './Hook/App.jsx'
  import OnChangeEvent from './OnChangeEvent/onChange.jsx'
  import ColorPicker from './ColorPicker/colorPicker.jsx'
  import ToDoApp from './ToDoApp/ToDoApp.jsx'
  import Clock from './DigitalClock/clock.jsx'
function App() {
  return (
    <>
    <div className="Wrapper">
    <Greet></Greet>
    <Card></Card>
    <Parants></Parants>
    <List></List>
    <ClickEvent></ClickEvent>
    <Hook></Hook>
    <OnChangeEvent></OnChangeEvent>
    <ColorPicker></ColorPicker>
    <ToDoApp></ToDoApp>
    <Clock></Clock>

    </div> </>
  )
}

export default App
