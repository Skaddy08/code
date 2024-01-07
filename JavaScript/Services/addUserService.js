
class UserService {
    static url = "http://localhost:3000/users";

    static async addUserDetails(user) {
        // post api to insert record
        const res = await axios.post(this.url, user);
        console.log(res);
        return res;
    }

    static async getUserDetails() {
        // to fetch data from url --get API
        return await axios.get(this.url);
    }
    ///can to get user details bye id in session storage 
    static async getuserDetailsbyID(id){

        return await axios.get(this.url+"/"+id);

    }
}
export default UserService;