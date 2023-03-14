/**
 * Created by aio on 2023/3/1 10:16
 */

import path from 'path'
import * as url from 'url';
import fs from 'fs'

import { TSDocParser, ParserContext, DocComment } from "@microsoft/tsdoc";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const main = () => {
  const inputFilename: string = path.resolve(
    path.join(__dirname, "..", "dist", "types", 'index.d.ts')
  );

    console.log(inputFilename)
    //
    const inputBuffer: string = fs.readFileSync(inputFilename).toString();

    // NOTE: Optionally, can provide a TSDocConfiguration here
    const tsdocParser: TSDocParser = new TSDocParser();
    const parserContext: ParserContext = tsdocParser.parseString(inputBuffer);
    console.log(parserContext)

  const docComment: DocComment = parserContext.docComment;
};

main()
