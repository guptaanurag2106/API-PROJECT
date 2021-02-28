function showData(){
    var para1=document.getElementById("data1");
    var site="http://api.weatherstack.com/current?access_key=YOUR-ACCESS-KEY&query=";
    var city=document.getElementById("city").value;
    var url=site.concat(city);
    var img;
    function def(data){
        document.getElementById("image").src=data.current.weather_icons
        
        console.log(data)
        para1.innerHTML="City: "+data.location.name+"<br>Temperature: "+data.current.temperature+"<sup>o</sup>C<br>"+"Feels like: "+data.current.feelslike+"<sup>o</sup>C<br>Humidity: "+data.current.humidity;
    }
    fetch(url).then(response => response.json()).then(data =>def(data)).catch(res => alert("CITY NOT FOUND!! PLEASE ENTER A VALID CITY"));

}

function showNews(){
    var no_of_headlines=15;
    var url2 = "http://api.mediastack.com/v1/news?access_key=YOUR-ACCESS-KEY&sources=cnn,bbc";
    
    function def1(data1){
        console.log(data1)
        for (var i=0;i<no_of_headlines;i++){
	    var link=data1.data[i].url;
	    var headline=(i+1).toString()+'.  '+data1.data[i].title+'<br><br>';
	    document.getElementById("headlines").innerHTML+="<a href="+link+" target='_blank'>"+headline+"</a>";            
	}
         
    }
    fetch(url2)
        .then(response => response.json()).then(data1 => def1(data1))
  
}
