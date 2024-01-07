class IndexService


{   

    
    static url = "http://localhost:3000";

    //Movies
    
    static async getmoviesDetails(){
       
        let response = await axios.get(this.url + "/" + "movies");
        return response.data;

    }

    static async getmoviesDetailsbyId(id){
        return await axios.get(this.url + "/" + "movies"+"/"+id);
    }


    //Events
    
    static async getEventsDetails()
    {
        let response = await axios.get(this.url + "/" + "events");
        return response.data;
    }
    
    
    static async getEventsDetailsbyId(id)
    {
        return await axios.get(this.url + "/" + "events"+"/"+id);
         
    }

    

    
    

}
export default IndexService;