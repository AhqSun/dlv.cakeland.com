/**
 * Created by jf on 15/10/27.
 */
define(["require", "exports", './button', './button_area'], function (require, exports, button_1, button_area_1) {
    "use strict";
    var Button = (function () {
        function Button() {
            this.export = button_1.default;
        }
        return Button;
    }());
    exports.Button = Button;
    var ButtonArea = (function () {
        function ButtonArea() {
            this.export = button_area_1.default;
        }
        return ButtonArea;
    }());
    exports.ButtonArea = ButtonArea;
});
//# sourceMappingURL=index.js.map