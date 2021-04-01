import React from 'react'
import {Link } from "react-router-dom";

function SideMenu() {
    return (
        <div>
   <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
  <Link to="/dashboard" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Admin</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div>

      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

        <li class="nav-item">
           <Link to="/dashboard" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard

              </p>
              </Link>


          </li>
          <li class="nav-item">
          <Link to="/widgets" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Widgets
                <span class="right badge badge-danger">New</span>
              </p>
         </Link>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
             <Link to="/chart-List" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/flot-List" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
               </Link>

              </li>
              <li class="nav-item">
                <Link to="/inline-List" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
</Link>
              </li>

            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
                UI Elements
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="/ui/general-list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General</p>
             </Link>
              </li>
              <li class="nav-item">
                <Link to="/icons" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Icons</p>
               </Link>
              </li>
              <li class="nav-item">
                <Link to="/buttons" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Buttons</p>
                </Link>
              </li>



            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
                Forms
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <Link to="/general" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General Elements</p>
                </Link>
              </li>
              <li class="nav-item">
              <Link to="/advance" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Advanced Elements</p>
               </Link>
              </li>

              <li class="nav-item">
               <Link to="/validation" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Validation</p>
              </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Tables
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <Link to="/sampletables" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
              </Link>
              </li>
              <li class="nav-item">
                <Link to="/datatables" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
              </Link>
              </li>

            </ul>
          </li>
          <li class="nav-header">EXAMPLES</li>
          <li class="nav-item">
            <Link to="/calender" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
                Calendar
                <span class="badge badge-info right">2</span>
              </p>
          </Link>
          </li>
          <li class="nav-item">
           <Link to="/gallery" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>
                Gallery
              </p>
</Link>
         </li>



        </ul>
      </nav>
    </div>
  </aside>
        </div>
    )
}

export default SideMenu
