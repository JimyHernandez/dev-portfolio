function App() {
  const myVar = <h1>Hello World!</h1>
  const classVar = 'something'
  const myString = <h1 className={classVar}>{myVar}</h1>
  return myString
}

export default App