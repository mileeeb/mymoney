const uselocalstorage=()=>{}
interface Data{
    id:string,
    name:string,
    monthly:{
        budget:number,
        expense:number
    },
    yearly:{
        budget:number,
        expense:number
    },
    goal:{
        budget:number,
        income:number
    }
}