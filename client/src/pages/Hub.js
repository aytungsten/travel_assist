import './Hub.css';
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import Itinerary from './Itinerary';
import Creation from './Creation';

function click() {
    return (
        <Itinerary>

        </Itinerary>
    )
}

function Hub() {
    return (

        <div>
                <div id="searchbar">
                    <input placeholder='Origin'></input>
                    <input placeholder='Destination'></input>
                    <input  type='date' placeholder='From'></input>
                    <input  type='date' placeholder='To'></input>
                    <Link to ="/creation" className='addbutton'></Link>
                </div>
                <div className='left'>
                    <h1> All Itineraries</h1>
                </div>
                <div className='wrap' id ='distant'>
                    <Link to="/itinerary" className='itineraries'></Link>
                    <Link to="/itinerary" className='itineraries'></Link>
                    <Link to="/itinerary" className='itineraries'></Link>
                    <Link to="/itinerary" className='itineraries'></Link>

                </div>
                <Outlet></Outlet>
        </div>
    );
}

export default Hub