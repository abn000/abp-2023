import highcharts from "highcharts"

function auth() {
    var token = ""
    if (window.location.hash) {
        token = window.location.hash.substring(window.location.hash.search(/=/)+1)
        console.log(token)
    }
    else {
        window.location.replace("https://cog.auth.eu-north-1.amazoncognito.com/oauth2/authorize?client_id=3t00csdo6c7u2ler390ihdoldu&response_type=token&scope=email+openid&redirect_uri=https%3A%2F%2Fec2-16-170-250-165.eu-north-1.compute.amazonaws.com")
    }

    return (token)

}

const token = auth()
const data = await fetch(`/api.php?token=${token}&id=2`).then((resp) => resp.json())

const data_prepared = data.map((row) => [Date(row["time"]), parseInt(row["value"])])

console.log(data)


const ctx = document.getElementById('myChart');

const chart = new highcharts.Chart('myChart', {
    'chart': {
        'type': 'line',
        'title': {
            'text': 'Mediciones'
        }
    },
    'xAxis': {
        'type': 'datetime',
        'title': {
            'text': 'Momento'
        }
    },
    'series': [{
        'data': data_prepared
    }]
})