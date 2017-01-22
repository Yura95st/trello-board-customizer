export class Config {
    static readonly cardContentXPath = "//*[@id='board']/div/div/div[2]/div[1]/div[3]/a/text()";
    
    static readonly boardConfigStringRegExp = /@@boardConfig=({[\s\S]*})/g;

    static readonly styleContainerId = "trello-board-cutomizer-style";

    static readonly boardIdRegExp = /:\/\/trello.com\/b\/([a-zA-Z0-9]*)\//g;

    static readonly cardIdRegExp = /:\/\/trello.com\/c\/([a-zA-Z0-9]*)\//g;
}