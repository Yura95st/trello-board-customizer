import { Config } from "./config";
import { BoardService } from "./board.service";
import { BoardStyleService } from "./board-style.service";

let boardService = new BoardService(Config.boardConfigStringRegExp, Config.cardContentXPath, Config.boardIdRegExp,
    Config.cardIdRegExp);
let boardStyleService = new BoardStyleService(Config.styleContainerId);

setInterval(() => {
    if (boardService.isBoardUrl(document.URL) || boardService.isCardUrl(document.URL)) {
        let boardConfig = boardService.getBoardConfig();
        boardStyleService.applyStyle(boardConfig);
    }
    else {
        boardStyleService.removeStyle();
    }
}, 1000);