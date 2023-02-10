/**
 * Created by aio on 2023/2/10 14:21
 */

import React from "react";
import {add} from "./utils/add";

export const ShowTitle = ({message, value}:{message: string,value: number}) => {

    return <section>
        <h1>显示字符串的长度</h1>
        {add(message.length, value)}
    </section>;
}


