import React from 'react'

function WidgetItem({text, details}) {
    return (
        <React.Fragment>

          <div className="col-lg-3 col-6">
            {/* small box */}

                <h3>{text}</h3>
                <p>{details}</p>
              </div>



          {/* ./col */}

          {/* ./col */}

          {/* ./col */}



        </React.Fragment>





    )
}

export default WidgetItem
