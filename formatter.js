  const formatOutput=(result)=>{
     let largestDes=0
   result.forEach(i=>{
      let headers=Object.keys(i)
      largestDes=Math.max(...(headers.map(desc=>desc.length)))
     
      let values = Object.values(i)
      console.log("_".repeat(largestDes*2))
      
   
      headers.forEach((h,indx)=>{
          let spacing=' '.repeat(largestDes-(h.length)+2)
          console.log(`${h}:${spacing}${JSON.stringify(values[indx])}`)
      })
       
   })
}