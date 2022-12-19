import React, { Component , Suspense , lazy } from "react";
import { Routes , Route } from "react-router-dom";
import './css/main.min.css';
import 'animate.css';
import { Audio } from 'react-loader-spinner';
import Layout from "./Layout";
import Modal from "./Modal";


const Home = lazy(() => import('./Home'))
const Products =  lazy(() => import('./Layouts/Products'))
const ProductDetail =  lazy(() => import('./Layouts/ProductDetail'))


class App extends Component {
  render(){


    return (

      <Layout>
        <Suspense fallback={<></>} >

          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/products" element={<Products /> }  /> 
            <Route path="/productDetail" element={<ProductDetail />} /> 
          </Routes>

        </Suspense>
      </Layout>

    );
  }

}



export default App ;
