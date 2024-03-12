import "../scss/notification.css";

interface ReactProps {
	title: string;
	sender: string;
	eventName: string;
}

export default function NotAnnouncement({
	title,
	sender,
	eventName,
}: ReactProps) {
	return (
		<div className="notification notAnnouncement">
			<div className="colorMarker pink-marker"></div>
			<img
				className="notifImage"
				src={"../src/images/announcements.svg"}
				alt=""
			/>
			<div className="notificationText">
				<h2 className="notificationTextTop">{title}</h2>
				<h3 className="notificationTextBottom">{sender}</h3>
			</div>
			<a href="/" className="arrowLink">
				<img src="../src/images/arrow-right.svg" alt="" />
			</a>
		</div>
	);
}
