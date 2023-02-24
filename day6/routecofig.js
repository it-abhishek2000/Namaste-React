
routecofig = [
    {
      path:"/",
      element:<MainApp />,
      errorElement:<ErrorComponent/>,
      children:[
        
        {
          path:"search",
          element:<SearchBar/>
        },
        {
          path:"info",
          element:<AllCard Data={example}/>
        }
      ]
    },
    {
      path:"/teaminfo/:id",
      element:<TeamInfo/>
    },
    {
      path:"/about",
      element:<AboutUs/>
    },
   
  ];