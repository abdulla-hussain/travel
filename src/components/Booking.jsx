export default function Booking(){
    return(
        <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
            <div className="bg-light shadow p-3">
                <div className="row align-items-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <select className="custom-select px-3">
                                        <option selected>Destination</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="text" className="form-control p-3 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <input type="text" className="form-control p-3 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <select className="custom-select px-3">
                                        <option selected>Duration</option>
                                        <option value="1">Duration 1</option>
                                        <option value="2">Duration 1</option>
                                        <option value="3">Duration 1</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-block" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}