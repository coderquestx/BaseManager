import React from 'react';

const TodoList: React.FC = () => {
    return (
        <div className="masonry-item col-md-6">
            <div className="bd bgc-white p-20">
                <div className="layers">
                    <div className="layer w-100 mB-10">
                        <h6 className="lh-1">Todo List</h6>
                    </div>
                    <div className="layer w-100">
                        <ul className="list-task list-group" data-role="tasklist">
                            <li className="list-group-item bdw-0" data-role="task">
                                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                    <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                    <label htmlFor="inputCall1" className="form-label peers peer-greed js-sb ai-c">
                                        <span className="peer peer-greed">Call John for Dinner</span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item bdw-0" data-role="task">
                                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                    <input type="checkbox" id="inputCall2" name="inputCheckboxesCall" className="peer" />
                                    <label htmlFor="inputCall2" className="form-label peers peer-greed js-sb ai-c">
                                        <span className="peer peer-greed">Book Boss Flight</span>
                                        <span className="peer">
                      <span className="badge rounded-pill fl-r bg-success lh-0 p-10">2 Days</span>
                    </span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item bdw-0" data-role="task">
                                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                    <input type="checkbox" id="inputCall3" name="inputCheckboxesCall" className="peer" />
                                    <label htmlFor="inputCall3" className="form-label peers peer-greed js-sb ai-c">
                                        <span className="peer peer-greed">Hit the Gym</span>
                                        <span className="peer">
                      <span className="badge rounded-pill fl-r bg-danger lh-0 p-10">3 Minutes</span>
                    </span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item bdw-0" data-role="task">
                                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                    <input type="checkbox" id="inputCall4" name="inputCheckboxesCall" className="peer" />
                                    <label htmlFor="inputCall4" className="form-label peers peer-greed js-sb ai-c">
                                        <span className="peer peer-greed">Give Purchase Report</span>
                                        <span className="peer">
                      <span className="badge rounded-pill fl-r bg-warning lh-0 p-10">not important</span>
                    </span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item bdw-0" data-role="task">
                                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                    <input type="checkbox" id="inputCall5" name="inputCheckboxesCall" className="peer" />
                                    <label htmlFor="inputCall5" className="form-label peers peer-greed js-sb ai-c">
                                        <span className="peer peer-greed">Watch Game of Thrones Episode</span>
                                        <span className="peer">
                      <span className="badge rounded-pill fl-r bg-info lh-0 p-10">Tomorrow</span>
                    </span>
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item bdw-0" data-role="task">
                                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                    <input type="checkbox" id="inputCall6" name="inputCheckboxesCall" className="peer" />
                                    <label htmlFor="inputCall6" className="form-label peers peer-greed js-sb ai-c">
                                        <span className="peer peer-greed">Give Purchase Report</span>
                                        <span className="peer">
                      <span className="badge rounded-pill fl-r bg-success lh-0 p-10">Done</span>
                    </span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
