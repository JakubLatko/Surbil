import data from "../events.json";

import NotMessage from "./NotMessage";
import NotGrade from "./NotGrade";
import NotLessonCancelled from "./NotLessonCancelled";
import NotTeachersAbsence from "./NotTeachersAbsence";
import NotAttendance from "./NotAttendance";
import NotLessonChange from "./NotLessonChange";
import NotAnnouncement from "./NotAnnouncement";
import NotTimetable from "./NotTimetable";

import type { NotificationJSON } from "src/types/notification";
import "../scss/notification.css";

export default function Notification() {
	let array: JSX.Element[] = [];
	//let data:NotificationJSON = dataJSON;
	data.events.forEach((event) => {
		switch (event.event) {
			case "message":
				if (!event.sender || !event.title || !event.eventName) return;
				array.push(
					<NotMessage
						eventName={event.eventName}
						sender={event.sender}
						title={event.title}
						key={event.id}></NotMessage>
				);
				break;
			case "grade":
				if (
					!event.value ||
					!event.subject ||
					!event.category ||
					!event.comment
				)
					return;
				array.push(
					<NotGrade
						value={event.value}
						subject={event.subject}
						category={event.category}
						comment={event.comment}
						key={event.id}></NotGrade>
				);
				break;
			case "lessonCancelled":
				if (!event.subject || !event.date || !event.eventName) return;
				array.push(
					<NotLessonCancelled
						subject={event.subject}
						date={event.date}
						key={event.id}></NotLessonCancelled>
				);
				break;
			case "teachersAbsence":
				if (
					!event.teacher ||
					!event.startDate ||
					!event.endDate ||
					!event.eventName
				)
					return;
				array.push(
					<NotTeachersAbsence
						teacher={event.teacher}
						startDate={event.startDate}
						endDate={event.endDate}
						key={event.id}></NotTeachersAbsence>
				);
				break;
			case "attendance":
				if (
					!event.date ||
					!event.subject ||
					!event.type ||
					!event.eventName
				)
					return;
				array.push(
					<NotAttendance
						type={event.type}
						date={event.date}
						subject={event.subject}
						eventName={event.eventName}
						key={event.id}></NotAttendance>
				);
				break;
			case "lessonChange":
				if (!event.prevSubject || !event.nextSubject || !event.date)
					return;
				array.push(
					<NotLessonChange
						date={event.date}
						nextSubject={event.nextSubject}
						prevSubject={event.prevSubject}
						key={event.id}></NotLessonChange>
				);
				break;
			case "announcement":
				if (!event.title || !event.sender || !event.eventName) return;
				array.push(
					<NotAnnouncement
						title={event.title}
						sender={event.sender}
						eventName={event.eventName}
						key={event.id}></NotAnnouncement>
				);
				break;
			case "timetable":
				if (
					!event.eventName ||
					!event.subject ||
					!event.category ||
					!event.comment
				)
					return;
				array.push(
					<NotTimetable
						eventName={event.eventName}
						subject={event.subject}
						category={event.category}
						comment={event.comment}
						key={event.id}></NotTimetable>
				);
				break;
			default:
				break;
		}
	});

	return (
		<div className="notificationWrapper">
			{array.map((event, index) => {
				return event;
			})}
		</div>
	);
}
