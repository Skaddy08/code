import SportsService from "../Services/SportsService.js";

$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const sportsId = urlParams.get('id');
    SportsService.getSportsDetailsbyId(sportsId)
    .then((response)=>{
        SportsService.getSportsDetailsbyId(sportsId)

        let sportsdata = response.data;
        console.log(sportsdata);
        // Set the image source using jQuery
        $(".about-img").attr("src",sportsdata.sports_poster); 
        $(".about-sports-name").text(sportsdata.match);
        $(".about-sports-date").text(sportsdata.date);
        $(".about-sports-venue").text(sportsdata.place);
        $(".about-sports-time").text(sportsdata.time);
        $(".about-sports-des").text(sportsdata.about); 
        $(".about-sports-terms").text(sportsdata.terms_and_conditions);
        
       
  

       
    }).catch((error)=>{
        console.log(error);
    })
})





