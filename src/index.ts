/**
 * Created by aio on 2023/2/9 17:07
 */

import {add} from "./add";

export const printMessage = (message: string)=>{
    console.log(message)
    const num = add(1,message.length)
    return message + `length = ` + num
}
