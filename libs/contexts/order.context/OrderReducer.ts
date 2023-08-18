import {OrderActionType, OrderType} from "@/libs/types/order_type";
import {LabelType} from "@/libs/types/sleeve_type";

export default function OrderReducer(
	order: OrderType,
	action: OrderActionType
): OrderType {
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

	// ********************************
	// update item label[]
	const {item, rate, neck, sleeve, material} = action;

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
			if (!action.rate?.value) return order;

			return {...order, rate: action.rate?.value};
		}
	}

	// neck case
	switch (neck?.type) {
		case "update": {
			if (!action.neck?.value) return order;

			return {...order, neck: action.neck?.value};
		}
	}

	// sleeve case
	switch (sleeve?.type) {
		case "update": {
			if (!action.sleeve?.value) return order;

			return {...order, sleeve: action.sleeve?.value};
		}
	}

	switch (material?.type) {
		case "update": {
			if (!action.material?.value) return order;

			return {...order, material: action.material?.value};
		}
	}

	return order;
}
