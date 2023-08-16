"use client";
import {Primary, Secondary} from "@/libs/components/Button";
import PreviewAppContext from "@/libs/components/PreviewAppContext";
import {
	useAppContext,
	useAppDispatchContext,
} from "@/libs/contexts/app.context/AppContext";
import {UserProfileType} from "@/libs/contexts/app.context/AppReducer";
import Request from "@/libs/utilities/Request";
import React, {useEffect, useState} from "react";

type Props = {};

export default function ProfilePage({}: Props) {
	const app = useAppContext();
	const dispatch = useAppDispatchContext();
	const [user, setUser] = useState<UserProfileType>({
		displayName: "",
		email: "",
		pictureUrl: "",
		statusMessage: "",
		tel: "",
		userId: "",
		address: "",
	});

	useEffect(() => {
		// intial user value
		setUser((value) => {
			return {...value, ...app.user};
		});
	}, [app.user]);

	function update() {
		if (user.userId == undefined) {
			throw new Error("No user ud");
		}

		// update user
		Request.updateUserProfile({id: user.userId, data: user}).then((res) => {
			// update app context
			dispatch({
				user: {
					type: "update",
					user,
				},
			});
		});
	}
	return (
		<div className="flex flex-col gap-6 justify-center items-center">
			<div className="w-6/12">
				<img
					src={user?.pictureUrl}
					className="rounded-full aspect-square "
					alt=""
				/>
			</div>

			<div>
				<div className="text-3xl">{app.user?.displayName}</div>
			</div>

			<div className="form px-3 py-2 grid  grid-cols-1 w-full gap-3 rounded-lg ">
				<div>
					<label htmlFor="" className="text-neutral-400">
						อีเมลล์
					</label>
					<input
						type="text"
						className="p-2 w-full border"
						placeholder="example@mail.com rounded"
						value={user?.email}
						onChange={(e) => {
							setUser((value) => {
								return {...value, email: e.target.value};
							});
						}}
					/>
				</div>

				<div>
					<label htmlFor="" className="text-neutral-400">
						เบอร์โทรศัพท์
					</label>
					<input
						type="text"
						className="p-2 w-full border rounded"
						placeholder="090-000-0000"
						value={user?.tel}
						onChange={(e) => {
							setUser((value) => {
								return {...value, tel: e.target.value};
							});
						}}
					/>
				</div>

				<div>
					<label htmlFor="" className="text-neutral-400">
						ที่อยู่
					</label>
					<input
						type="text"
						className="p-2 w-full border rounded"
						placeholder="address"
						value={user?.address}
						onChange={(e) => {
							setUser((value) => {
								return {...value, address: e.target.value};
							});
						}}
					/>
				</div>

				<div className="flex justify-center px-3 py-2">
					<Primary onclick={() => update()}>บันทึก</Primary>
					<Secondary onclick={() => {}}>ย้อนกลับ</Secondary>
				</div>
			</div>
		</div>
	);
}
