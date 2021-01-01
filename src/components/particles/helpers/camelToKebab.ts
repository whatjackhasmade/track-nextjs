export const camelToKebab = (input: string) => {
	return input.replace(/([a-z])([A-Z])/g, `$1-$2`).toLowerCase();
}

export default camelToKebab