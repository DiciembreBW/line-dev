import liff from "@line/liff";
import {Liff} from "@line/liff/exports";

export const line = {
	sendText(value: {type: "text"; text: string}[]) {
		return liff.sendMessages(value).then(() => {
			liff.closeWindow();
		});
	},
};
