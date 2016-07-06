var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define("weui/components/button/button", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
        }
        Button.prototype.render = function () {
            var _a = this.props, type = _a.type, size = _a.size, disabled = _a.disabled, plain = _a.plain, className = _a.className, children = _a.children;
            var Component = this.props.href ? 'a' : 'button';
            var cls = classNames((_b = {
                    weui_btn: true,
                    weui_btn_primary: type === 'primary' && !plain,
                    weui_btn_default: type === 'default' && !plain,
                    weui_btn_warn: type === 'warn',
                    weui_btn_plain_primary: type === 'primary' && plain,
                    weui_btn_plain_default: type === 'default' && plain,
                    weui_btn_mini: size === 'small',
                    weui_btn_disabled: disabled
                },
                _b[className] = className,
                _b
            ));
            if (this.props.href) {
                return React.createElement("a", __assign({className: cls}, this.props), children);
            }
            else {
                return React.createElement("button", __assign({className: cls}, this.props), children);
            }
            var _b;
        };
        Button.propTypes = {
            disabled: React.PropTypes.bool,
            type: React.PropTypes.string,
            size: React.PropTypes.string
        };
        Button.defaultProps = {
            disabled: false,
            type: 'primary',
            size: 'normal'
        };
        return Button;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Button;
    ;
});
/**
 * Created by jf on 15/12/4.
 */
define("weui/components/button/button_area", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var ButtonArea = (function (_super) {
        __extends(ButtonArea, _super);
        function ButtonArea() {
            _super.apply(this, arguments);
        }
        ButtonArea.prototype.render = function () {
            var _a = this.props, direction = _a.direction, children = _a.children;
            var className = classNames({
                weui_btn_area: true,
                weui_btn_area_inline: direction === 'horizontal'
            });
            return (React.createElement("div", {className: className}, children));
        };
        ButtonArea.propTypes = {
            direction: React.PropTypes.string
        };
        ButtonArea.defaultProps = {
            direction: 'vertical'
        };
        return ButtonArea;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ButtonArea;
    ;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/button/index", ["require", "exports", "weui/components/button/button", "weui/components/button/button_area"], function (require, exports, button_1, button_area_1) {
    "use strict";
    exports.Button = button_1.default;
    exports.ButtonArea = button_area_1.default;
});
/**
 * Created by jf on 15/11/12.
 */
define("weui/components/cell/cells", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Cells = (function (_super) {
        __extends(Cells, _super);
        function Cells() {
            _super.apply(this, arguments);
        }
        Cells.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, access = _a.access, radio = _a.radio, checkbox = _a.checkbox;
            var cls = classNames((_b = {
                    weui_cells: true,
                    weui_cells_access: access
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        Cells.propTypes = {
            access: React.PropTypes.bool,
            radio: React.PropTypes.bool,
            checkbox: React.PropTypes.bool
        };
        Cells.defaultProps = {
            access: false,
            radio: false,
            checkbox: false
        };
        return Cells;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Cells;
    ;
});
/**
 * Created by jf on 15/11/12.
 */
define("weui/components/cell/cell", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Cell = (function (_super) {
        __extends(Cell, _super);
        function Cell() {
            _super.apply(this, arguments);
        }
        Cell.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var Component = this.props.href ? 'a' : this.props.htmlFor ? 'label' : 'div';
            var cls = classNames((_b = {
                    weui_cell: true,
                    weui_check_label: this.props.htmlFor,
                    weui_cell_switch: this.props.switch,
                    weui_cells_radio: this.props.radio,
                    weui_cells_checkbox: this.props.checkbox
                },
                _b[className] = className,
                _b
            ));
            if (this.props.href) {
                return React.createElement("a", {className: cls}, children);
            }
            else if (this.props.htmlFor) {
                return React.createElement("label", {className: cls}, children);
            }
            else {
                return React.createElement("div", {className: cls}, children);
            }
            var _b;
        };
        return Cell;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Cell;
    ;
});
/**
 * Created by jf on 15/11/13.
 */
define("weui/components/cell/cells_title", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var CellsTitle = (function (_super) {
        __extends(CellsTitle, _super);
        function CellsTitle() {
            _super.apply(this, arguments);
        }
        CellsTitle.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cells_title: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        return CellsTitle;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CellsTitle;
    ;
});
/**
 * Created by jf on 15/12/3.
 */
define("weui/components/cell/cells_tips", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var CellsTips = (function (_super) {
        __extends(CellsTips, _super);
        function CellsTips() {
            _super.apply(this, arguments);
        }
        CellsTips.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cells_tips: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        return CellsTips;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CellsTips;
    ;
});
/**
 * Created by jf on 15/11/12.
 */
define("weui/components/cell/cell_header", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var CellHeader = (function (_super) {
        __extends(CellHeader, _super);
        function CellHeader() {
            _super.apply(this, arguments);
        }
        CellHeader.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cell_hd: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        return CellHeader;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CellHeader;
    ;
});
/**
 * Created by jf on 15/11/12.
 */
define("weui/components/cell/cell_body", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var CellBody = (function (_super) {
        __extends(CellBody, _super);
        function CellBody() {
            _super.apply(this, arguments);
        }
        CellBody.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cell_bd: true,
                    weui_cell_primary: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        return CellBody;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CellBody;
    ;
});
/**
 * Created by jf on 15/11/12.
 */
define("weui/components/cell/cell_footer", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var CellFooter = (function (_super) {
        __extends(CellFooter, _super);
        function CellFooter() {
            _super.apply(this, arguments);
        }
        CellFooter.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cell_ft: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        return CellFooter;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CellFooter;
    ;
});
/**
 * Created by jf on 15/10/28.
 */
define("weui/components/cell/index", ["require", "exports", "weui/components/cell/cells", "weui/components/cell/cell", "weui/components/cell/cells_title", "weui/components/cell/cells_tips", "weui/components/cell/cell_header", "weui/components/cell/cell_body", "weui/components/cell/cell_footer"], function (require, exports, cells_1, cell_1, cells_title_1, cells_tips_1, cell_header_1, cell_body_1, cell_footer_1) {
    "use strict";
    exports.Cells = cells_1.default;
    exports.Cell = cell_1.default;
    exports.CellsTitle = cells_title_1.default;
    exports.CellsTips = cells_tips_1.default;
    exports.CellHeader = cell_header_1.default;
    exports.CellBody = cell_body_1.default;
    exports.CellFooter = cell_footer_1.default;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/mask/mask", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Mask = (function (_super) {
        __extends(Mask, _super);
        function Mask() {
            _super.apply(this, arguments);
        }
        Mask.prototype.render = function () {
            var transparent = this.props.transparent;
            var className = classNames({
                'weui_mask': !transparent,
                'weui_mask_transparent': transparent
            });
            return (React.createElement("div", __assign({className: className}, this.props)));
        };
        Mask.propTypes = {
            transparent: React.PropTypes.bool
        };
        Mask.defaultProps = {
            transparent: false
        };
        return Mask;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Mask;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/mask/index", ["require", "exports", "weui/components/mask/mask"], function (require, exports, mask_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = mask_1.default;
});
/**
 * Created by yjcxy12 on 16/1/22.
 */
define("weui/components/form/form", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form() {
            _super.apply(this, arguments);
        }
        Form.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, radio = _a.radio, checkbox = _a.checkbox;
            var cls = classNames((_b = {
                    weui_cells: true,
                    weui_cells_form: !radio && !checkbox,
                    weui_cells_radio: radio,
                    weui_cells_checkbox: checkbox
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        Form.propTypes = {
            radio: PropTypes.bool,
            checkbox: PropTypes.bool
        };
        Form.defaultProps = {
            radio: false,
            checkbox: false
        };
        return Form;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Form;
    ;
});
/**
 * Created by yjcxy12 on 16/1/22.
 */
define("weui/components/form/form_cell", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var FormCell = (function (_super) {
        __extends(FormCell, _super);
        function FormCell() {
            _super.apply(this, arguments);
        }
        FormCell.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cell: true,
                    weui_vcode: this.props.vcode,
                    weui_cell_warn: this.props.warn,
                    weui_cell_switch: this.props.switch,
                    weui_cell_select: this.props.select,
                    weui_select_before: this.props.selectPos == 'before',
                    weui_select_after: this.props.selectPos == 'after',
                    weui_check_label: this.props.radio || this.props.checkbox
                },
                _b[className] = className,
                _b
            ));
            if (this.props.radio || this.props.checkbox) {
                return (React.createElement("label", __assign({className: cls}, this.props), children));
            }
            else {
                return (React.createElement("div", __assign({className: cls}, this.props), children));
            }
            var _b;
        };
        FormCell.propTypes = {
            vcode: PropTypes.bool,
            warn: PropTypes.bool,
            radio: PropTypes.bool,
            checkbox: PropTypes.bool,
            select: PropTypes.bool,
            selectPos: PropTypes.string,
        };
        FormCell.defaultProps = {
            vcode: false,
            warn: false,
            radio: false,
            checkbox: false,
            select: false,
            selectPos: ""
        };
        return FormCell;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FormCell;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/form/textarea", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var TextArea = (function (_super) {
        __extends(TextArea, _super);
        function TextArea() {
            _super.apply(this, arguments);
            this.state = {
                textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
            };
        }
        TextArea.prototype.handleChange = function (e) {
            this.setState({ textCounter: e.target.value.length });
            //forward event to props if any
            if (this.props.onChange)
                this.props.onChange(e);
        };
        TextArea.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children, showCounter = _a.showCounter, maxlength = _a.maxlength, onChange = _a.onChange;
            var cls = classNames((_b = {
                    weui_textarea: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", null, React.createElement("textarea", __assign({className: cls, maxLength: maxlength, onChange: this.handleChange.bind(this)}, this.props), children), showCounter ?
                React.createElement("div", {className: "weui_textarea_counter"}, React.createElement("span", null, this.state.textCounter), maxlength ? '/' + maxlength : false)
                : false));
            var _b;
        };
        TextArea.propTypes = {
            showCounter: PropTypes.bool,
            defaultValue: PropTypes.string,
        };
        TextArea.defaultProps = {
            showCounter: true,
            defaultValue: ''
        };
        return TextArea;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TextArea;
    ;
});
/**
 * Created by yjcxy12 on 16/1/22.
 */
define("weui/components/form/input", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Input = (function (_super) {
        __extends(Input, _super);
        function Input() {
            _super.apply(this, arguments);
        }
        Input.prototype.render = function () {
            var className = this.props.className;
            var cls = classNames((_a = {
                    weui_input: true
                },
                _a[className] = className,
                _a
            ));
            return (React.createElement("input", __assign({className: cls}, this.props)));
            var _a;
        };
        Input.propTypes = {
            defaultValue: PropTypes.string
        };
        Input.defaultProps = {
            defaultValue: ''
        };
        return Input;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Input;
    ;
});
/**
 * Created by BearJ on 16/2/18.
 */
define("weui/components/form/switch", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Switch = (function (_super) {
        __extends(Switch, _super);
        function Switch() {
            _super.apply(this, arguments);
        }
        Switch.prototype.componentDidMount = function () {
            console.log(this.props);
        };
        Switch.prototype.render = function () {
            var className = this.props.className;
            var cls = classNames((_a = {
                    weui_switch: true
                },
                _a[className] = className,
                _a
            ));
            return (React.createElement("input", __assign({className: cls, type: "checkbox"}, this.props)));
            var _a;
        };
        Switch.propTypes = {
            defaultValue: PropTypes.string
        };
        Switch.defaultProps = {
            defaultValue: ''
        };
        return Switch;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Switch;
    ;
});
/**
 * Created by n7best on 16/2/25.
 */
define("weui/components/form/radio", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Radio = (function (_super) {
        __extends(Radio, _super);
        function Radio() {
            _super.apply(this, arguments);
        }
        Radio.prototype.render = function () {
            var className = this.props.className;
            var cls = classNames((_a = {
                    weui_check: true
                },
                _a[className] = className,
                _a
            ));
            return (React.createElement("div", null, React.createElement("input", __assign({className: cls, type: "radio"}, this.props)), React.createElement("span", {className: "weui_icon_checked"})));
            var _a;
        };
        return Radio;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Radio;
    ;
});
/**
 * Created by n7best on 16/2/25.
 */
define("weui/components/form/checkbox", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Checkbox = (function (_super) {
        __extends(Checkbox, _super);
        function Checkbox() {
            _super.apply(this, arguments);
        }
        Checkbox.prototype.render = function () {
            var className = this.props.className;
            var cls = classNames((_a = {
                    weui_check: true
                },
                _a[className] = className,
                _a
            ));
            return (React.createElement("div", null, React.createElement("input", __assign({className: cls, type: "checkbox"}, this.props)), React.createElement("i", {className: "weui_icon_checked"})));
            var _a;
        };
        return Checkbox;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Checkbox;
    ;
});
/**
 * Created by n7best on 16/2/25.
 */
define("weui/components/form/select", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Select = (function (_super) {
        __extends(Select, _super);
        function Select() {
            _super.apply(this, arguments);
        }
        Select.prototype.renderData = function (data) {
            return data.map(function (item, i) {
                return React.createElement("option", __assign({key: i, value: item.value}, item), item.label);
            });
        };
        Select.prototype.render = function () {
            var _a = this.props, className = _a.className, data = _a.data, children = _a.children;
            var cls = classNames((_b = {
                    weui_select: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("select", __assign({className: cls}, this.props), data.length > 0 ? this.renderData(data) : children));
            var _b;
        };
        Select.propTypes = {
            data: React.PropTypes.array
        };
        Select.defaultProps = {
            data: new Array()
        };
        return Select;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Select;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/form/uploader", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Uploader = (function (_super) {
        __extends(Uploader, _super);
        function Uploader() {
            _super.apply(this, arguments);
        }
        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
         * With react fix by n7best
         */
        Uploader.prototype.detectVerticalSquash = function (img) {
            var data;
            var ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                // Prevent cross origin error
                data = ctx.getImageData(0, 0, 1, ih).data;
            }
            catch (err) {
                // hopeless, assume the image is well and good.
                console.log('Cannot check verticalSquash: CORS?');
                return 1;
            }
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        };
        Uploader.prototype.handleFile = function (file, cb) {
            var _this = this;
            var reader;
            if (typeof FileReader !== 'undefined') {
                reader = new FileReader();
            }
            else {
                if (FileReader)
                    reader = new FileReader();
            }
            reader.onload = function (e) {
                var img;
                if (typeof Image !== 'undefined') {
                    img = new Image();
                }
                else {
                    if (Image)
                        img = new Image();
                }
                img.onload = function () {
                    var w = Math.min(_this.props.maxWidth, img.width);
                    var h = img.height * (w / img.width);
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    //check canvas support, for test
                    if (ctx) {
                        //patch subsampling bug
                        //http://jsfiddle.net/gWY2a/24/
                        var drawImage = ctx.drawImage;
                        //ctx.drawImage = (img, sx, sy, sw, sh, dx, dy, dw, dh) =>
                        //{
                        //    let vertSquashRatio = 1;
                        //    // Detect if img param is indeed image
                        //    if (!!img && img.nodeName == 'IMG')
                        //    {
                        //        vertSquashRatio = this.detectVerticalSquash(img);
                        //        sw || (sw = img.naturalWidth);
                        //        sh || (sh = img.naturalHeight);
                        //    }
                        //    // Execute several cases (Firefox does not handle undefined as no param)
                        //    // by call (apply is bad performance)
                        //    if (arguments.length == 9)
                        //        drawImage.call(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
                        //    else if (typeof sw != 'undefined')
                        //        drawImage.call(ctx, img, sx, sy, sw, sh / vertSquashRatio);
                        //    else
                        //        drawImage.call(ctx, img, sx, sy);
                        //}.bind(this);
                        canvas.width = w;
                        canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);
                        var base64 = canvas.toDataURL('image/png');
                        cb({
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    }
                    else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };
        Uploader.prototype.handleChange = function (e) {
            var langs = this.props.lang;
            var _files = e.target.files;
            if (_files.length === 0)
                return;
            if (this.props.files.length >= this.props.maxCount) {
                this.props.onError(langs.maxError(this.props.maxCount));
                return;
            }
            for (var key in _files) {
                if (!_files.hasOwnProperty(key))
                    continue;
                var file = _files[key];
            }
        };
        Uploader.prototype.renderFiles = function () {
            return this.props.files.map(function (file, idx) {
                var url = file.url, error = file.error, status = file.status;
                var fileStyle = {
                    backgroundImage: "url(" + url + ")"
                };
                var cls = classNames({
                    weui_uploader_file: true,
                    weui_uploader_status: error || status
                });
                return (React.createElement("li", __assign({className: cls, key: idx, style: fileStyle}, file), error || status ?
                    React.createElement("div", {className: "weui_uploader_status_content"}, error ? React.createElement("i", {className: "weui_icon_warn"}) : status)
                    : false));
            });
        };
        Uploader.prototype.render = function () {
            var _a = this.props, className = _a.className, title = _a.title, maxCount = _a.maxCount, files = _a.files, onChange = _a.onChange;
            var cls = classNames((_b = {
                    weui_uploader: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", {className: cls}, React.createElement("div", {className: "weui_uploader_hd weui_cell"}, React.createElement("div", {className: "weui_cell_bd weui_cell_primary"}, title), React.createElement("div", {className: "weui_cell_ft"}, files.length, "/", maxCount)), React.createElement("div", {className: "weui_uploader_bd"}, React.createElement("ul", {className: "weui_uploader_files"}, this.renderFiles()), React.createElement("div", {className: "weui_uploader_input_wrp"}, React.createElement("input", __assign({ref: "uploader", className: "weui_uploader_input", type: "file", accept: "image/jpg,image/jpeg,image/png,image/gif", onChange: this.handleChange.bind(this)}, this.props))))));
            var _b;
        };
        Uploader.propTypes = {
            title: PropTypes.string,
            maxCount: PropTypes.number,
            maxWidth: PropTypes.number,
            onChange: PropTypes.func,
            onError: PropTypes.func,
            files: PropTypes.array,
            lang: PropTypes.object
        };
        Uploader.defaultProps = {
            title: '图片上传',
            maxCount: 4,
            maxWidth: 500,
            files: new Array(),
            onChange: function () { },
            onError: function () { },
            lang: {
                maxError: function (maxCount) { return ("\u6700\u591A\u53EA\u80FD\u4E0A\u4F20" + maxCount + "\u5F20\u56FE\u7247"); }
            }
        };
        return Uploader;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Uploader;
    ;
});
/**
 * Created by yjcxy12 on 16/1/22.
 */
define("weui/components/form/index", ["require", "exports", "weui/components/form/form", "weui/components/form/form_cell", "weui/components/form/textarea", "weui/components/form/input", "weui/components/form/switch", "weui/components/form/radio", "weui/components/form/checkbox", "weui/components/form/select", "weui/components/form/uploader"], function (require, exports, form_1, form_cell_1, textarea_1, input_1, switch_1, radio_1, checkbox_1, select_1, uploader_1) {
    "use strict";
    exports.Form = form_1.default;
    exports.FormCell = form_cell_1.default;
    exports.TextArea = textarea_1.default;
    exports.Input = input_1.default;
    exports.Switch = switch_1.default;
    exports.Radio = radio_1.default;
    exports.Checkbox = checkbox_1.default;
    exports.Select = select_1.default;
    exports.Uploader = uploader_1.default;
});
/**
 * Created by yjcxy12 on 16/1/22.
 */
define("weui/components/label/label", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label() {
            _super.apply(this, arguments);
        }
        Label.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_label: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("label", __assign({className: cls}, this.props), children));
            var _b;
        };
        return Label;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Label;
    ;
});
/**
 * Created by yjcxy12 on 16/1/22.
 */
define("weui/components/label/index", ["require", "exports", "weui/components/label/label"], function (require, exports, label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = label_1.default;
});
/**
 * Created by jf on 15/11/3.
 */
define("weui/components/icon/icon", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Icon = (function (_super) {
        __extends(Icon, _super);
        function Icon() {
            _super.apply(this, arguments);
        }
        Icon.prototype.render = function () {
            var _a = this.props, value = _a.value, size = _a.size, className = _a.className;
            var cls = classNames((_b = {},
                _b['weui_icon_' + value] = true,
                _b.weui_icon_msg = size === 'large',
                _b[className] = className,
                _b
            ));
            if (value === 'loading') {
                return (React.createElement("div", {className: "weui_loading"}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (x, i) {
                    return (React.createElement("div", {key: i, className: "weui_loading_leaf weui_loading_leaf_" + i}));
                })));
            }
            else {
                return (React.createElement("i", __assign({}, this.props, {className: cls})));
            }
            var _b;
        };
        Icon.propTypes = {
            value: React.PropTypes.string,
            size: React.PropTypes.string
        };
        Icon.defaultProps = {
            value: 'success',
            size: 'small'
        };
        return Icon;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Icon;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/toast/toast", ["require", "exports", "react", "weui/components/mask/mask", "weui/components/icon/icon"], function (require, exports, React, mask_2, icon_1) {
    "use strict";
    var Toast = (function (_super) {
        __extends(Toast, _super);
        function Toast() {
            _super.apply(this, arguments);
        }
        Toast.prototype.render = function () {
            var _a = this.props, icon = _a.icon, show = _a.show, children = _a.children, iconSize = _a.iconSize;
            return (React.createElement("div", {className: icon === 'loading' ? 'weui_loading_toast' : '', style: { display: show ? 'block' : 'none' }}, React.createElement(mask_2.default, {transparent: true}), React.createElement("div", {className: "weui_toast"}, React.createElement(icon_1.default, {value: icon, size: iconSize}), React.createElement("p", {className: "weui_toast_content"}, children))));
        };
        Toast.propTypes = {
            icon: React.PropTypes.string,
            iconSize: React.PropTypes.string,
            show: React.PropTypes.bool
        };
        Toast.defaultProps = {
            icon: 'toast',
            show: false,
        };
        return Toast;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Toast;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/toast/index", ["require", "exports", "weui/components/toast/toast"], function (require, exports, toast_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = toast_1.default;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/progress/progress", ["require", "exports", "react", "weui/components/icon/icon"], function (require, exports, React, icon_2) {
    "use strict";
    var Progress = (function (_super) {
        __extends(Progress, _super);
        function Progress() {
            _super.apply(this, arguments);
        }
        Progress.prototype._renderOpr = function () {
            if (this.props.onClick) {
                return (React.createElement("a", {href: "javascript:;", className: "weui_progress_opr", onClick: this.props.onClick}, React.createElement(icon_2.default, {value: "cancel"})));
            }
        };
        Progress.prototype.render = function () {
            var value = this.props.value;
            if (value < 0) {
                value = 0;
            }
            if (value > 100) {
                value = 100;
            }
            return (React.createElement("div", {className: "weui_progress"}, React.createElement("div", {className: "weui_progress_bar"}, React.createElement("div", {className: "weui_progress_inner_bar", style: { width: value + "%" }})), this._renderOpr()));
        };
        Progress.propTypes = {
            progress: React.PropTypes.number
        };
        Progress.defaultProps = {
            value: 0
        };
        return Progress;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Progress;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/progress/index", ["require", "exports", "weui/components/progress/progress"], function (require, exports, progress_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = progress_1.default;
});
/**
 * Created by jf on 15/11/26.
 */
define("weui/components/actionsheet/actionsheet", ["require", "exports", "react", 'classnames', "weui/components/mask/mask"], function (require, exports, React, classNames, mask_3) {
    "use strict";
    var ActionSheet = (function (_super) {
        __extends(ActionSheet, _super);
        function ActionSheet() {
            _super.apply(this, arguments);
        }
        ActionSheet.prototype.render = function () {
            var _a = this.props, show = _a.show, onRequestClose = _a.onRequestClose;
            var className = classNames({
                weui_actionsheet: true,
                weui_actionsheet_toggle: show
            });
            return (React.createElement("div", null, React.createElement(mask_3.default, {style: { display: show ? 'block' : 'none' }, onClick: onRequestClose}), React.createElement("div", {className: className}, React.createElement("div", {className: "weui_actionsheet_menu"}, this._renderMenuItem()), React.createElement("div", {className: "weui_actionsheet_action"}, this._renderActions()))));
        };
        ActionSheet.prototype._renderMenuItem = function () {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label, className = menu.className;
                var cls = classNames((_a = {
                        weui_actionsheet_cell: true
                    },
                    _a[className] = className,
                    _a
                ));
                return (React.createElement("div", __assign({key: idx}, menu, {className: cls}), label));
                var _a;
            });
        };
        ActionSheet.prototype._renderActions = function () {
            return this.props.actions.map(function (action, idx) {
                var label = action.label, className = action.className;
                var cls = classNames((_a = {
                        weui_actionsheet_cell: true
                    },
                    _a[className] = className,
                    _a
                ));
                return (React.createElement("div", __assign({key: idx}, action, {className: cls}), label));
                var _a;
            });
        };
        ActionSheet.propTypes = {
            menus: React.PropTypes.array,
            actions: React.PropTypes.array,
            show: React.PropTypes.bool,
            onRequestClose: React.PropTypes.func
        };
        ActionSheet.defaultProps = {
            menus: new Array(),
            actions: new Array(),
            show: false,
            onRequestClose: function () {
            }
        };
        return ActionSheet;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ActionSheet;
    ;
});
/**
 * Created by jf on 15/11/26.
 */
define("weui/components/actionsheet/index", ["require", "exports", "weui/components/actionsheet/actionsheet"], function (require, exports, actionsheet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = actionsheet_1.default;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/dialog/confirm", ["require", "exports", "react", 'classnames', "weui/components/mask/mask"], function (require, exports, React, classNames, mask_4) {
    "use strict";
    var Confirm = (function (_super) {
        __extends(Confirm, _super);
        function Confirm() {
            _super.apply(this, arguments);
        }
        Confirm.prototype.renderButtons = function () {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type, label = action.label;
                var className = classNames({
                    weui_btn_dialog: true,
                    default: type === 'default',
                    primary: type === 'primary'
                });
                return (React.createElement("a", __assign({key: idx, href: "javascript:;"}, action, {className: className}), label));
            });
        };
        Confirm.prototype.render = function () {
            var _a = this.props, title = _a.title, show = _a.show, children = _a.children;
            return (React.createElement("div", {className: "weui_dialog_confirm", style: { display: show ? 'block' : 'none' }}, React.createElement(mask_4.default, null), React.createElement("div", {className: "weui_dialog"}, React.createElement("div", {className: "weui_dialog_hd"}, React.createElement("strong", {className: "weui_dialog_title"}, title)), React.createElement("div", {className: "weui_dialog_bd"}, children), React.createElement("div", {className: "weui_dialog_ft"}, this.renderButtons()))));
        };
        Confirm.propTypes = {
            buttons: React.PropTypes.array,
            show: React.PropTypes.bool,
            title: React.PropTypes.string
        };
        Confirm.defaultProps = {
            buttons: new Array(),
            show: false,
            title: ''
        };
        return Confirm;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Confirm;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/dialog/alert", ["require", "exports", "react", 'classnames', "weui/components/mask/mask"], function (require, exports, React, classNames, Mask_1) {
    "use strict";
    var Alert = (function (_super) {
        __extends(Alert, _super);
        function Alert() {
            _super.apply(this, arguments);
        }
        Alert.prototype._renderButtons = function () {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type, label = action.label;
                var className = classNames({
                    weui_btn_dialog: true,
                    default: type === 'default',
                    primary: type === 'primary'
                });
                return (React.createElement("a", __assign({key: idx, href: "javascript:;"}, action, {className: className}), label));
            });
        };
        Alert.prototype.render = function () {
            var _a = this.props, title = _a.title, show = _a.show, children = _a.children;
            return (React.createElement("div", {className: "weui_dialog_alert", style: { display: show ? 'block' : 'none' }}, React.createElement(Mask_1.default, null), React.createElement("div", {className: "weui_dialog"}, React.createElement("div", {className: "weui_dialog_hd"}, React.createElement("strong", {className: "weui_dialog_title"}, title)), React.createElement("div", {className: "weui_dialog_bd"}, children), React.createElement("div", {className: "weui_dialog_ft"}, this._renderButtons()))));
        };
        Alert.propTypes = {
            buttons: React.PropTypes.array,
            show: React.PropTypes.bool,
            title: React.PropTypes.string
        };
        Alert.defaultProps = {
            buttons: new Array(),
            show: false,
            title: ''
        };
        return Alert;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Alert;
});
/**
 * Created by jf on 15/10/27.
 */
define("weui/components/dialog/index", ["require", "exports", "weui/components/dialog/confirm", "weui/components/dialog/alert"], function (require, exports, confirm_1, alert_1) {
    "use strict";
    exports.Confirm = confirm_1.default;
    exports.Alert = alert_1.default;
});
/**
 * Created by jf on 15/11/4.
 */
define("weui/components/msg/msg", ["require", "exports", "react", "weui/components/button/button", "weui/components/icon/icon"], function (require, exports, React, button_2, icon_3) {
    "use strict";
    var Msg = (function (_super) {
        __extends(Msg, _super);
        function Msg() {
            _super.apply(this, arguments);
        }
        Msg.prototype._renderButtons = function () {
            return this.props.buttons.map(function (button, idx) {
                var type = button.type, label = button.label;
                return (React.createElement(button_2.default, __assign({key: idx}, button, {type: type}), label));
            });
        };
        Msg.prototype.render = function () {
            return (React.createElement("div", {className: "weui_msg"}, React.createElement("div", {className: "weui_icon_area"}, React.createElement(icon_3.default, {value: this.props.type, className: "weui_icon_msg"})), React.createElement("div", {className: "weui_text_area"}, React.createElement("h2", {className: "weui_msg_title"}, this.props.title), React.createElement("p", {className: "weui_msg_desc"}, this.props.description)), React.createElement("div", {className: "weui_opr_area"}, React.createElement("p", {className: "weui_btn_area"}, this._renderButtons())), React.createElement("div", {className: "weui_extra_area"}, this.props.extraHref ?
                React.createElement("a", {href: this.props.extraHref, className: "weui_extra_link"}, this.props.extraText) :
                React.createElement("p", {className: "weui_extra_text"}, this.props.extraText))));
        };
        Msg.propTypes = {
            type: React.PropTypes.string,
            buttons: React.PropTypes.array
        };
        Msg.defaultProps = {
            type: 'success',
            buttons: new Array()
        };
        return Msg;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Msg;
});
/**
 * Created by jf on 15/11/4.
 */
define("weui/components/msg/index", ["require", "exports", "weui/components/msg/msg"], function (require, exports, msg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = msg_1.default;
});
/**
 * Created by jf on 15/12/11.
 */
define("weui/components/article/article", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Article = (function (_super) {
        __extends(Article, _super);
        function Article() {
            _super.apply(this, arguments);
        }
        Article.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_article: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("article", __assign({className: cls}, this.props), children));
            var _b;
        };
        return Article;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Article;
    ;
});
/**
 * Created by jf on 15/12/11.
 */
define("weui/components/article/index", ["require", "exports", "weui/components/article/article"], function (require, exports, article_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = article_1.default;
});
/**
 * Created by jf on 15/11/3.
 */
define("weui/components/icon/index", ["require", "exports", "weui/components/icon/icon"], function (require, exports, icon_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = icon_4.default;
});
/**
 * Created by n7best
 */
define("weui/components/grid/grid_icon", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var GridIcon = (function (_super) {
        __extends(GridIcon, _super);
        function GridIcon() {
            _super.apply(this, arguments);
        }
        GridIcon.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_grid_icon: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), children));
        };
        return GridIcon;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GridIcon;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/grid/grid_label", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var GridLabel = (function (_super) {
        __extends(GridLabel, _super);
        function GridLabel() {
            _super.apply(this, arguments);
        }
        GridLabel.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_grid_label: true
            }, className);
            return (React.createElement("p", __assign({className: cls}, this.props), children));
        };
        return GridLabel;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GridLabel;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/grid/grid", ["require", "exports", "react", 'classnames', "weui/components/grid/grid_icon", "weui/components/grid/grid_label"], function (require, exports, React, classNames, grid_icon_1, grid_label_1) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Grid = (function (_super) {
        __extends(Grid, _super);
        function Grid() {
            _super.apply(this, arguments);
        }
        Grid.prototype.render = function () {
            var _a = this.props, children = _a.children, icon = _a.icon, label = _a.label, className = _a.className;
            var cls = classNames({
                weui_grid: true
            }, className);
            return (React.createElement("a", __assign({className: cls}, this.props), icon ? React.createElement(grid_icon_1.default, null, icon) : false, children, label ? React.createElement(grid_label_1.default, null, label) : false));
        };
        Grid.propTypes = {
            label: React.PropTypes.string,
            icon: React.PropTypes.any
        };
        Grid.defaultProps = {
            label: '',
            icon: false
        };
        return Grid;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Grid;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/grid/grids", ["require", "exports", "react", 'classnames', "weui/components/grid/grid"], function (require, exports, React, classNames, grid_1) {
    "use strict";
    var Grids = (function (_super) {
        __extends(Grids, _super);
        function Grids() {
            _super.apply(this, arguments);
        }
        Grids.prototype.renderData = function (data) {
            return data.map(function (item, i) {
                return React.createElement(grid_1.default, __assign({key: i, icon: item.icon, label: item.label}, item));
            });
        };
        Grids.prototype.render = function () {
            var _a = this.props, children = _a.children, data = _a.data, className = _a.className;
            var cls = classNames({
                weui_grids: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), data.length > 0 ? this.renderData(data) : children));
        };
        Grids.propTypes = {
            data: React.PropTypes.array
        };
        Grids.defaultProps = {
            data: new Array()
        };
        return Grids;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Grids;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/grid/index", ["require", "exports", "weui/components/grid/grids", "weui/components/grid/grid", "weui/components/grid/grid_icon", "weui/components/grid/grid_label"], function (require, exports, grids_1, grid_2, grid_icon_2, grid_label_2) {
    "use strict";
    exports.Grids = grids_1.default;
    exports.Grid = grid_2.default;
    exports.GridIcon = grid_icon_2.default;
    exports.GridLabel = grid_label_2.default;
});
/**
 * Created by n7best.
 */
define("weui/components/panel/panel", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Panel = (function (_super) {
        __extends(Panel, _super);
        function Panel() {
            _super.apply(this, arguments);
        }
        Panel.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, access = _a.access;
            var cls = classNames((_b = {
                    weui_panel: true,
                    weui_panel_access: access
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        Panel.propTypes = {
            access: React.PropTypes.bool,
        };
        Panel.defaultProps = {
            access: false,
        };
        return Panel;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Panel;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/panel/panel_header", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var PanelHeader = (function (_super) {
        __extends(PanelHeader, _super);
        function PanelHeader() {
            _super.apply(this, arguments);
        }
        PanelHeader.prototype.render = function () {
            var children = this.props.children;
            var className = classNames({
                weui_panel_hd: true
            });
            return (React.createElement("div", __assign({className: className}, this.props), children));
        };
        return PanelHeader;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PanelHeader;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/panel/panel_body", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var PanelBody = (function (_super) {
        __extends(PanelBody, _super);
        function PanelBody() {
            _super.apply(this, arguments);
        }
        PanelBody.prototype.render = function () {
            var children = this.props.children;
            var className = classNames({
                weui_panel_bd: true
            });
            return (React.createElement("div", __assign({className: className}, this.props), children));
        };
        return PanelBody;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PanelBody;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/panel/panel_footer", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var PanelFooter = (function (_super) {
        __extends(PanelFooter, _super);
        function PanelFooter() {
            _super.apply(this, arguments);
        }
        PanelFooter.prototype.render = function () {
            var children = this.props.children;
            var className = classNames({
                weui_panel_ft: true
            });
            if (this.props.href) {
                return React.createElement("a", __assign({className: className}, this.props), children);
            }
            else {
                React.createElement("div", __assign({className: className}, this.props), children);
            }
        };
        return PanelFooter;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PanelFooter;
    ;
});
/**
 * Created by n7best.
 */
define("weui/components/panel/index", ["require", "exports", "weui/components/panel/panel", "weui/components/panel/panel_header", "weui/components/panel/panel_body", "weui/components/panel/panel_footer"], function (require, exports, panel_1, panel_header_1, panel_body_1, panel_footer_1) {
    "use strict";
    exports.Panel = panel_1.default;
    exports.PanelHeader = panel_header_1.default;
    exports.PanelBody = panel_body_1.default;
    exports.PanelFooter = panel_footer_1.default;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/mediabox", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var MediaBox = (function (_super) {
        __extends(MediaBox, _super);
        function MediaBox() {
            _super.apply(this, arguments);
        }
        MediaBox.prototype.render = function () {
            var _a = this.props, children = _a.children, type = _a.type, className = _a.className;
            var Component = this.props.href ? 'a' : 'div';
            var cls = classNames({
                weui_media_box: true,
                weui_media_appmsg: type === 'appmsg',
                weui_media_text: type === 'text',
                weui_media_small_appmsg: type === 'small_appmsg',
            }, className);
            if (this.props.href) {
                return React.createElement("a", __assign({className: cls}, this.props), children);
            }
            else {
                return React.createElement("div", __assign({className: cls}, this.props), children);
            }
        };
        MediaBox.propTypes = {
            type: React.PropTypes.string
        };
        MediaBox.defaultProps = {
            type: 'text'
        };
        return MediaBox;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MediaBox;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/mediabox_header", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var MediaBoxHeader = (function (_super) {
        __extends(MediaBoxHeader, _super);
        function MediaBoxHeader() {
            _super.apply(this, arguments);
        }
        MediaBoxHeader.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var clz = classNames({
                weui_media_hd: true
            }, className);
            var childrenWithProps = React.Children.map(children, function (child) {
                if (child.type == 'img' && !child.props.className) {
                    return React.cloneElement(child, { className: 'weui_media_appmsg_thumb' });
                }
                else {
                    return child;
                }
            });
            return (React.createElement("div", __assign({className: clz}, this.props), childrenWithProps));
        };
        return MediaBoxHeader;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MediaBoxHeader;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/mediabox_body", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var PanelBody = (function (_super) {
        __extends(PanelBody, _super);
        function PanelBody() {
            _super.apply(this, arguments);
        }
        PanelBody.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_media_bd: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), children));
        };
        return PanelBody;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PanelBody;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/mediabox_title", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var MediaBoxTitle = (function (_super) {
        __extends(MediaBoxTitle, _super);
        function MediaBoxTitle() {
            _super.apply(this, arguments);
        }
        MediaBoxTitle.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_media_title: true
            }, className);
            return (React.createElement("h4", __assign({className: cls}, this.props), children));
        };
        return MediaBoxTitle;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MediaBoxTitle;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/mediabox_desc", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var MediaBoxDescription = (function (_super) {
        __extends(MediaBoxDescription, _super);
        function MediaBoxDescription() {
            _super.apply(this, arguments);
        }
        MediaBoxDescription.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_media_desc: true
            }, className);
            return (React.createElement("p", __assign({className: cls}, this.props), children));
        };
        return MediaBoxDescription;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MediaBoxDescription;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/mediabox_info_meta", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var MediaBoxInfoMeta = (function (_super) {
        __extends(MediaBoxInfoMeta, _super);
        function MediaBoxInfoMeta() {
            _super.apply(this, arguments);
        }
        MediaBoxInfoMeta.prototype.render = function () {
            var _a = this.props, children = _a.children, extra = _a.extra, className = _a.className;
            var cls = classNames({
                weui_media_info_meta: true,
                weui_media_info_meta_extra: extra
            }, className);
            return (React.createElement("li", __assign({className: cls}, this.props), children));
        };
        MediaBoxInfoMeta.propTypes = {
            extra: React.PropTypes.bool,
        };
        MediaBoxInfoMeta.defaultProps = {
            extra: false,
        };
        return MediaBoxInfoMeta;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MediaBoxInfoMeta;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/mediabox_info", ["require", "exports", "react", 'classnames', "weui/components/mediabox/mediabox_info_meta"], function (require, exports, React, classNames, mediabox_info_meta_1) {
    "use strict";
    var MediaBoxInfo = (function (_super) {
        __extends(MediaBoxInfo, _super);
        function MediaBoxInfo() {
            _super.apply(this, arguments);
        }
        MediaBoxInfo.prototype.renderData = function (metas) {
            return metas.map(function (meta, i) {
                return React.createElement(mediabox_info_meta_1.default, {key: i, extra: meta.extra}, meta.label);
            });
        };
        MediaBoxInfo.prototype.render = function () {
            var _a = this.props, children = _a.children, data = _a.data, className = _a.className;
            var cls = classNames({
                weui_media_info: true
            }, className);
            return (React.createElement("ul", __assign({className: cls}, this.props), data.length > 0 ? this.renderData(data) : children));
        };
        MediaBoxInfo.propTypes = {
            data: React.PropTypes.array,
        };
        MediaBoxInfo.defaultProps = {
            data: new Array(),
        };
        return MediaBoxInfo;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MediaBoxInfo;
    ;
});
/**
 * Created by n7best
 */
define("weui/components/mediabox/index", ["require", "exports", "weui/components/mediabox/mediabox", "weui/components/mediabox/mediabox_header", "weui/components/mediabox/mediabox_body", "weui/components/mediabox/mediabox_title", "weui/components/mediabox/mediabox_desc", "weui/components/mediabox/mediabox_info", "weui/components/mediabox/mediabox_info_meta"], function (require, exports, mediabox_1, mediabox_header_1, mediabox_body_1, mediabox_title_1, mediabox_desc_1, mediabox_info_1, mediabox_info_meta_2) {
    "use strict";
    exports.MediaBox = mediabox_1.default;
    exports.MediaBoxHeader = mediabox_header_1.default;
    exports.MediaBoxBody = mediabox_body_1.default;
    exports.MediaBoxTitle = mediabox_title_1.default;
    exports.MediaBoxDescription = mediabox_desc_1.default;
    exports.MediaBoxInfo = mediabox_info_1.default;
    exports.MediaBoxInfoMeta = mediabox_info_meta_2.default;
});
/**
 * Created by n7best
 */
define("weui/components/tab/tab_body", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var TabBody = (function (_super) {
        __extends(TabBody, _super);
        function TabBody() {
            _super.apply(this, arguments);
        }
        TabBody.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_tab_bd: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), children));
        };
        return TabBody;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBody;
});
/**
 * Created by n7best
 */
define("weui/components/tab/tab_body_item", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var TabBodyItem = (function (_super) {
        __extends(TabBodyItem, _super);
        function TabBodyItem() {
            _super.apply(this, arguments);
        }
        TabBodyItem.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, active = _a.active;
            var cls = classNames({
                weui_tab_bd_item: true
            }, className);
            return (React.createElement("div", __assign({className: cls, style: { display: active ? 'block' : 'none' }}, this.props), children));
        };
        TabBodyItem.propTypes = {
            active: React.PropTypes.bool
        };
        TabBodyItem.defaultProps = {
            active: false
        };
        return TabBodyItem;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBodyItem;
});
/**
 * Created by n7best
 */
define("weui/components/tab/navbar", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var NavBar = (function (_super) {
        __extends(NavBar, _super);
        function NavBar() {
            _super.apply(this, arguments);
        }
        NavBar.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_navbar: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), children));
        };
        return NavBar;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NavBar;
});
/**
 * Created by n7best
 */
define("weui/components/tab/navbar_item", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var NavBarItem = (function (_super) {
        __extends(NavBarItem, _super);
        function NavBarItem() {
            _super.apply(this, arguments);
        }
        NavBarItem.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, active = _a.active, label = _a.label;
            var cls = classNames({
                weui_navbar_item: true,
                weui_bar_item_on: active
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), label ? label : children));
        };
        NavBarItem.propTypes = {
            active: React.PropTypes.bool,
            label: React.PropTypes.string
        };
        NavBarItem.defaultProps = {
            active: false,
        };
        return NavBarItem;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NavBarItem;
});
/**
 * Created by n7best
 */
define("weui/components/tab/tabbar", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var TabBar = (function (_super) {
        __extends(TabBar, _super);
        function TabBar() {
            _super.apply(this, arguments);
        }
        TabBar.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_tabbar: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), children));
        };
        return TabBar;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBar;
});
/**
 * Created by n7best
 */
define("weui/components/tab/tabbar_icon", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var TabBarIcon = (function (_super) {
        __extends(TabBarIcon, _super);
        function TabBarIcon() {
            _super.apply(this, arguments);
        }
        TabBarIcon.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_tabbar_icon: true,
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), children));
        };
        return TabBarIcon;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBarIcon;
});
/**
 * Created by n7best
 */
define("weui/components/tab/tabbar_label", ["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var TabBarLabel = (function (_super) {
        __extends(TabBarLabel, _super);
        function TabBarLabel() {
            _super.apply(this, arguments);
        }
        TabBarLabel.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_tabbar_label: true,
            }, className);
            return (React.createElement("p", __assign({className: cls}, this.props), children));
        };
        return TabBarLabel;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBarLabel;
});
/**
 * Created by n7best
 */
define("weui/components/tab/tabbar_item", ["require", "exports", "react", 'classnames', "weui/components/tab/tabbar_icon", "weui/components/tab/tabbar_label"], function (require, exports, React, classNames, tabbar_icon_1, tabbar_label_1) {
    "use strict";
    var TabBarItem = (function (_super) {
        __extends(TabBarItem, _super);
        function TabBarItem() {
            _super.apply(this, arguments);
        }
        TabBarItem.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, active = _a.active, icon = _a.icon, label = _a.label;
            var cls = classNames({
                weui_tabbar_item: true,
                weui_bar_item_on: active
            }, className);
            if (icon || label) {
                return (React.createElement("div", __assign({className: cls}, this.props), icon ? React.createElement(tabbar_icon_1.default, null, icon) : false, label ? React.createElement(tabbar_label_1.default, null, label) : false));
            }
            else {
                return (React.createElement("div", __assign({className: cls}, this.props), children));
            }
        };
        TabBarItem.propTypes = {
            active: React.PropTypes.bool,
            icon: React.PropTypes.any,
            label: React.PropTypes.string
        };
        TabBarItem.defaultProps = {
            active: false,
            icon: false,
            label: ''
        };
        return TabBarItem;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBarItem;
});
/**
 * Created by n7best
 */
define("weui/components/tab/tab", ["require", "exports", "react", 'classnames', "weui/components/tab/tab_body", "weui/components/tab/tab_body_item", "weui/components/tab/navbar", "weui/components/tab/navbar_item", "weui/components/tab/tabbar", "weui/components/tab/tabbar_item"], function (require, exports, React, classNames, tab_body_1, tab_body_item_1, navbar_1, navbar_item_1, tabbar_1, tabbar_item_1) {
    "use strict";
    var Tab = (function (_super) {
        __extends(Tab, _super);
        function Tab() {
            _super.apply(this, arguments);
            this.state = {
                index: this.props.defaultIndex
            };
        }
        Tab.prototype.handleHeaderClick = function (idx) {
            this.setState({ index: idx });
            if (this.props.onChange)
                this.props.onChange(idx);
        };
        Tab.prototype.parseNavBar = function (children) {
            var navHeaders = [];
            var navContents = [];
            React.Children.map(children, function (child) {
                var _a = child.props, children = _a.children, type = _a.type;
                if (child.type === navbar_item_1.default) {
                    navHeaders.push(child);
                    if (children)
                        navContents.push(React.createElement(tab_body_item_1.default, {children: children}));
                }
                else if (child.type === tab_body_item_1.default) {
                    navContents.push(child);
                }
            });
            return { navHeaders: navHeaders, navContents: navContents };
        };
        Tab.prototype.renderNavBar = function (headers, contents, cls) {
            var _this = this;
            var _headers = headers.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    onClick: _this.handleHeaderClick.bind(_this, idx, item)
                });
            });
            var _contents = contents.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    tabIndex: idx
                });
            });
            return (React.createElement("div", {className: cls}, React.createElement(navbar_1.default, null, _headers), React.createElement(tab_body_1.default, null, _contents)));
        };
        Tab.prototype.parseTabBar = function (children) {
            var tabHeaders = [];
            var tabContents = [];
            React.Children.map(children, function (child) {
                var _a = child.props, children = _a.children, type = _a.type;
                if (child.type === tabbar_item_1.default) {
                    tabHeaders.push(child);
                    if (children)
                        tabContents.push(React.createElement(tab_body_item_1.default, {children: children}));
                }
                else if (child.type === tab_body_item_1.default) {
                    tabContents.push(child);
                }
            });
            return { tabHeaders: tabHeaders, tabContents: tabContents };
        };
        Tab.prototype.renderTabBar = function (headers, contents, cls) {
            var _this = this;
            var _headers = headers.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    onClick: _this.handleHeaderClick.bind(_this, idx, item)
                });
            });
            var _contents = contents.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    tabIndex: idx
                });
            });
            return (React.createElement("div", {className: cls}, React.createElement(tab_body_1.default, null, _contents), React.createElement(tabbar_1.default, null, _headers)));
        };
        Tab.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, type = _a.type;
            var cls = classNames({
                weui_tab: true
            }, className);
            switch (type) {
                case 'tabbar':
                    var _b = this.parseTabBar(children), tabHeaders = _b.tabHeaders, tabContents = _b.tabContents;
                    return this.renderTabBar(tabHeaders, tabContents, cls);
                case 'navbar':
                    var _c = this.parseNavBar(children), navHeaders = _c.navHeaders, navContents = _c.navContents;
                    return this.renderNavBar(navHeaders, navContents, cls);
                default:
                    return (React.createElement("div", __assign({className: cls}, this.props), children));
            }
        };
        Tab.propTypes = {
            type: React.PropTypes.string,
            defaultIndex: React.PropTypes.number,
            onChange: React.PropTypes.func
        };
        Tab.defaultProps = {
            type: 'normal',
            defaultIndex: 0
        };
        return Tab;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Tab;
});
/**
 * Created by n7best
 */
define("weui/components/tab/index", ["require", "exports", "weui/components/tab/tab", "weui/components/tab/tab_body", "weui/components/tab/navbar", "weui/components/tab/navbar_item", "weui/components/tab/tabbar", "weui/components/tab/tabbar_item", "weui/components/tab/tabbar_icon", "weui/components/tab/tabbar_label", "weui/components/tab/tab_body_item"], function (require, exports, tab_1, tab_body_2, navbar_2, navbar_item_2, tabbar_2, tabbar_item_2, tabbar_icon_2, tabbar_label_2, tab_body_item_2) {
    "use strict";
    exports.Tab = tab_1.default;
    exports.TabBody = tab_body_2.default;
    exports.NavBar = navbar_2.default;
    exports.NavBarItem = navbar_item_2.default;
    exports.TabBar = tabbar_2.default;
    exports.TabBarItem = tabbar_item_2.default;
    exports.TabBarIcon = tabbar_icon_2.default;
    exports.TabBarLabel = tabbar_label_2.default;
    exports.TabBodyItem = tab_body_item_2.default;
});
/**
 * Created by n7best.
 */
define("weui/components/searchbar/searchbar", ["require", "exports", "react", "react-dom", 'classnames', "weui/components/icon/icon"], function (require, exports, React, ReactDOM, classNames, icon_5) {
    "use strict";
    var SearchBar = (function (_super) {
        __extends(SearchBar, _super);
        function SearchBar() {
            _super.apply(this, arguments);
            this.state = {
                focus: false,
                text: ''
            };
        }
        SearchBar.prototype.changeHandle = function (e) {
            var text = e.target.value;
            this.setState({ text: text });
            if (this.props.onChange)
                this.props.onChange(text, e);
        };
        SearchBar.prototype.cancelHandle = function (e) {
            this.setState({ focus: false });
            if (this.props.onCancel)
                this.props.onCancel(e);
        };
        SearchBar.prototype.clearHandle = function (e) {
            this.setState({ text: '' });
            if (this.props.onClear)
                this.props.onClear(e);
            if (this.props.onChange)
                this.props.onChange('', e);
        };
        SearchBar.prototype.render = function () {
            var _this = this;
            var _a = this.props, children = _a.children, placeholder = _a.placeholder, className = _a.className;
            var clz = classNames({
                'weui_search_bar': true,
                'weui_search_focusing': this.state.focus
            }, className);
            return (React.createElement("div", {className: clz}, React.createElement("form", {className: 'weui_search_outer'}, React.createElement("div", {className: 'weui_search_inner'}, React.createElement(icon_5.default, {value: 'search'}), React.createElement("input", {ref: 'searchInput', type: 'search', className: 'weui_search_input', placeholder: placeholder, onFocus: function (e) { return _this.setState({ focus: true }); }, onBlur: function (e) { return _this.setState({ focus: false }); }, onChange: this.changeHandle.bind(this), value: this.state.text}), React.createElement("a", {className: 'weui_icon_clear', onClick: function (e) { return e; } /*issues #59*/ /*issues #59*/, onMouseDown: this.clearHandle.bind(this)})), React.createElement("label", {className: 'weui_search_text', onClick: function (e) { return ReactDOM.findDOMNode(_this.refs['searchInput']).setAttribute("focus", "true"); }, style: { display: this.state.text ? 'none' : null }}, React.createElement(icon_5.default, {value: 'search'}), React.createElement("span", null, placeholder))), React.createElement("a", {className: 'weui_search_cancel', onClick: this.cancelHandle.bind(this)}, this.props.lang.cancel)));
        };
        SearchBar.propTypes = {
            placeholder: React.PropTypes.string,
            onChange: React.PropTypes.func,
            onClear: React.PropTypes.func,
            onCancel: React.PropTypes.func,
            lang: React.PropTypes.object
        };
        SearchBar.defaultProps = {
            placeholder: '搜索',
            onChange: function () { },
            onClear: function () { },
            onCancel: function () { },
            lang: {
                cancel: '取消'
            }
        };
        return SearchBar;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SearchBar;
});
/**
 * Created by n7best.
 */
define("weui/components/searchbar/index", ["require", "exports", "weui/components/searchbar/searchbar"], function (require, exports, searchbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = searchbar_1.default;
});
/// <reference path="../../typings/react/react.d.ts" />
/**
 * Created by jf on 15/10/27.
 */
define("weui/index", ["require", "exports", "weui/components/button/index", "weui/components/cell/index", "weui/components/mask/index", "weui/components/form/index", "weui/components/label/index", "weui/components/toast/index", "weui/components/progress/index", "weui/components/actionsheet/index", "weui/components/dialog/index", "weui/components/msg/index", "weui/components/article/index", "weui/components/icon/index", "weui/components/grid/index", "weui/components/panel/index", "weui/components/mediabox/index", "weui/components/tab/index", "weui/components/searchbar/index"], function (require, exports, index_1, index_2, index_3, index_4, index_5, index_6, index_7, index_8, Dialog, index_9, index_10, index_11, index_12, index_13, index_14, index_15, index_16) {
    "use strict";
    exports.Button = index_1.Button;
    exports.ButtonArea = index_1.ButtonArea;
    exports.Cells = index_2.Cells;
    exports.CellsTitle = index_2.CellsTitle;
    exports.CellsTips = index_2.CellsTips;
    exports.Cell = index_2.Cell;
    exports.CellHeader = index_2.CellHeader;
    exports.CellBody = index_2.CellBody;
    exports.CellFooter = index_2.CellFooter;
    exports.Mask = index_3.default;
    exports.Form = index_4.Form;
    exports.FormCell = index_4.FormCell;
    exports.TextArea = index_4.TextArea;
    exports.Input = index_4.Input;
    exports.Switch = index_4.Switch;
    exports.Radio = index_4.Radio;
    exports.Checkbox = index_4.Checkbox;
    exports.Select = index_4.Select;
    exports.Uploader = index_4.Uploader;
    exports.Label = index_5.default;
    exports.Toast = index_6.default;
    exports.Progress = index_7.default;
    exports.ActionSheet = index_8.default;
    exports.Dialog = Dialog;
    exports.Msg = index_9.default;
    exports.Article = index_10.default;
    exports.Icon = index_11.default;
    exports.Grids = index_12.Grids;
    exports.Grid = index_12.Grid;
    exports.GridIcon = index_12.GridIcon;
    exports.GridLabel = index_12.GridLabel;
    exports.Panel = index_13.Panel;
    exports.PanelHeader = index_13.PanelHeader;
    exports.PanelBody = index_13.PanelBody;
    exports.PanelFooter = index_13.PanelFooter;
    exports.MediaBox = index_14.MediaBox;
    exports.MediaBoxHeader = index_14.MediaBoxHeader;
    exports.MediaBoxBody = index_14.MediaBoxBody;
    exports.MediaBoxTitle = index_14.MediaBoxTitle;
    exports.MediaBoxDescription = index_14.MediaBoxDescription;
    exports.MediaBoxInfo = index_14.MediaBoxInfo;
    exports.MediaBoxInfoMeta = index_14.MediaBoxInfoMeta;
    exports.Tab = index_15.Tab;
    exports.TabBody = index_15.TabBody;
    exports.TabBodyItem = index_15.TabBodyItem;
    exports.NavBar = index_15.NavBar;
    exports.NavBarItem = index_15.NavBarItem;
    exports.TabBar = index_15.TabBar;
    exports.TabBarItem = index_15.TabBarItem;
    exports.TabBarIcon = index_15.TabBarIcon;
    exports.TabBarLabel = index_15.TabBarLabel;
    exports.SearchBar = index_16.default;
});
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define("logout", ["require", "exports", "react", "weui/index", 'react-router'], function (require, exports, React, index_17, react_router_1) {
    "use strict";
    var Logout = (function (_super) {
        __extends(Logout, _super);
        function Logout() {
            var _this = this;
            _super.apply(this, arguments);
            this.state = {
                show: false,
                menus: [{
                        label: '退出登录',
                        onClick: function () {
                            localStorage.removeItem("auth");
                            _this.setState({ show: false });
                            react_router_1.hashHistory.push("/login");
                        }
                    }],
                actions: [
                    {
                        label: '取消',
                        onClick: this.hide.bind(this)
                    }
                ]
            };
        }
        Logout.prototype.componentWillMount = function () {
            this.props.setCallback(this.show, this);
        };
        Logout.prototype.hide = function () {
            this.setState({ show: false });
        };
        Logout.prototype.show = function () {
            console.log("show");
            this.setState({ show: true });
        };
        Logout.prototype.render = function () {
            return React.createElement(index_17.ActionSheet, {menus: this.state.menus, actions: this.state.actions, onRequestClose: this.hide.bind(this), show: this.state.show});
        };
        return Logout;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Logout;
});
define("main", ["require", "exports", "react", "weui/index", "logout"], function (require, exports, React, index_18, logout_1) {
    "use strict";
    var IconButton = '/images/icon_nav_button.png';
    var IconMsg = '/images/icon_nav_msg.png';
    var IconArticle = '/images/icon_nav_article.png';
    var IconCell = '/images/icon_nav_cell.png';
    var callback = null;
    var tag = null;
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.apply(this, arguments);
            this.state = {
                tab: 0
            };
        }
        Main.prototype.showLogoutMenu = function () {
            this.setState({ tab: 3 });
            if (callback) {
                callback.call(tag);
            }
        };
        Main.prototype.render = function () {
            var _this = this;
            return (React.createElement(index_18.Tab, null, React.createElement(index_18.TabBody, null, React.createElement(logout_1.default, {setCallback: function (f, e) { callback = f; tag = e; }}), React.createElement(index_18.Article, null, this.props.children)), React.createElement(index_18.TabBar, null, React.createElement(index_18.TabBarItem, {active: this.state.tab == 0, onClick: function (e) { return _this.setState({ tab: 0 }); }, icon: React.createElement("img", {src: IconButton}), label: "微信"}), React.createElement(index_18.TabBarItem, {active: this.state.tab == 1, onClick: function (e) { return _this.setState({ tab: 1 }); }}, React.createElement(index_18.TabBarIcon, null, React.createElement("img", {src: IconMsg})), React.createElement(index_18.TabBarLabel, null, "通讯录")), React.createElement(index_18.TabBarItem, {active: this.state.tab == 2, onClick: function (e) { return _this.setState({ tab: 2 }); }, icon: React.createElement("img", {src: IconArticle}), label: "发现"}), React.createElement(index_18.TabBarItem, {active: this.state.tab == 3, onClick: this.showLogoutMenu.bind(this), icon: React.createElement("img", {src: IconCell}), label: "我"}))));
        };
        return Main;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Main;
    ;
});
define("login", ["require", "exports", "react", "weui/index", 'react-router', "db"], function (require, exports, React, index_19, react_router_2, db_1) {
    "use strict";
    var Alert = index_19.Dialog.Alert, Confirm = index_19.Dialog.Confirm;
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login() {
            _super.call(this);
            this.state = {
                userName: "",
                userNameValid: false,
                password: "",
                passwordValid: false,
                showPass: false,
                loading: false,
                showAlert: false,
                alertMsg: '',
                alert: {
                    title: '登录提示',
                    buttons: [
                        {
                            label: '确定',
                            onClick: this.hideAlert.bind(this)
                        }
                    ]
                }
            };
        }
        Login.prototype.hideAlert = function () {
            this.setState({ showAlert: false });
        };
        Login.prototype.onSubmit = function () {
            if (this.state.userNameValid && this.state.passwordValid) {
                this.setState({ loading: true });
                db_1.auth.login({
                    user: this.state.userName, password: this.state.password
                }).then(function (data) {
                    localStorage.setItem("auth", JSON.stringify({ userId: data.userId, accessToken: data.accessToken }));
                    react_router_2.hashHistory.push({ pathname: '/' });
                }).fail(function (data) {
                    var res = data.responseJSON;
                    console.log(res);
                    this.setState({
                        showAlert: true,
                        alertMsg: res.msg
                    });
                }.bind(this)).done(function () {
                    this.setState({ loading: false });
                }.bind(this));
            }
        };
        Login.prototype.userNameChange = function (e) {
            var val = e.target.value;
            this.setState({ userName: e.target.value, userNameValid: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/.test(val) });
        };
        Login.prototype.passwordChange = function (e) {
            var val = e.target.value;
            this.setState({ password: val, passwordValid: val.length > 5 });
        };
        Login.prototype.tooglePassword = function (e) {
            this.setState({ showPass: e.target.checked });
        };
        Login.prototype.render = function () {
            return (React.createElement("div", null, React.createElement(Alert, {title: this.state.alert.title, buttons: this.state.alert.buttons, show: this.state.showAlert}, this.state.alertMsg), React.createElement(index_19.Toast, {show: this.state.loading, icon: "loading"}, "加载中"), React.createElement("div", {class: "hd"}, React.createElement("h1", {className: "page_title"}, "用户登录")), React.createElement(index_19.Form, null, React.createElement(index_19.FormCell, {warn: this.state.userName.length > 0 && !this.state.userNameValid, success: true}, React.createElement(index_19.CellHeader, null, React.createElement(index_19.Label, null, "用户名")), React.createElement(index_19.CellBody, null, React.createElement(index_19.Input, {type: "tel", placeholder: "请输入手机号", value: this.state.userName, onChange: this.userNameChange.bind(this)})), React.createElement(index_19.CellFooter, null, React.createElement(index_19.Icon, {value: this.state.userNameValid ? "success" : "warn"}))), React.createElement(index_19.FormCell, {warn: !this.state.passwordValid && this.state.password.length > 0}, React.createElement(index_19.CellHeader, null, React.createElement(index_19.Label, null, "密　码")), React.createElement(index_19.CellBody, null, React.createElement(index_19.Input, {type: this.state.showPass ? "tel" : "password", placeholder: "请输入密码", value: this.state.password, onChange: this.passwordChange.bind(this)})), React.createElement(index_19.CellFooter, null, React.createElement(index_19.Icon, {value: this.state.passwordValid ? "success" : "warn"}))), React.createElement(index_19.FormCell, null, React.createElement(index_19.CellBody, {style: { "text-align": "right" }}, "显示密码"), React.createElement(index_19.CellFooter, null, React.createElement(index_19.Switch, {onChange: this.tooglePassword.bind(this), checked: this.state.showPass})))), React.createElement(index_19.ButtonArea, null, React.createElement(index_19.Button, {onClick: this.onSubmit.bind(this), disabled: !(this.state.userNameValid && this.state.passwordValid)}, "确定"))));
        };
        return Login;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Login;
});
define("app", ["require", "exports", "react", "react-dom", "main", 'react-router', "login"], function (require, exports, React, ReactDOM, main_1, react_router_3, login_1) {
    "use strict";
    var state = {
        user: null
    };
    var LoginWrapper = (function (_super) {
        __extends(LoginWrapper, _super);
        function LoginWrapper() {
            _super.apply(this, arguments);
        }
        LoginWrapper.prototype.render = function () {
            return React.createElement(login_1.default, __assign({}, { appState: state }));
        };
        return LoginWrapper;
    }(React.Component));
    var MainWrapper = (function (_super) {
        __extends(MainWrapper, _super);
        function MainWrapper() {
            _super.apply(this, arguments);
        }
        MainWrapper.prototype.render = function () {
            return React.createElement(main_1.default, __assign({}, { appState: state }));
        };
        return MainWrapper;
    }(React.Component));
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.handleEnter = function (_a, repalce) {
            var location = _a.location;
            var authString = localStorage.getItem("auth");
            if (authString) {
                state.user = JSON.parse(authString);
            }
            else {
                state.user = null;
            }
            var pathname = location.pathname;
            if (pathname != "/login" && state.user == null) {
                repalce("/login");
            }
        };
        App.prototype.render = function () {
            return (React.createElement(react_router_3.Router, {history: react_router_3.hashHistory}, React.createElement(react_router_3.Route, {path: "/", component: MainWrapper, onEnter: this.handleEnter.bind(this)}), React.createElement(react_router_3.Route, {path: "login", component: LoginWrapper})));
        };
        return App;
    }(React.Component));
    ReactDOM.render(React.createElement(App, null), document.body);
});
//# sourceMappingURL=all.js.map