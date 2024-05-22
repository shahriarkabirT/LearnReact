import Card from './Card/CardController.jsx'
 import Parants from './Props/Parants.jsx'
  import Greet from './Conditional_Rendaring/Parant.jsx'
  import List from './Lists/App.jsx'
  import ClickEvent from './ClickEvent/App.jsx'
  import MyComponent from './Hook/UseStateHook/myComponent.jsx'
  import OnChangeEvent from './OnChangeEvent/onChange.jsx'
  import ColorPicker from './ColorPicker/colorPicker.jsx'
function App() {
  return (
    <>
    <div className="Wrapper">
    <Greet></Greet>
    <Card></Card>
    <Parants></Parants>
    <List></List>
    <ClickEvent></ClickEvent>
    <MyComponent></MyComponent>
    <OnChangeEvent></OnChangeEvent>
    <ColorPicker></ColorPicker>
    </div> </>
  )
}

export default App
