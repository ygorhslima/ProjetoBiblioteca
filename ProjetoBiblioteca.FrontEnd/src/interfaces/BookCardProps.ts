export default interface BookCardProps{
    codigo:number;
    titulo:string;
    autor:string;
    area:string;
    ano:number;
    editora:string;
    onDelete:(codigo:number)=>void;
    onPut:(codigo:number)=>void;
};
