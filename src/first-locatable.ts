// var locatePath = require("locate-path");


export type Intercepter = (exist:(path:string)=>Promise<boolean>, path:string)=>Promise<boolean>

export type FirstLocatable = (pathList:string[], opts?:{intercept:Intercepter}) => Promise<string|undefined>

// export const firstLocatable:FirstLocatable = locatePath

// var fs = require('fs').promises;
import {promises as fs}  from 'fs';
// import * as fs  from 'fs';


export async function firstLocatable(pathList:string[], opts?:{intercept:Intercepter}){
    return pathList.find(async function(path){
        try{
            await fs.stat(path)
            return true;
        }catch(err){
            // @ts-ignore 
            if(err.code=='ENOENT'){
                return false;
            }
            throw err;
        }
    })
};

// */

// export const firstLocatable: FirstLocatable = async (pathList:string[])=>pathList.find((path)=>fs.existsSync(path));

// export const firstLocatable: FirstLocatable = async ()=>"hola";

// export const firstLocatable: FirstLocatable = async (pathList:string[])=>pathList.filter((path)=>fs.existsSync(path))[0];

// export const firstLocatable: FirstLocatable = async (pathList:string[], opts:any)=>pathList.find((path)=>(opts?.exists || fs.existsSync)(path));