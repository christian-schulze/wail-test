import { useEffect, useState } from 'react';
import { GetWorkingDir } from '../wailsjs/go/main/App';

function App() {
  const [url, setUrl] = useState('');
  useEffect(() => {
    (async () => {
      const workingDir = await GetWorkingDir();
      setUrl(`${workingDir}/frontend/offlineWebsite/nested/index.html`);
    })();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
      }}
    >
      <iframe
        src={url}
        style={{
          flexGrow: 1,
          height: '100%',
          border: 'none'
        }}
      />
    </div>
  );
}

export default App;
