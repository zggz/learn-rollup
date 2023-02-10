/**
 * Created by aio on 2023/2/10 10:17
 */
import React from "react";

import { createRoot } from "react-dom/client";
import ShowTitle  from "./src/index";

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ShowTitle message="测试" value={12} />);
