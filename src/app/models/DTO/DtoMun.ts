export interface DtoMun {
    total_count: number,
    results: ResultMun[]
}
export interface ResultMun {
    mun_name: string,
    geo_point_2d: geoRef
}
export interface geoRef{
    lon:number,
    lat:number

}