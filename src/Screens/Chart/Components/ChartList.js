import React from 'react'

function ChartList({tittle}) {
    return (
        <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
        <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">urf</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
              <h2>uehfh</h2>
                <div class="chart">

                </div>
              </div>

            </div>

        </div>
        <div class="col-md-6">
        <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Area Chart</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="chart">
                  <canvas id="areaChart" ></canvas>
                </div>
              </div>

            </div>

        </div>
        </div>
        </div>
        </section>
    )
}

export default ChartList
