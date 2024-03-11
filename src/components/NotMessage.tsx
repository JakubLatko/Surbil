import "../scss/notification.css";
import Message from "../images/messages.png";
interface ReactProps {
	title: string;
	sender: string;
}

export default function NotMessage({ title, sender }: ReactProps) {
	return (
		<a href="/">
			<div className="colorMarker"></div>
			<img src={"../src/images/messages.png"} alt="" />
			<div>
				<h1>{title}</h1>
				<h2>{sender}</h2>
			</div>
		</a>
	);
}
