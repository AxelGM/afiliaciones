export function sortNombres(a, b){
    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
    return 0;
}
