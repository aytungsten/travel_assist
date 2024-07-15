import './Hub.css';
import Calendar from 'react-calendar'
import styled from 'styled-components';



function Itinerary() {
    return (
        <div class="wrap2">
            <div class="Rectangle-10">
                <h1>Schedule</h1>
            </div>
            <div class="wrap3">
                <CalendarContainer>
                    <Calendar/>
                </CalendarContainer>
                <div class="Rectangle-11" id='hello'></div>
            </div>

        </div>
    );
}

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 40vw;
  height: 39vh;
  margin: 5vh;
  margin-left: 1vw;
  border-radius: 50px;
  background-color: #7fa8e8;
`;

export default Itinerary