class Sports{
    //getter and setter

    set sportsID(sports_ID)
    {
        this._sports_id = sports_ID;
    }

    //naming convention
    set match(match)
    {
        this._match = match;
    }
    set place(place)
    {
        this._place = place;
    }

    set date(date)
    {
        this._date = date;
    }
    set time(time)
    {
        this._time = time;
    }

    set sportsPoster(sports_poster)
    {
        this._sports_poster = sports_poster;
    }







    get sportsID(){
        return this._sports_id;
    }
    get match(){
        return this._match;
    }
    get place(){
        return this._place;
    }
    get date(){
        return this._date;
    }
    get time(){
        return this._time;
    }
    get sportsPoster(){
        return this._sports_poster;
    }

}
export default Sports;