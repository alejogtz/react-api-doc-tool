import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Tickets } from '../Components/app/Tickets';
import Navbar from '../Components/ui/Navbar';
import Sidebar from '../Components/ui/Sidebar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar NameActive="Projects"/>

            <div className="container">
                <Switch>
                    <Route exact path="/tickets/nuevo" component={ Tickets } />                    
                    <Route exact path="/workspace/projects" 
                        component={ Sidebar } />
                    {/* ELSE OR Default */}
                    <Redirect to="/workspace/projects" />
                </Switch>
            </div>


        </>
    )
}
