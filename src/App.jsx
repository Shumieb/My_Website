import Student from "./Student"

function App() {
  return (
    <>
      <Student name="My name" age={30} isStudent={true}/>
      <Student name="My name2" age={32} isStudent={false}/>
      <Student name="My name3" age={34} isStudent={true}/>
      <Student name="My name4" age={35} isStudent={false}/>
      <Student/>
    </>    
  )
}

export default App
