import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Tickets } from '../Components/app/Tickets';
import Navbar from '../Components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Switch>
                    <Route exact path="/Tickets" component={ Tickets } />

                    {/* ELSE OR Default */}
                    <Redirect to="/Tickets" />
                </Switch>
            </div>


        </>
    )
}
