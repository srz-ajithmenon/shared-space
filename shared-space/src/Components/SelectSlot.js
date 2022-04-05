import React, {useEffect, useState} from "react"
import { connect } from "react-redux";
import { getSeatInfo } from "../redux/seat/seatAction"
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import '../style/design.css';


function SelectSlot (props) {

    const [toggle, setToggle] = useState(false)
    const {id, seat, dates } = props.seat;
    const leng = props.seat.length

    const usedates=useLocation()
    const {usedate} =usedates.state
    console.log("just.....",usedate)
  
    useEffect(() => {

        props.getSeatInfo() 
        
      },[]);

      const toggles = () => {
          setToggle(!toggle)
      }
 
  
    return(
        <div>
            
            <h2>Seat Details</h2>
            {/* <button onClick={props.getSeatInfo}>click here</button> */}

            <div class="parent">
                {props.seat.map(function(item,idx){
                    return(
                        <div><button onClick={toggles} className= {(toggle ? 'toggleon':'toggleoff')}>{item.seat}</button></div>
                    )
                })}
            </div> 
        </div>
    )
}

const mapStateToProps = state => {
    return{
        seat: state.seatInfo.seat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSeatInfo: () => dispatch(getSeatInfo())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(SelectSlot)