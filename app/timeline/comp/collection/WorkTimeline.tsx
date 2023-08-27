"use client";
import styled from "@emotion/styled";
import {
	Check,
	DeliveryDining,
	DeliveryDiningOutlined,
	DrawOutlined,
	PrecisionManufacturing,
	PrecisionManufacturingOutlined,
	StartOutlined,
} from "@mui/icons-material";
import {
	Step,
	StepButton,
	StepConnector,
	StepIcon,
	StepIconProps,
	StepLabel,
	Stepper,
	StepperContext,
	SvgIcon,
	makeStyles,
	stepConnectorClasses,
} from "@mui/material";
import {root} from "postcss";
import React, {useState} from "react";
import {
	useCollectionContext,
	useCollectionDispatchContext,
} from "../../context/collection.context/CollectionReducer";

type Props = {};

const steps = ["Read", "สรุปแบบ", "ผลิต", "จัดส่ง"];

// mui custom
// https://mui.com/system/getting-started/the-sx-prop/#borders
// https://mui.com/material-ui/react-stepper/#api

export default function WorkTimeline({}: Props) {
	const app = useCollectionContext();
	const dispatch = useCollectionDispatchContext();

	const [state, setState] = useState<number>(0);

	function add() {
		if (app.status == 4) return;
		dispatch({
			status: {
				type: "onchange",
				value: app.status + 1,
			},
		});
	}

	function minus() {
		if (app.status <= 0) return;
		dispatch({
			status: {
				type: "onchange",
				value: app.status - 1,
			},
		});
	}

	return (
		// <>
		// </>
		<div className="px-3 py-2  ">
			<div className=" text-zinc-600 text-sm px-2 py-1">Order No. aj1234a</div>
			{/* 
			<pre>{JSON.stringify(app.status, null, 3)}</pre>
			<div className="m-1">
				<button onClick={add} className="px-3 py-2 border rounded">
					+
				</button>
			</div>

			<div className="m-1">
				<button onClick={minus} className="px-3 py-2 border rounded">
					-
				</button>
			</div> */}
			<Stepper
				activeStep={app.status}
				alternativeLabel
				className="px-3 py-2"
				connector={<QontoConnector />}>
				{steps.map((label, index) => (
					<Step key={index} className="">
						<StepLabel StepIconComponent={MyIcon} />
					</Step>
				))}
			</Stepper>
		</div>
	);
}

function MyIcon(props: StepIconProps) {
	const {active, completed, className, icon} = props;

	return (
		<>
			{!completed && (
				<>
					{active && (
						<div className="text-lime-400 ring w-8 h-8 rounded-full flex justify-center items-center ring-lime-400">
							<IconCondition props={props} />
						</div>
					)}

					{!active && (
						<div className="ring w-8 h-8 rounded-full flex justify-center items-center ring-zinc-400 text-zinc-400">
							<IconCondition props={props} />
						</div>
					)}
				</>
			)}
			{completed && (
				<div className="text-lime-400 ring w-8 h-8 rounded-full flex justify-center items-center ring-lime-400">
					<IconCondition props={props} />
				</div>
			)}
		</>
	);
}

const QontoConnector = styled(StepConnector)(({theme}) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 14,
		left: "calc(-50% + 16px)",
		right: "calc(50% + 16px)",
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: "#A3E635",
			borderWidth: 2,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: "#A3E635",
			borderWidth: 2,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: "#A1A1AA",
		// theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
		borderWidth: 2,
		// borderBottomWidth: 3,
		// borderRadius: 1,
	},
}));

function IconCondition({props}: {props: StepIconProps}) {
	const {active, completed, className, icon} = props;
	return (
		<>
			{icon == 1 && <>{/* <StartOutlined /> */}S</>}
			{icon == 2 && <>{/* <DrawOutlined /> */}X</>}
			{icon == 3 && <>{/* <PrecisionManufacturingOutlined /> */}P</>}
			{icon == 4 && <>{/* <DeliveryDiningOutlined /> */}D</>}
		</>
	);
}
