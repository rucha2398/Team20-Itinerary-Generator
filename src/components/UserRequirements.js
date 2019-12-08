import React from 'react'

export default class UserRequirements extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container bg-secondary">
                <p class="text-left"><h3>User Requirements</h3></p> 
                <div className="form-column px-lg-3">
                        <p class="text-left"><h4>Their location:</h4></p>
                        <div className="form-group control-label text-left pl-lg-3">
                            <label htmlFor="location"><h5>Boston</h5></label>
                        </div> 

                        <p class="text-left"><h4># of days of stay:</h4></p>
                        <div className="form-group control-label text-left pl-lg-3">
                            <label htmlFor="numDays"><h5>5 Days </h5></label>
                        </div>  

                        <p class="text-left"><h4>Activies they checked:</h4></p>
                        <div className="form-group control-label text-left pl-lg-3">
                            <label htmlFor="shopping"><h5>Shopping</h5></label>
                        </div>  
                        <div className="form-group control-label text-left pl-lg-3">
                            <label htmlFor="nightlife"><h5>Nightlife</h5></label>
                        </div>  
                        <div className="form-group control-label text-left pl-lg-3">
                            <label htmlFor="sightsee"><h5>Sight-See</h5></label>
                        </div>  
                        <div className="form-group control-label text-left pl-lg-3">
                            <label htmlFor="food"><h5>Food</h5></label>
                        </div>  
                </div>  
            </div>
        )
    }
}