var express = require('express'),
    app = express();
var axios = require('axios');



app.set('view engine', 'hbs');

app.get('/weather',(req,res)=>{

    axios.get('https://api.darksky.net/forecast/6a4bc641996966192c9f84788495fc35/39.952583,-75.165222')       // 39.952583, -75.165222
    .then((response) => {
        console.log(response.data.currently.temperature);
        console.log(response.data.daily.summary);
        res.render('weather.hbs',{temp:response.data.currently.temperature,weather:response.data.daily.summary});
    })
    .catch(error => {
    console.log(error);
    }); 
  
})


app.listen(3000,function(){
        console.log("server running @ loal host:3000");
})


//6a4bc641996966192c9f84788495fc35