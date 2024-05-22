import React, {useState} from "react";

function myComponent(){
    const [name, setName] = useState("Shahriar");
    const [age, setAge] = useState(23);
    const [maritalStatus, setIsMarried] = useState(false);

    const updateName = (value)=>{
            setName(value);
    }

    const increamentAge = ()=>{
            setAge(age+1);
    }
    const decreamentAge = ()=>{
        setAge(age-1);
    }

    const toggle = ()=>{
        setIsMarried(!maritalStatus);
    }
    const styles = {
        height: "100vh",
        width: "100%",
        backgroundColor: "#213d4f",
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
    }
    const button ={
        
    }
    return(<div style={styles}>
        <h2>Example of UseState()</h2>
        <p>Name: {name}</p> 
        {<button className="button" onClick={()=>updateName("Towfique")}>Change Name</button>}
        <p>Age: {age}</p> 
        <br></br>
        {<button className="button" onClick={()=>increamentAge()}>Increament Age</button>}<br></br>
        {<button className="button" onClick={()=>decreamentAge()}>Decreament Age</button>}
        <p>Is he married: {maritalStatus ? "Yes":"No"}</p> 
        {<button className="button" onClick={()=>toggle()}>Change Status</button>}
    </div>);
}
export default myComponent;