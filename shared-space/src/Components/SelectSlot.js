import React, {useEffect, useState} from "react"
import { connect } from "react-redux";
import { getSeatInfo, updSeatInfo } from "../redux/seat/seatAction"
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import '../style/design.css';

function SelectSlot (props) {

    const {id, seat, dates } = props.seat;
    const leng = props.seat.length
    console.log(leng)
    // const arr = new Array(leng).fill(false)
    const arr1 = [false,false,false,false,false,false,false,false,false,false,false,false]
    const [toggle, setToggle] = useState(arr1)   

    const usedates=useLocation()
    const {usedate} =usedates.state
    
    console.log("toggle......",toggle)  
    // console.log("array......",arr)

    // setTimeout(()=>{ setToggle(arr)
    //     console.log("this........",toggle)
    // },2000);
  
    useEffect(() => {
        props.getSeatInfo()   
      },[]);

      const toggles = (position) => {
        //   setToggle(!toggle[position])
        const updatedtoggleState = toggle.map((item, index) =>
            index === position ? !item : item
        );
        setToggle(updatedtoggleState);   
      }

      const compare = (array1,array2) =>{ 
        for(let i = 0; i < array1.length; i++)
            for(let j = 0; j < array2.length; j++)
                if(array1[i] === array2[j])
                    return true

        return false
      }

      const book = () =>{
        var selseats = [];
        const bookedseats = toggle.map((seat, index) =>
        seat ? selseats.push(index) : ""
        );
        console.log("selseats", selseats)
        selseats.forEach(element => {
            var sdate = usedate.concat(props.seat[element].dates)
            let useats = {id : element+1 , seat : props.seat[element].seat, dates : sdate}
            props.updSeatInfo(useats)
        });

        // usedate.forEach(element => {
        //     var sdate = usedate.concat(props.seat[element].dates)
        //     let useats = {id : element+1 , seat : props.seat[element].seat, dates : sdate}
        //     //props.updSeatInfo(useats)
        // });


      }
 
  
    return(
        <div>
            
            <h2>Seat Details</h2>
            {/* <button onClick={props.getSeatInfo}>click here</button> */}

            <div class="parent">
                {props.seat.map(function(item,idx){
                    console.log(".........",item.dates)
                    return(compare(item.dates,usedate) ? 
                    <div>
                        <button id={idx} disabled className="togglenot">{item.seat}</button>
                    </div>  : 
                            <div>
                                <button id={idx} onClick={()=>toggles(idx)} className= {(toggle[idx] ? 'toggleon':'toggleoff')}>{item.seat}</button>
                            </div>
                           
                    )
                })}
            </div> 

            <button onClick={book}>Book now</button>

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
        getSeatInfo: () => dispatch(getSeatInfo()),
        updSeatInfo: (udata)=>dispatch(updSeatInfo(udata))
    }
}



export default connect (mapStateToProps,mapDispatchToProps)(SelectSlot)