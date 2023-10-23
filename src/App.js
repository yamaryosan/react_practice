import React, { useState } from 'react'
import './App.css';
// import Rect from './Rect';

const total = (a) => {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}

const tax = (a) => {
  return Math.floor(a * 1.1);
}

function useCalc(num=0, func = (a)=>{return a}) {
  const [msg, setMsg] = useState(null)

  const setValue = (p) => {
    let res = func(p)
    setMsg(<p className="h5">※{p}の結果は、{res}です。</p>)
  }

  return [msg, setValue]
}

// 和を求めて表示
function AlertMessage(props) {
  const [msg, setCalc] = useCalc(0, total)

  const onChange = (event) => {
    setCalc(event.target.value)
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange} min="0" max="10000" className="form-control" />
  </div>
}

// 税込価格を求めて表示
function CardMessage(props) {
  const [msg, setCalc] = useCalc(0, tax)

  const onChange = (event) => {
    setCalc(event.target.value)
  }

  return <div className="card p-3 h5 border-primary">
    <h5>{msg}</h5>
    <input type="range" onChange={onChange} min="0" max="10000" step="100" className="form-control" />
  </div>
}

// ベースコンポーネント
function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  )
}

export default App;
