import {Framer} from "@/libs/framer/framer";

export default function OrderSummary({
	totalItems,
	totalPrice,
}: {
	totalItems: number;
	totalPrice: number;
}) {
	return (
		<div className="grid gap-2">
			<div className="grid  gap-3 px-4 py-3 my-4 bg-zinc-900 text-zinc-300 rounded-xl">
				<div className="flex justify-between">
					<div>จำนวนรวม</div>
					<div>{totalItems} ตัว</div>
				</div>
				<div className="flex justify-between">
					<div>ราคารวม</div>
					<div>฿{totalPrice}</div>
				</div>
			</div>
		</div>
	);
}
