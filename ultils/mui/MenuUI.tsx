import Button from "@/components/ui/Button";
import {useAppDispatchContext} from "@/context/app/AppReducer";
import {ItemType} from "@/context/app/type";
import {Menu, MenuItem} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import React from "react";

type Props = {children: React.ReactNode; item: ItemType};

export default function MenuUI({children, item}: Props) {
	const router = useRouter();
	const pathName = usePathname();
	const dispatch = useAppDispatchContext();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function handleRemove() {
		dispatch({
			items: {
				type: "remove",
				value: item,
			},
		});

		// handleClose();
		// router.back();
		// back to list
		const path = pathName.split("/");
		path.pop();
		router.push(path.join("/"));
	}

	function handleReset() {
		dispatch({
			items_lists: {
				type: "reset",
				id: item.id,
			},
		});

		handleClose();
	}

	return (
		<div>
			<button onClick={handleClick}>{children}</button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				<MenuItem onClick={handleRemove}>ลบ</MenuItem>
				<MenuItem onClick={handleReset}>รีเซ็ต</MenuItem>
				{/* <MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem> */}
			</Menu>
		</div>
	);
}
