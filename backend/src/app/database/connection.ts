import {createConnection}  from 'typeorm';

createConnection().then(()=>{
  console.log('Database connect ⏫')
}).catch((err)=>{
  console.log(`Error connection database ⏬ ${err} `)
})