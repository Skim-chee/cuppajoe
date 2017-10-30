import { style, media } from 'typestyle';

namespace styles {
	export const container = style(
		{
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			marginTop: '48px'
		},
		media({ minWidth: 0, maxWidth: 640 }, { marginTop: '32px' })
	);
	export const logoLink = style({
		alignSelf: 'center'
	});
	export const logoImg = style({
		height: '148px'
	});
}

export default styles;
