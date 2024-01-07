class Events{
    //getter and setter

    set eventID(event_ID)
    {
        this._event_id = event_ID;
    }

    //naming convention
    

    set eventName(event_name)
    {
        this._event_name = event_name;
    }
    set venue(event_venue)
    {
        this._venue = event_venue;
    }

    set eventDate(event_date)
    {
        this._date = event_date;
    }
    set eventTime(event_time)
    {
        this._time = event_time;
    }

    set eventPoster(event_poster)
    {
        this._event_poster = event_poster;
    }





    

    get eventID(){
        return this._event_id;
    }
    get eventName(){
        return this._event_name;
    }
    get venue(){
        return this._venue;
    }
    get eventDate(){
        return this._date;
    }
    get eventTime(){
        return this._time;
    }
    get eventPoster(){
        return this._event_poster;
    }

}
export default Events;