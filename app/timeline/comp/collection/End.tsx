import React from "react";
import {Divider} from "@mui/material";

type Props = {};

export default function End({}: Props) {
	return (
		<div className="grid grid-cols-1 px-3 py-2 text-zinc-300">
			<div className="px-3 py-2 basis-4/6 border-b pb-4 mb-4 border-zinc-700">
				<div className="py-2">วิธีการชำระเงิน</div>
				<p className="text-xs text-zinc-500 indent-6">
					ชำระเงินในชื่อบัญชี บริษัท Ldawkdan Comp. Ltd. เลขบัญชี
					<span className="font-bold text-zinc-300"> 1 214 123 412 </span>{" "}
					หลังจากโอนแล้ว กรุณาส่งหลักฐานการโอนในไลน์ @LoremID แล้วแจ้งรหัสออกเดอร์
					เพื่อให้แอดมินยืนยัน
				</p>
			</div>

			{/* <Divider className="bg-zinc-700 my-3" /> */}
			<div className="flex justify-between items-center">
				<div className="px-3 py-2 basis-4/6">
					<div className="text-zinc-500">มัดจำ</div>
					{/* <div className="text-xs text-zinc-500">ชำระเสร็จสิ้น</div> */}
					{/* วันที่ 12/2/16 34.34 น. */}
				</div>
				<div className="px-3 py-2 basis-2/6 flex justify-end font-bold">500.-</div>
			</div>

			<div className="flex justify-between items-center">
				<div className="px-3 py-2 basis-4/6">
					<div className="text-zinc-500">มัดจำก่อนผลิต</div>
					{/* <div className="text-xs text-zinc-500">ชำระเสร็จสิ้น</div> */}
					{/* วันที่ 12/2/16 34.34 น. */}
				</div>
				<div className="px-3 py-2 basis-2/6 flex justify-end font-bold">
					1,000.-
				</div>
			</div>

			<div className="flex justify-between items-center">
				<div className="px-3 py-2 basis-4/6">
					<div className="text-zinc-500">ยอดก่อนส่งสินค้า</div>
					{/* <div className="text-xs text-zinc-500">ชำระเสร็จสิ้น</div> */}
					{/* วันที่ 12/2/16 34.34 น. */}
				</div>
				<div className="px-3 py-2 basis-2/6 flex justify-end font-bold">
					1,500.-
				</div>
			</div>

			{/* <Divider className="bg-zinc-700 my-3" /> */}

			<div className="flex justify-between items-center border-t border-zinc-700 pt-4 mt-4">
				<div className="px-3 py-2 basis-4/6">
					<div>ราคารวมทั้งสิ้น</div>
					{/* <div className="text-xs text-zinc-500">ชำระเสร็จสิ้น</div> */}
					{/* วันที่ 12/2/16 34.34 น. */}
				</div>
				<div className="px-3 py-2 basis-2/6 flex justify-end font-bold text-xl">
					3,000.-
				</div>
			</div>
		</div>
	);
}
