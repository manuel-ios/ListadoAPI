const tabla  =  document.querySelector('#lista-usuario tbody')
function cargarUsuario(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(resp =>{
            console.log(resp)
            let aaa =  resp.game_indices
            console.log(aaa)

        aaa.forEach(element => {
            let row =  document.createElement('tr')
            row.innerHTML =  `
                <td>${element.version.name}</td>
                <td>${element.version.url}</td>
            `  
            tabla.appendChild(row)          
        });
        })
}
cargarUsuario()