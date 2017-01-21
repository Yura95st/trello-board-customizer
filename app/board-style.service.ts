import { BoardConfig } from "./board-config";
import { BoardBackground } from "./board-background";

export class BoardStyleService {

    constructor(private styleContainerId: string) {
    }

    applyStyle(boardConfig: BoardConfig) {
        if (!boardConfig) {
            this.removeStyle();
            return;
        }

        let styleContainer = this.getStyleContainer();

        if (!styleContainer) {
            styleContainer = this.createStyleContainer();
        }

        let styleString = this.getStyleString(boardConfig);

        if (styleString != styleContainer.innerText) {
            styleContainer.innerText = styleString;
        }
    }

    removeStyle() {
        let styleContainer = this.getStyleContainer();

        if (styleContainer) {
            document.head.removeChild(styleContainer);
        }
    }

    private getStyleContainer(): HTMLElement {
        return document.getElementById(this.styleContainerId);
    }


    private createStyleContainer(): HTMLElement {
        let styleContainer = document.createElement("style");

        styleContainer.setAttribute("id", this.styleContainerId);

        document.head.appendChild(styleContainer);

        return styleContainer;
    }

    private getStyleString(boardConfig: BoardConfig): string {
        let result = this.getBackgroundStyleString(boardConfig.background);

        return result;
    }

    private getBackgroundStyleString(boardBackground: BoardBackground): string {
        let result = "";

        if (boardBackground) {
            result += "body {";

            if (boardBackground.image) {
                result += `background-image: url(${boardBackground.image}) !important;`;
            }

            if (boardBackground.color) {
                result += `background-color: ${boardBackground.color} !important;`;
            }

            result += "}";
        }

        return result;
    }
}