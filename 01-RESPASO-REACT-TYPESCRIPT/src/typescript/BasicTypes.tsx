


export const BasicTypes=()=>{
    const name:string="pedro";
    const age:number=24
    const isActive:boolean=true;
    const powers:string[]=["React","Nestjs"];
    return (
        <div>
        <h1>
           Tipos basicos
        </h1>
        <h3>
            {name} - {age} -{isActive ? "activo" :"inactivo"}
        </h3>
        <p>
            {powers.join(', ')}
        </p>
         </div>
    )
}