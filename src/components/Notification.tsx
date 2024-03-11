import data from "../events.json";
import NotMessage from "./NotMessage";
import NotMessageAstro from "./NotMessageAstro.astro";

export default function Notification() {
	let array: JSX.Element[] = [];
	data.events.forEach((event, index) => {
		if (event.event === "message") {
			if (!event.sender || !event.title) return;
			array.push(
				<NotMessage
					sender={event.sender}
					title={event.title}
					key={event.id}></NotMessage>
			);
		}
	});

	return (
		<>
			{/* <img src={"../src/images/messages.png"} /> */}
			{array.map((event, index) => {
				return event;
			})}
		</>
	);
}
