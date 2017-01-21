import { BoardConfig } from './board-config';
export class BoardService {
    constructor(private boardConfigStringRegExp: RegExp, private cardContentXPath: string,
        private boardIdRegExp: RegExp) {
    }

    getBoardConfig(): BoardConfig {
        let boardConfig: BoardConfig;
        let regExp = new RegExp(this.boardConfigStringRegExp);

        for (let content of this.getCardsContent()) {
            let match = regExp.exec(content);

            if (match) {
                try {
                    boardConfig = JSON.parse(match[1]);
                    break;
                }
                catch (e) {
                    continue;
                }
            }
        }

        return boardConfig;
    }

    isBoardUrl(url: string): boolean {
        let regExp = new RegExp(this.boardIdRegExp);

        return regExp.test(url);
    }

    private getCardsContent(): string[] {
        let content = [];

        let result = document.evaluate(this.cardContentXPath, document, null, XPathResult.ANY_TYPE, null);

        let element = result.iterateNext();

        while (element) {
            content.push(element.textContent);
            element = result.iterateNext();
        }

        return content;
    }

    private getCardsContentByClassName(cardTitleClassName: string): string[] {
        let content = [];

        let nodes = document.getElementsByClassName(cardTitleClassName);
        for (let i in nodes) {
            let node: any = nodes[i];

            content.push(node.innerText);
        }

        return content;
    }
}