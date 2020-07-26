import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
import LayoutClinet from '../pages/layouts/LayoutClinet';
import TrangChu from '../pages/views/Client/TrangChu';
// //Admin
// import Dashboard from '../pages/views/Admin/Dashboard'
// import ProductsManager from '../pages/views/Admin/Products'

// //Views
// import About from '../pages/views/Main/About'
// import Home from '../pages/views/Main/Home'


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
                            <Route path='/admin/products'>
                                {/* <ProductsManager products={products} onRemove={onHandleRemove} /> */}
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
