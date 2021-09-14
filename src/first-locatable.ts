// var locatePath = require("locate-path");

type FirstLocatable = (pathList:string[]) => Promise<string|undefined>

// export const firstLocatable:FirstLocatable = locatePath

import * as fs from 'fs';

// /*
export async function firstLocatable(pathList:string[]){
    return pathList.find((path)=>fs.existsSync(path))
};
// */

// export const firstLocatable: FirstLocatable = async ()=>"hola";

// export const firstLocatable: FirstLocatable = async (pathList:string[])=>pathList.filter((path)=>fs.existsSync(path))[0];

// export const firstLocatable: FirstLocatable = async (pathList:string[], opts:any)=>pathList.find((path)=>(opts?.exists || fs.existsSync)(path));