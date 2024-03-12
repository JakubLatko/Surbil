import "../scss/notification.css";

interface ReactProps {
	date: string;
	subject: string;
	type: string;
	eventName: string;
}

export default function NotAttendance({
	subject,
	date,
	type,
	eventName,
}: ReactProps) {
	return (
		<div className="notification notAttendance">
			<div className="colorMarker purple-marker"></div>
			<img
				className="notifImage"
				src={"../src/images/lessonCancelled.svg"}
				alt=""
			/>
			<div className="notificationText">
				<h2 className="notificationTextTop">{type}</h2>
				<h3 className="notificationTextBottom">
					{subject} | {date}
				</h3>
			</div>
			<a href="/" className="arrowLink">
				<img src="../src/images/arrow-right.svg" alt="" />
			</a>
		</div>
	);
}
