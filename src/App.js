import ChannelBar from './components/Channelbar';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className="flex ">
      <SideBar/>
      <ChannelBar/>
      <ContentContainer/>
    </div>
  );
}

export default App;
