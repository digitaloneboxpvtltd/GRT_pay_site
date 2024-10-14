import './App.css';
import BuyNowPage from './Components/BuyNow_Page/BuyNowPage';
import Home from './Components/Home/Home';
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import LearnNowPage from './Components/LearnNow_Page/LearnNow_Page';


const router = createBrowserRouter([
  {path:"/",
  element:<Layout/>,
  children:[
    {path:"",
      element:<Home/>,
    },
    {path:"Buy_Now",
      element:<BuyNowPage/>
    },
    {path:"Learn_Now",
      element:<LearnNowPage/>
    },
  ]
}
])

function App() {
  return (
    <div className='top_container'>
     {/* image for the background */}
     {/* <img src='./site_Background.png' alt="background" className='main_background' /> */}

     <img src='./green-abstract-background_new.jpg' alt="background" className='main_background' />
      <RouterProvider router={router}/>
    </div>


  );
}

export default App;
