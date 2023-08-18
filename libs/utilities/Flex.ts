import liff from "@line/liff";
import {UserProfileType} from "../contexts/app.context/AppReducer";

// https://www.youtube.com/watch?v=W3yaHEqysqo
const Flex = {
	send: async ({
		data,
		userName,
	}: {
		data: any[];
		userName: string | undefined;
	}) => {
		// console.log("send");
		// window.alert("send");
		return liff
			.sendMessages([
				{
					type: "flex",
					altText: "alt text",
					contents: {
						type: "bubble",
						direction: "ltr",
						header: {
							type: "box",
							layout: "vertical",
							contents: [
								{
									type: "text",
									text: "ออเดอร์",
									align: "start",
									// "contents": []
								},
								{
									type: "text",
									text: "kw64sa",
									weight: "bold",
									size: "3xl",
									align: "start",
									margin: "sm",
									// "contents": []
								},
								{
									type: "text",
									text: userName || "Username",
									color: "#B5B5B5FF",
									// "contents": []
								},
								{
									type: "separator",
									margin: "lg",
								},
							],
						},
						body: {
							type: "box",
							layout: "vertical",
							contents: [
								{
									type: "box",
									layout: "vertical",
									contents: [
										// // start
										// {
										// 	type: "box",
										// 	layout: "horizontal",
										// 	contents: [
										// 		{
										// 			type: "text",
										// 			text: "xl",
										// 			weight: "bold",
										// 			// "contents": []
										// 		},
										// 		{
										// 			type: "text",
										// 			text: "6 ตัว",
										// 			color: "#a7a7a7ff",
										// 			align: "end",
										// 			// "contents": []
										// 		},
										// 	],
										// },

										// // end
										...data,
									],
								},
							],
						},
						footer: {
							type: "box",
							layout: "horizontal",
							contents: [
								{
									type: "button",
									action: {
										type: "uri",
										label: "Button",
										uri: "https://linecorp.com",
									},
								},
							],
						},
					},
				},
			])
			.then(() => liff.closeWindow());
	},
};

export default Flex;
