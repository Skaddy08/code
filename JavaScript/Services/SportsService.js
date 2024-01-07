// import Sports from "../Models/sports.js"

class SportsService
{   
    static url = "http://localhost:3000/sports";


    static async getSportsDetails()
    {
        let response = await axios.get(this.url )
        return response.data;
    }
    static async getSportsDetailsbyId(id){
        return await axios.get(this.url+"/"+id);
    }


}
export default SportsService;