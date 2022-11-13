export function dateForm(dateCreadted:string){
    return computed(()=>{
        const dateform =new Date(dateCreadted).toLocaleString() 
        return dateform.slice(0,dateform.indexOf(","))
    })
}