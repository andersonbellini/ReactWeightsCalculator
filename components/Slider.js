export default class Slider extends React.Component {
  render() {
    let { handleChange, value } = this.props;
    return (
      <div className="weight-slider">
        <h2>How Many Plates Do You Need?</h2>
        <input type="range" min="5" max="600" step="5"
            value={this.props.value}
            onChange={this.props.handleChange}
        />
        <div>{this.props.value} lbs.</div>           
      </div>
    );
  }
};