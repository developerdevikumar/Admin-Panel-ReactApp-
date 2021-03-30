import React from 'react'
import CalenderList from './Components/CalenderList'

function Calender() {
    return (

        <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Calendar</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Calendar</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <CalenderList />

        </div>
    )
}

export default Calender
