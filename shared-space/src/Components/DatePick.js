import React, {useState} from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Link} from 'react-router-dom'

function DatePick () {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    // const [daylist, setDayList] =useState([])
    var daylist=[];
    
    var getDaysArray = function(start, end) {
        var arr=[];
        for(var dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
            arr.push(new Date(dt.getTime() + (5*60+30)*60000));
        }
        // return arr;
        // setDayList(daylist=>[...daylist,arr])
        daylist = arr.map((v)=>v.toISOString().slice(0,10));
        console.log(".......",daylist)

    };

    return(
        <div>
            Pick From and to date for booking
            <div>
                {/* Start Date : */}
                <DatePicker 
                    selected={startDate} 
                    onChange={date => setStartDate(date)} 
                    dateFormat = 'dd/MM/yyyy'
                />
            </div>
            <div>
            {/* End Date : */}
                <DatePicker 
                    selected={endDate} 
                    onChange={date => setEndDate(date)} 
                    dateFormat = 'dd/MM/yyyy'
                    minDate={startDate}
                />
            </div>                          
            { 
            getDaysArray(new Date(startDate),new Date(endDate))
            }
            
            <button ><Link to='/selectslot' state={{usedate:daylist}}>ok</Link></button>

            
        </div>
    );
}



export default DatePick