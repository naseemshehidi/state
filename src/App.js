import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    person: {
      fullName: 'Nassim Chehidi',
      bio: 'Most Handsome Man Alive',
      imgSrc: 'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/285176276_798710248174382_7886230449444767897_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8li8a9hN9B4AX9NvyNK&_nc_ht=scontent.ftun15-1.fna&oh=00_AfBzb2_0LxYnrwF6N3D8yWrOJ5RwDsTVVr67PbxywwzJWA&oe=64005526',
      profession: 'Developer',
    },
    shows: false,
    mountedTime: new Date(),
    intervalId: null,
  };

  toggleShows = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="container">
        <button onClick={this.toggleShows}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="card">
            <img src={person.imgSrc} alt={person.fullName} />
            <div className="info">
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <p className="profession">{person.profession}</p>
            </div>
          </div>
        )}
        <p className="mounted-time">Mounted at: {mountedTime.toLocaleString()}</p>
      </div>
    );
  }
}

export default App;
