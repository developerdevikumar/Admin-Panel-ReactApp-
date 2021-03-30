import React from 'react';
import WidgetItem from './WidgetItem';
function WidgetLst() {
    return (

        <section className="content">
        <div className="container-fluid">
      <div className="row">
      <div className="col-lg-3 col-6">
      <div className="small-box bg-info">
      <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
<WidgetItem  text="kumar" text="yjhjj" text="fghgj"/>

</div>
</div>
<div className="col-lg-3 col-6">

<div className="small-box bg-success">
<div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>

<WidgetItem text="djjd" text="udufj" text="hkch" />



</div>
</div>
<div className="col-lg-3 col-6">

<div className="small-box bg-warning">
<div className="icon">
    <i className="ion ion-person-add"></i>
  </div>


<WidgetItem text="djjd" text="udufj" text="hkch" />



</div>
</div>
<div className="col-lg-3 col-6">
<div className="small-box bg-danger">
<div className="icon">
    <i className="ion ion-pie-graph"></i>
  </div>


<WidgetItem text="djjd" text="udufj" text="hkch" />



</div>
</div>


</div>

        </div>
        </section>
    )
}

export default WidgetLst
