import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Buttons from '../pages/Buttons';
import Typography from '../pages/Typography';
import Icons from '../pages/Icons';
import Space from '../pages/Space';
import Breadcrumb from '../pages/Breadcrumb';
import Dropdown from '../pages/Dropdown';
import Grid from '../pages/Grid';
import Switch from '../pages/Switch';
import Radio from '../pages/Radio';
import Alert from '../pages/Alert';

/**
 * MonoUI Kit Documentation Routes
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* Default route to Carousel Overview */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="carousel" element={<Dashboard />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="button" element={<Buttons />} />
        <Route path="typography" element={<Typography />} />
        <Route path="icons" element={<Icons />} />
        <Route path="icon" element={<Icons />} />
        <Route path="space" element={<Space />} />
        <Route path="spacing" element={<Space />} />
        <Route path="breadcrumb" element={<Breadcrumb />} />
        <Route path="breadcrumbs" element={<Breadcrumb />} />
        <Route path="dropdown" element={<Dropdown />} />
        <Route path="dropdowns" element={<Dropdown />} />
        <Route path="grid" element={<Grid />} />
        <Route path="grids" element={<Grid />} />
        <Route path="switch" element={<Switch />} />
        <Route path="switches" element={<Switch />} />
        <Route path="radio" element={<Radio />} />
        <Route path="radios" element={<Radio />} />
        <Route path="alert" element={<Alert />} />
        <Route path="alerts" element={<Alert />} />
        <Route path="message" element={<Alert />} />
        <Route path="notification" element={<Alert />} />
      </Route>

      {/* Fallback to Dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
