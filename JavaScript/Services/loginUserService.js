class UserLoginService
{
    static url = "http://localhost:3000/users"

    static async loginDetails({params: {username, password}})
    {
        const res = await axios.get(`${this.url}?username=${username}&password=${password}`);
        console.log(res)
        return res
    }
}

export default UserLoginService