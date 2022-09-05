const $responseText = document.getElementById('response-text');
const $btn = document.getElementById('btn-request');
const $input = document.getElementById('input-query')

const getInfo = (query)=>{
    
    fetch(`http://localhost:3000/api/${query}`)
    .then(res => res.json())
    .then(json =>{
        $responseText.innerText='['
        json.forEach(item =>{
            $responseText.innerText += template(item);


        })
        $responseText.innerText+=']'
    })

}

const template =(item)=>{
    return `
   {
      "idItem":  ${item.idItem} , 
      "nombre":  ${item.nombre} , 
      "descripcion":  ${item.descripcion} ,
      "precio":  ${item.precio} ,
      "stock":  ${item.precio} ,
      "category":  ${item.category} ,
      "urlImg":  ${item.urlImg} ,
    },
   
`
} 

$btn.addEventListener('click',()=>{

    getInfo($input.value)
})
