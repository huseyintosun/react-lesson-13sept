import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { sellPhone } from '../redux/actions/actions'

function PhoneComp(props) {
    const [number, setNumber] = useState(1)
    const numberOfPhones = useSelector((state)=>state.phone.numberOfPhones)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h2>Phones --Hooks--</h2>
            <h3>Number of phones : <span className="number">{numberOfPhones}</span></h3>
            <input type="number" name="" id="" value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(sellPhone(number))}>Sell Laptop</button>
        </div>
    )
}

export default PhoneComp
