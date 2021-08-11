window.onload = function()
{
    getCovid()
}

function getCovid() {
    fetch('https://api.covid19api.com/summary')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        
        var index = -1;
        var val ="vietnam"
        var findojb = data.Countries.find(function(item,i){
            if ( item.Slug===val){
                index=i;
                return i;
            }
        });
        var list =data.Countries[index]
        var Confirmed= list.TotalConfirmed
        var Deaths= list.TotalDeaths
        var REcovered=list.TotalRecovered
        if(Confirmed!=0){
        document.getElementById('confirmed').innerHTML= Confirmed.toLocaleString("en-US")
        }
        else{
            document.getElementById('confirmed').innerHTML= '------'
        }
        if(Deaths!=0){
            document.getElementById('deaths').innerHTML= Deaths.toLocaleString("en-US")
        }
        else{
            document.getElementById('deaths').innerHTML= '------'
        }
        if(REcovered!=0){
            document.getElementById('recovered').innerHTML= REcovered.toLocaleString("en-US")
        }
        else{
            document.getElementById('recovered').innerHTML= '------'
        }
    })
    .catch(function() {
        console.log("error");
    })
}

