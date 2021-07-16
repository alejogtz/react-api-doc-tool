import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Projects from '../Components/app/Projects';
import { Tickets } from '../Components/app/Tickets';
import Navbar from '../Components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Switch>
                    <Route exact path="/tickets/nuevo" component={ Tickets } />                    
                    <Route exact path="/workspace/projects" 
                        component={ Projects } />
                    {/* ELSE OR Default */}
                    <Redirect to="/workspace/projects" />
                </Switch>
            </div>


        </>
    )
}
