import { VARS } from "./variables"

const getThemeColor
	: (theme: string) => string
	= (theme: string) => {
		switch (theme) {
		case "default":
			return VARS.default
		case "primary":
			return VARS.primary
		case "secondary":
			return VARS.secondary
		case "danger":
			return VARS.danger
		case "success":
			return VARS.success
		case "info":
			return VARS.info
		case "warning":
			return VARS.warning
		default:
			return "#777";
		}
	}

export default getThemeColor