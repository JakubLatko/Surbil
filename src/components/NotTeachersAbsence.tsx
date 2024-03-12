import "../scss/notification.css";

interface ReactProps {
	startDate: string;
	endDate: string;
	teacher: string;
}

export default function NotTeachersAbsence({
	teacher,
	endDate,
	startDate,
}: ReactProps) {
	return (
		<div className="notification notTeachersAbsence">
			<div className="colorMarker yellow-marker"></div>
			<img
				className="notifImage"
				src={"../src/images/absence.svg"}
				alt=""
			/>
			<div className="notificationText">
				<h2 className="notificationTextTop">{teacher}</h2>
				<h3 className="notificationTextBottom">
					{startDate} - {endDate}
				</h3>
			</div>
			<a href="/" className="arrowLink">
				<img src="../src/images/arrow-right.svg" alt="" />
			</a>
		</div>
	);
}
