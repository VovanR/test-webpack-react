/* global React ReactDOM document */

require('styles/styles');

import Button from 'components/button';

(function () {
	'use strict';

	const button = <Button onClick={click}/>;

	ReactDOM.render(button, document.getElementById('app'));

	function click() {
		document.body.classList.toggle('blue', !document.body.classList.toggle('green'));
	}
})();
