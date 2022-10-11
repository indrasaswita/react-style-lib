const MainColor
	: {
		default: string,
		primary: string,
		secondary: string,
		success: string,
		danger: string,
		info: string,
		warning: string,
	}
	= {
		default: "#00695c",
		primary: "#4285F4",
		secondary: "#aa66cc",
		success: "#00C851",
		danger: "#ff4444",
		info: "#33b5e5",
		warning: "#ffbb33",
	}

export const VARS
	: {
		default: string,
		primary: string,
		secondary: string,
		success: string,
		danger: string,
		info: string,
		warning: string,

		card: {
			gap: string,
			borderColor: string,
			borderRadius: string,
			backgroundColor: string,
			innerCard: {
				backgroundColor: string,
				borderRadius: string,
			},
		},

		sidebar: {
			width: string,
			borderColor: string,
			backgroundColor: string,
		}
	}
	= {
		default: MainColor.default,
		primary: MainColor.primary,
		secondary: MainColor.secondary,
		success: MainColor.success,
		danger: MainColor.danger,
		info: MainColor.info,
		warning: MainColor.warning,

		card: {
			gap: "calc(8px + .8vw)",
			borderColor: "#002",
			borderRadius: "8px",
			backgroundColor: "#002D",
			innerCard: {
				backgroundColor: "#57f5",
				borderRadius: "6px",
			},
		},

		sidebar: {
			width: "calc(200px + 5vw)",
			borderColor: "#002",
			backgroundColor: "#002D",
		},
	}
