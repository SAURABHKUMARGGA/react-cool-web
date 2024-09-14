import "./App.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {red} from '@mui/material/colors';
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">
        Hello world! <FavoriteIcon sx={{color:red[700]}}/>
      </h1>
    </>
  );
}

export default App;
