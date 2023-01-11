let me = {name: 'alfonso'};
console.log(me);

let name = 'alfonso';
console.log(name);

//const { fstat } = require("fs")
const { data } = require("jquery")
const fs = require("fs")
const { zip } = require("lodash")
const { Z_STREAM_END } = require("zlib")
const x = fs.readFileSync('/root/customers/data.csv', 'utf-8')


let y = x.split("\n") // separamos por salto de linea
y = y.map( x => x.split(",")) // separamos cada linea por coma (,)



 oYEEEEE, NO 
z = y.map(l => l[2])

z.shift()


zset = new Set(z)
arr = Array.from(zset)

//console.log(arr) // Y ya aca conseguimos la ciudades unicas

arr = arr.filter(x => x != undefined)

console.log(`Unique cities with at least one customer:\n${arr.length}`)


//A continuacion seria filtrar las ciudades que esten como "Undefined"
//Luego es sacar el length, y ese deberia ser el resultado.



https://app.codesignal.com/live-interview/P9LD7bmsEnFdxvyjg?userRole=candidate