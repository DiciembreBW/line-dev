import {useAppContext, useAppDispatchContext} from "@/context/app/AppReducer";
import {ItemType} from "@/context/app/type";
import {Menu, MenuItem} from "@mui/material";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import React from "react";

type Props = {children: React.ReactNode; value: ItemType};

export default function MenuListItem({children, value}: Props) {
	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	const router = useRouter();
	const pathname = usePathname();

	// app descsctructering
	const {id: appId} = app;

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// removeItem
	function handleRemoveItem() {
		// console.log("remmove");
		dispatch({
			items: {
				type: "remove",
				value,
			},
		});

		handleClose();
	}

	// edit item
	function handleEditItem() {
		// router.push(`${window.location.href}/${value.id}`);
		router.push(`${pathname}/${value.id}`);
	}

	function resetItem() {
		dispatch({
			items_lists: {
				type: "reset",
				id: value.id,
			},
		});

		handleClose();
	}

	return (
		<div>
			<button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}>
				{children}
			</button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				<MenuItem onClick={resetItem}>
					{/* <Link href={`/workspace/${appId}/lists/${value.id}`}>แก้ไข</Link> */}
					{/* <Link href={`${window.location.href}/${value.id}`}>แก้ไข{value.id}</Link> */}
					รีเซ็ท
				</MenuItem>
				{/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
				<MenuItem onClick={handleRemoveItem}>ลบ</MenuItem>
			</Menu>
		</div>
	);
}
