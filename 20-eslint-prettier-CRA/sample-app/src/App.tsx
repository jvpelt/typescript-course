import React from 'react'
import logo from './logo.svg'
import './App.css'

interface Props {
  label: string
}
const SomeOtherComponent: React.FC<Props> = ({label}): JSX.Element => <div>{label}</div>

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <SomeOtherComponent label="row 1" />
        <SomeOtherComponent label="row 2" />
        <SomeOtherComponent label="row 3" />
        <SomeOtherComponent label="row 4" />
        <SomeOtherComponent label="row 5" />
      </header>
    </div>
  )
}
