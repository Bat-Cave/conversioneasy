import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Area from "./Components/Area";
import Home from "./Components/Home";
import Capacity from "./Components/Capacity";
import Length from "./Components/Length";
import Liquid from "./Components/Liquid";
import Temp from "./Components/Temp";
import Weight from "./Components/Weight";
import Currency from "./Components/Currency";

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/capacity' component={Capacity}/>
        <Route path='/area' component={Area}/>
        <Route path='/length' component={Length}/>
        <Route path='/liquid' component={Liquid}/>
        <Route path='/temperature' component={Temp}/>
        <Route path='/weight' component={Weight}/>
        <Route path='/currency' component={Currency}/>
    </Switch>
)