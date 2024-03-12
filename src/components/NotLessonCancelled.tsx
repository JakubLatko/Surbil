import "../scss/notification.css";

interface ReactProps {
	date: string;
	subject: string;
}

export default function NotLessonCancelled({ subject, date }: ReactProps) {
	return (
		<div className="notification notLessonCancelled">
			<div className="colorMarker red-marker"></div>
			<img
				className="notifImage"
				src={"../src/images/lessonCancelled.svg"}
				alt=""
			/>
			<div className="notificationText">
				<h2 className="notificationTextTop">{subject}</h2>
				<h3 className="notificationTextBottom">{date}</h3>
			</div>
			<a href="/" className="arrowLink">
				<img src="../src/images/arrow-right.svg" alt="" />
			</a>
		</div>
	);
}
