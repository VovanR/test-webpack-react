/* global React ReactDOM document */

require('styles/styles');

import Button from 'components/button';

(function () {
	'use strict';

	const button = <Button>Hello World!</Button>;

	ReactDOM.render(button, document.getElementById('app'));
})();
