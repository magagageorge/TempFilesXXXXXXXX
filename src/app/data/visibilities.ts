import { Visibility } from '@models/visibility';

export const Visibilities:Visibility[]=[
{code:'Everyone',icon:'fa fa-globe',text:'Everyone'},
{code:'Network',icon:'fa fa-connectdevelop',text:'My Network'},
{code:'OnlyMe',icon:'fa fa-lock',text:'Only Me'},
];


const ICONS:any=[];
ICONS['Everyone']='fa fa-globe';
ICONS['Network']='fa fa-connectdevelop';
ICONS['OnlyMe']='fa fa-lock';

export const VISIBILITY_ICONS:any=ICONS;
