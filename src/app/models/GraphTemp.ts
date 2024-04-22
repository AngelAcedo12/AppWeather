export interface GraphTemp{
    name:string,
    series:dataSeries[]
}

interface dataSeries {
    name:string,
    value:number
}