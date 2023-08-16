import {OrderActionType, OrderType} from "@/libs/types/order_type";
import {LabelType} from "@/libs/types/sleeve_type";

export default function OrderReducer(
	order: OrderType,
	action: OrderActionType
): OrderType {
	if (action.text) {
		const text = action.text;
		return {...order, text: text};
	}

	if (action.material) {
		return {...order, material: action.material};
	}

	if (action.neck) {
		return {...order, neck: action.neck};
	}

	if (action.sleeve) {
		return {...order, sleeve: action.sleeve};
	}

	if (action.item?.get) {
		const {get} = action.item;
		console.log(get);

		return {...order};
	}

	// update option value
	const {option_value} = action;
	if (option_value?.type == "update") {
		const sleeve_price = order.sleeve?.price || 0;
		const neck_price = order.neck?.price || 0;
		const material_price = order.material?.price || 0;
		// sum of option
		const _total = sleeve_price + neck_price + material_price;

		// update order
		return {...order, option_value: _total};
	}

	// update item label[]
	const {item, rate} = action;

	// item case
	switch (item?.type) {
		case "increase": {
			const values = order.sleeve?.label.map((i, k) => {
				if (i.label == item.label?.label) {
					i.amont = i.amont + 1;
				}
				return i;
			});

			return {...order, sleeve: {...order.sleeve, label: values}};
		}

		case "decrease": {
			const values = order.sleeve?.label.map((i, k) => {
				if (i.amont <= 0) return i;

				if (i.label == item.label?.label) {
					i.amont = i.amont - 1;
				}
				return i;
			});

			return {...order, sleeve: {...order.sleeve, label: values}};
		}

		case "onchange": {
			// should return order if value undefined
			if (item.value == undefined) return order;

			const value = parseInt(item.value);

			const values = order.sleeve?.label.map((i, k) => {
				if (i.label == item.label?.label) {
					i.amont = value;
				}
				return i;
			});

			return {...order, sleeve: {...order.sleeve, label: values}};
		}
	}

	// rate case
	switch (rate?.type) {
		case "set": {
			// return {...order, rate: rate.value};
			// console.log(rate);
			if (rate.value == undefined) return order;

			return {...order, rate: rate.value};
		}
	}

	// throw new Error("error");

	// return order;

	return order;
}
