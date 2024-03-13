import { announcementData } from "src/scripts/announcements";
announcementData.forEach((element) => console.log(element.title));
import "../scss/announcement.css";

export default function AnnouncementsComponent() {
	return (
		<main className="main-announcements">
			{announcementData.map((element) => {
				return (
					<div className="announcement" key={element.id}>
						<h2 className="announcement__title">{element.title}</h2>
						<div className="announcement__info">
							<div className="announcement__sender">
								<img src="../src/images/announcement-person.svg" />
								<h3>{element.sender}</h3>
							</div>
							<div className="announcement__date">
								<img src="../src/images/announcement-date.svg" />
								<h3>{element.date}</h3>
							</div>
						</div>
						<p className="announcement__content">
							{element.content}
						</p>
					</div>
				);
			})}
		</main>
	);
}
