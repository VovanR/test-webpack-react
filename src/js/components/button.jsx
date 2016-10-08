/* global React */

class Button extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	shouldComponentUpdate() {
		return false;
	}

	handleClick() {
		this.props.onClick();
	}

	render() {
		const {children} = this.props;

		return (
			<button
				className="button"
				type="button"
				onClick={this.handleClick}
				>
				{children}
			</button>
		);
	}
}
Button.propTypes = {
	children: React.PropTypes.any,
	onClick: React.PropTypes.func.isRequired
};
Button.defaultProps = {
	children: 'Click Me!'
};

export default Button;
