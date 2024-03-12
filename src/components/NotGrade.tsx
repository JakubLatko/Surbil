import "../scss/notification.css";

interface ReactProps {
	value: string;
	subject: string;
	category: string;
	comment: string;
}

export default function NotGrade({
	value,
	subject,
	category,
	comment,
}: ReactProps) {
	return (
		<div className="notification notGrade">
			<div className="colorMarker orange-marker"></div>
			<span className="NotGrade">{value}</span>

			<div className="notificationText">
				<h2 className="notificationTextTop">
					{subject} | {category}
				</h2>
				<h3 className="notificationTextBottom">{comment}</h3>
			</div>
			<a href="/" className="arrowLink">
				<img src="../src/images/arrow-right.svg" alt="" />
			</a>
		</div>
	);
}
