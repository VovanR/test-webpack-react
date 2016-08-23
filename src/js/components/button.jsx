/* global React */

class Button extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		const {children} = this.props;

		return (
			<button
				className="button"
				type="button"
				>
				{children}
			</button>
		);
	}
}
Button.propTypes = {
	children: React.PropTypes.any
};
Button.defaultProps = {
	children: 'Click Me!'
};

export default Button;
