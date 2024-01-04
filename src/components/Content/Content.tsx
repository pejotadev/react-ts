import { useUi } from '../../stores/UiContext';
import { useUser } from '../../stores/UserContext';

const Content = () => {
  const { dark } = useUi();
  const { data, loading } = useUser();

  if(loading) return <p>Loading...</p>;
  if(!data) return null;

  return (
    <div
      style={{
        height: '400px',
        color: dark ? '#fff' : '#222',
        backgroundColor: dark ? '#222' : '#fff',
      }}
    >
      <h3>Preferencias</h3>
      <p>Playback: {data.preferencias.playback}</p>
    </div>
  );
};

export default Content;
