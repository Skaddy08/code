class User
{
    set userName(userName)
    {
        this._userName=userName;
    }
    set userNumber(userNumber){
        this._userNumber=userNumber;
    }
    set userhistory(userhistory){
        this._userhistory;

    }
    set favArtistArray(favArtistArray){
        this._favArtistArray;
    }
    set favGenreArray(favGenreArray){
        this._favGenreArray;
    }

    set email(email)
    {
        this._email=email;
    }
    set userFullName(userFullName)
    {
        this._userFullName=userFullName;
    }
    
    set date_of_birth(date_of_birth)
    {
        this._date_of_birth=date_of_birth;
    }
    set password(password)
    {
        this._password=password;
    }
    set favArtist(favArtist)
    {
        this._favArtist=favArtist;
    }
    set favGenre(favGenre)
    {
        this._favGenre=favGenre;
    }
    set id(id)
    {
        this._id=id;
    }
    get userhistory(){
        return this._userhistory
    }
    get favArtistArray(){
        return this._favArtistArray
    }
    get favGenreArray(){
        return this.favGenreArray;
    }
    get userName()
    {
        return this._userName;
    }
    get userNumber(){
        return this._userNumber;
    }
    get email()
    {
        return this._email;
    }
    get userFullName()
    {
        return this._userFullName;
    }
    get date_of_birth()
    {
        return this._date_of_birth;
    }
    get password()
    {
        return this._password;
    }
    get favArtist()
    {
        return this._favArtist;
    }
    get favGenre()
    {
        return this._favGenre;
    }
    get id()
    {
        return this._id;
    }

}
export default User;