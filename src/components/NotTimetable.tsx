import "../scss/notification.css";

interface ReactProps {
	eventName: string;
	subject: string;
	category: string;
	comment: string;
}

export default function NotTimetable({
	eventName,
	category,
	comment,
	subject,
}: ReactProps) {
	return (
		<div className="notification notTimetable">
			<div className="colorMarker lightgreen-marker"></div>
			<img
				className="notifImage"
				src={"../src/images/timetable.svg"}
				alt=""
			/>
			<div className="notificationText">
				<h2 className="notificationTextTop">
					{subject}

					{category}
				</h2>
				<h3 className="notificationTextBottom">{comment}</h3>
			</div>
			<a href="/" className="arrowLink">
				<img src="../src/images/arrow-right.svg" alt="" />
			</a>
		</div>
	);
}
