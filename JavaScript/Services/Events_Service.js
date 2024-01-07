import Events from "../Models/events.js"

class EventsService
{
    static url = "http://localhost:3000/events";


    static async getEventsDetails()
    {
        let response = await axios.get(this.url )
        return response.data;
    }
    static async getEventsDetailsbyId(id){
        return await axios.get(this.url+"/"+id);
    }
}



export default EventsService;