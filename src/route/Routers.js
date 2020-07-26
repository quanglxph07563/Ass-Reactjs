import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
import LayoutClinet from '../pages/layouts/LayoutClinet';
import TrangChu from '../pages/views/Client/TrangChu';
import ShowProducts from '../pages/views/Admin/Products/ShowProduct';
import AddProduct from '../pages/views/Admin/Products/AddProduct';
import EditProduct from '../pages/views/Admin/Products/EditProduct';



const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                {/* <Dashboard /> */}
                            </Route>
                            <Route path='/admin/products' exact>
                               <ShowProducts/>
                            </Route>
                            <Route path='/admin/add-product' exact>
                              <AddProduct/>
                            </Route>
                            <Route path='/admin/:id' exact>
                              <EditProduct/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutClinet>
                        <Switch>
                            <Route path="/" exact>
                             <TrangChu/>
                            </Route>
                            <Route path="/about">
                                {/* <About /> */}
                            </Route>
                        </Switch>
                    </LayoutClinet>
                </Route>
            </Switch>
        </Router>
    )
}


export default Routers
