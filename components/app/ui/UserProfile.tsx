import {Framer} from "@/libs/framer/framer";

type UserType = {
	id: string;
	name: string;
	email: string;
	picture: string;
};
export default function UserProfile({user}: {user: UserType}) {
	return (
		<Framer.AnimatePop>
			<div className="flex justify-between p-2 ring gap-2">
				<div className="basis-3/6 bg-zinc-200 rounded aspect-square">image</div>
				<div className="basis-full">
					<div>{user.name}</div>
					<div>{user.id}</div>
				</div>
			</div>
		</Framer.AnimatePop>
	);
}
