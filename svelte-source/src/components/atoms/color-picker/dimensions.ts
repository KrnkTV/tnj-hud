export const dimensions = {
	hsl: {
		h: {extent: [0, 360], scale: 1, title: 'hue'},
		s: {extent: [0, 100], scale: 100, title: 'saturation'},
		l: {extent: [0, 100], scale: 100, title: 'luminance'},
	},
	
	hcl: {
		h: {extent: [0, 360], scale: 1, title: 'hue'},
		c: {extent: [0, 150], scale: 1, title: 'chroma'},
		l: {extent: [0, 100], scale: 1, title: 'luminance'},
	},

	lab: {
		l: {extent: [0, 100], scale: 1, title: 'L'},
		a: {extent: [-160, 160], scale: 1, title: 'a'},
		b: {extent: [-160, 160], scale: 1, title: 'b'},
	},
	
	rgb: {
		r: {extent: [0, 255], scale: 1, title: 'red'},
		g: {extent: [0, 255], scale: 1, title: 'green'},
		b: {extent: [0, 255], scale: 1, title: 'blue'},
	},
}

export function getDimension(specifier) {
	let [scale, dim] = specifier.split('.', 2)
	return {
		scale,
		dim,
		data: dimensions[scale][dim]
	}
}