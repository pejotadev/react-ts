import { useUi } from '../../stores/UiContext';
import { useUser } from '../../stores/UserContext';
import Button from '../utils/Button';

const Header = () => {
  const { setDark } = useUi();
  const { data } = useUser();
  
  if(!data) return null;

  return (
  <div className='flex'>
    <Button onClick={() => setDark((b: boolean) => !b)}>
      Modo
    </Button>
    nome: {data.nome}
  </div>
  );
};

export default Header;
