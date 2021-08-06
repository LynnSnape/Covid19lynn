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
        document.getElementById('confirmed').innerHTML= list.TotalConfirmed
        document.getElementById('deaths').innerHTML= list.TotalDeaths
        document.getElementById('recovered').innerHTML= list.TotalRecovered
    })
    .catch(function() {
        console.log("error");
    })
}

