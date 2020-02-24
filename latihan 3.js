fetch ('https://swapi.co/api/people')
.then(response => response.jason())
.then(function(response) {
    let name = []
    response ['results'].forEach((res) => {
        if(res.height >= 150 && res.hair_color.match(/brown/g)) {
            NamedNodeMap.push(res.name)
        }
    })
    console.log(name);
}).catch(err =>{
    console.log(err)
});