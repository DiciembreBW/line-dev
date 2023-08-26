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

type Props = {};

const steps = ["Read", "สรุปแบบ", "ผลิต", "จัดส่ง"];

// mui custom
// https://mui.com/system/getting-started/the-sx-prop/#borders
// https://mui.com/material-ui/react-stepper/#api

export default function WorkTimeline({}: Props) {
	const [state, setState] = useState<number>(0);

	function next() {
		// console.log(steps.length);
		if (steps.length == state) return;

		setState(state + 1);
	}

	function previous() {
		if (state == 0) return;
		setState(state - 1);
	}

	return (
		<>
			<Stepper
				activeStep={state}
				alternativeLabel
				className=""
				connector={<QontoConnector />}>
				{steps.map((label, index) => (
					<Step key={index} className="">
						{/* <StepButton>sda</StepButton> */}
						{/* <StepConnector s /> */}
						<StepLabel StepIconComponent={MyIcon} />
						{/* <span className="flex justify-center my-2">{state}</span> */}
					</Step>
				))}
			</Stepper>

			{/* <button className="px-3 py-2 m-1 border" onClick={previous}>
				Left
			</button>
			<button className="px-3 py-2 m-1 border" onClick={next}>
				Right
			</button> */}
		</>
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
			{icon == 1 && (
				<>
					<StartOutlined />
				</>
			)}

			{icon == 2 && (
				<>
					<DrawOutlined />
				</>
			)}
			{icon == 3 && (
				<>
					<PrecisionManufacturingOutlined />
				</>
			)}
			{icon == 4 && (
				<>
					<DeliveryDiningOutlined />
				</>
			)}
		</>
	);
}
