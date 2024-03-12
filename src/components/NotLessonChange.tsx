import "../scss/notification.css";

interface ReactProps {
	prevSubject: string;
	nextSubject: string;
	date: string;
}

export default function NotLessonChange({
	prevSubject,
	nextSubject,
	date,
}: ReactProps) {
	return (
		<div className="notification notLessonChange">
			<div className="colorMarker darkgreen-marker"></div>
			<img
				className="notifImage"
				src={"../src/images/timetable.svg"}
				alt=""
			/>
			<div className="notificationText">
				<h2 className="notificationTextTop">{prevSubject}</h2>
				<h3 className="notificationTextBottom">
					{nextSubject} | {date}
				</h3>
			</div>
			<a href="/" className="arrowLink">
				<img src="../src/images/arrow-right.svg" alt="" />
			</a>
		</div>
	);
}
