export interface NotificationJSON {
	events: [
		{
			id: string;
			event: string;
			value: string;
			subject: string;
			category: string;
			comment: string;
		},
		{
			id: string;
			event: string;
			eventName: string;
			title: string;
			sender: string;
		},
		{
			id: string;
			event: string;
			eventName: string;
			subject: string;
			date: string;
		},
		{
			id: string;
			event: string;
			eventName: string;
			type: string;
			subject: string;
			date: string;
		},
		{
			id: string;
			event: string;
			eventName: string;
			teacher: string;
			startDate: string;
			endDate: string;
		},
		{
			id: string;
			event: string;
			prevSubject: string;
			nextSubject: string;
			date: string;
		},
		{
			id: string;
			event: string;
			eventName: string;
			title: string;
			sender: string;
		},
		{
			id: string;
			event: string;
			eventName: string;
			subject: string;
			category: string;
			comment: string;
		}
	];
}
