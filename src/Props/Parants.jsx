import Student from './Student.jsx'
function Parants(){
    const styles = {
        height: "100vh",
        backgroundColor: "#211a2e",
        width: "100%",
        textAlign: "center",
    }
    return(
       <>
        <div style={styles}>
            <h2>This is the example of props:</h2>
            <p>The value is coming from another JSX file and it is accessed by props property</p>
        <Student name="Shahriar" age = {23} isStudent ={false}/>
        <Student name="Shipon" age = {25} isStudent ={true}/>
        </div>
       </>
    );
}

export default Parants