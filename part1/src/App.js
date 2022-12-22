const Hello = (props) => {  
  return (    
    <div>      
      <p>Name {props.name}</p>   
      <p>Age {props.age}</p>
    </div>  
  )
}

const App = () => {
  const name = 'Amit'
  const age = 20

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>  
      <Hello name="asdf" age={10}/>  
      <Hello name="fdf" age={10}/>  
      <Hello name="oji" age={10}/>  
      <Hello name="oi" age={10}/>  
      <Hello name="jiwojero" age={10}/>  
      <Hello name="woierj" age={10}/>  
      <Hello name="" age={10}/>  
      <Hello name="" age={10}/>  
      <Hello name="" age={10}/>  
      <Hello name="" age={10}/>  
    </div>
  )
}

export default App

