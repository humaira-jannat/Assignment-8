import { createBrowserRouter } from "react-router-dom"; 
import Root from "../pages/Root/Root"; 
import ErrorPage from "../pages/ErrorPage/ErrorPage"; 
import Home from "../pages/Home/Home";
 import AllApps from "../pages/AllApps/AllApps";
  import MyInstallations from "../pages/MyInstallations/MyInstallations"; 
  import AppDetails from "../pages/AppDetails/AppDetails"; 
  import AppNotFound from "../pages/AppNotFound/AppNotFound";
   // Helper function to simulate delay 
   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

   export const router = createBrowserRouter([
     { path: "/",
       element: <Root />,
        errorElement: <ErrorPage />, 
        children: [
           { index: true, 
            element: <Home />,
             loader: async () => { await delay(2000); 
              // Wait 2 seconds before showing
               return null;
               },
               },
                { path: "all-apps", 
                  element: <AllApps />,
                   loader: async () => 
                    { await delay(2000);
                       return null; 
                      },
                     },
                      { path: "app/:id", 
                        element: <AppDetails />,
                         loader: async () => { await delay(2000);
                           return null;
                           },
                           },
                            { path: "my-installations",
                               element: <MyInstallations />, 
                               loader: async () => { await delay(2000);
                                 return null;
                                 }, 
                                }, {
                                   path: "app-not-found",
                                    element: <AppNotFound />,
                                     loader: async () => { await delay(2000);
                                       return null; 
                                      }, 
                                    }, 
                                  ], 
                                }, 
                              ]); 
                              export default router;