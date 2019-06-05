class Plates extends React.Component {
  renderPlate(plate) {
    let plates = [];
    for (let i = 0; i < plate.count / 2; i++) {
      plates.push(
      	<span data-weight={plate.weight}></span>
    	);
    }
    return(plates);
  }
  
  render() {
    let { plates } = this.props;
    return (
      <section>
        <div className="plates-display">
          <div className="plates-left">
            {Array.from(this.props.plates).reverse().map(plate => {
              return this.renderPlate(plate);
            })}
          </div>
          <div className="plates-right">
            {this.props.plates.map(plate => {
              return this.renderPlate(plate);
            })}
          </div>
        </div>
        <div className="plates-list">
          <div>Assuming a {this.props.plates[0].weight} lb. bar.</div>
          <ul>
            {this.props.plates.map(plate => {
              if(plate.count) return(<li>{plate.count} &times; {plate.weight} lb. plates</li>);
              return null;
            })}
          </ul>
        </div>
      </section>
    );
  }
}
  export default Plates;