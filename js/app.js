import Slider from '../components/Slider';
import Plates from '../components/Plates';
import MyFooter from '../components/MyFooter';

class App extends React.Component {
  constructor(props) {
    super(props);
    let bar = 45;
    let value = 145 - bar;
    let weights = [45, 25, 15, 10, 5, 2.5];
    let plates = this.setPlates(value, weights.map((w) => {
      return { weight: w, count: 0, greater: w * 2 };
    }));

    this.state = { value, plates };
  }

  handleChange(event) {
    let value = parseInt(event.target.value);
    let plates = this.setPlates(value, this.state.plates);

    this.setState({ value, plates });
  }

  setPlates(weight, plates) {
    weight = weight - 45;
    return plates.map((p, i) => {
      p.count = 0;
      while (weight >= p.greater) {
        p.count += 2;
        weight -= p.greater;
      }
      return p;
    });
  }

  render() {
    return (
      <div className="page-wrap">
      	<Slider 
          plates={this.state.plates} 
          value={this.state.value} 
          handleChange={(e) => {this.handleChange(e)}} 
        />
      	<Plates plates={this.state.plates} />
        <MyFooter/>
    	</div>
    )
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);