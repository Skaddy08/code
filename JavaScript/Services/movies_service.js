class movies{
    static url ="http://localhost:3000/movies";

    static async getmoviesDetails(){
       
        return await axios.get(this.url);

    }
    static async getmoviesDetailsbyId(id){
        return await axios.get(this.url+"/"+id);
    }
}

export default movies