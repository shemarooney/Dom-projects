let myTable = [
    {'name':'Michael', 'age':'30', 'birthdate':'11/10/1989'},
    {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
    {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
]

$('th').on('click', function(){
    let column=$(this).data('column')
    let order=$(this).data('order')
    let text=$(this).html()
    text = text.substring(0, text.length -1)

    console.log('Row was clicked', column, order)

    if(order=='desc'){
        $(this).data('order', 'asc')
        myTable=myTable.sort((a,b)=>a[column] > b[column]? 1 : -1)
        text+= '&#9660'
    }else{
        $(this).data('order', 'desc')
        myTable=myTable.sort((a,b)=>a[column] < b[column]? 1 : -1)
        text+= '&#9650'
    }

    $(this).html(text)
    buildTable(myTable)
})

buildTable(myTable)

function buildTable(data){
    let table=document.getElementById('myTable')
    table.innerHTML=''

    for(let i=0; i<data.length; i++){
        let row=`
                <tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].age}</td>
                    <td>${data[i].birthdate}</td>
                </tr>
                `
        table.innerHTML+=row
    }
}