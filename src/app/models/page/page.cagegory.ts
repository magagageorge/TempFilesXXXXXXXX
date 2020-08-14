export class PageMainCategory{
    id:number;
    category:string;
    image:string;
    sub_categories:PageCategory[];
}

export class PageCategory{
    id:number;
    name:string;
    item:any;
}



