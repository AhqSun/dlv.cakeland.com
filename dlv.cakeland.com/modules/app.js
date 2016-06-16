define(["require", "exports", "react", "react-dom", 'antd'], function (require, exports, React, ReactDOM, antd_1) {
    "use strict";
    function onChange(value, dateString) {
        console.log(value, dateString);
    }
    ReactDOM.render(React.createElement(antd_1.DatePicker, {onChange: onChange}), document.getElementById("react-content"));
});
//# sourceMappingURL=app.js.map