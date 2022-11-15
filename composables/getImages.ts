export default function(id:string , styling?:string){
    if(id){
        return "https://board.humm.world/assets/"+id+styling
    }else{
        return "/images/HimeIcons/group.png"
    }
}