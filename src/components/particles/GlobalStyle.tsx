import { createGlobalStyle } from 'styled-components';

import normalize from './css/setup/normalize';

import boxSizing from './css/setup/box-sizing';
import offset from './css/setup/offset';
import scrollbar from './css/setup/scrollbar';
import variables from './css/setup/variables';

import anchor from './css/base/anchor';
import article from './css/base/article';
import body from './css/base/body';
import button from './css/base/button';
import code from './css/base/code';
import heading from './css/base/heading';
import html from './css/base/html';
import image from './css/base/image';
import input from './css/base/input';
import main from './css/base/main';
import paragraph from './css/base/paragraph';
import table from './css/base/table';
import video from './css/base/video';

import mailtoui from './css/components/mailtoui';
import slick from './css/components/slick';
import wrapper from './css/components/wrapper';

import badgeGroup from './css/components/badge-group';

import hide from './css/utilities/hide';

const GlobalStyle = createGlobalStyle`
	${normalize};

	${variables};

	${boxSizing};
	${offset};
	${scrollbar};

	${anchor};
	${article};
	${body};
	${button};
	${code};
	${heading};
	${html};
	${input};
	${image};
	${main};
	${paragraph};
	${table};
	${video};

	${mailtoui};
	${slick};
	${wrapper};

	${badgeGroup};

	${hide};
`;

export default GlobalStyle;
