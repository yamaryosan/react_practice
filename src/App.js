import React, { useState } from 'react'
import usePersist from './Persist'
import './App.css';
// import Rect from './Rect';

function AlertMessage(props) {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [age, setAge] = useState(0)
    const [myData, setMyData] = usePersist("mydata", null)

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeMail = (event) => {
        setMail(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const onAction = (event) => {
        const data = {
            name: name,
            mail: mail,
            age: age
        }
        setMyData(data)
    }

    return <div className="alert alert-primary h5 text-primary">
        <h5 className="mb-4">{JSON.stringify(myData)}</h5>
        <div className="form-group">
            <label className="h6">Name</label>
            <input type="text" onChange={onChangeName} className="form-control" />
        </div>
        <div className="form-group">
            <label className="h6">Mail</label>
            <input type="text" onChange={onChangeMail} className="form-control" />
        </div>
        <div className="form-group">
            <label className="h6">Age</label>
            <input type="number" onChange={onChangeAge} className="form-control" />
        </div>
        <button onClick={onAction} className="btn btn-primary">Save it!</button>
    </div>
}

function App() {
    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <AlertMessage />
            </div>
        </div>
    )
}

export default App;
