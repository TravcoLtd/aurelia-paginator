System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, customAttribute, Active;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            Active = (function () {
                function Active(element) {
                    _classCallCheck(this, _Active);

                    this.element = element;
                }

                Active.prototype.valueChanged = function valueChanged(newValue) {
                    if (newValue) {
                        this.element.classList.add('active');
                    } else {
                        this.element.classList.remove('active');
                    }
                };

                var _Active = Active;
                Active = inject(Element)(Active) || Active;
                Active = customAttribute('active')(Active) || Active;
                return Active;
            })();

            _export('Active', Active);
        }
    };
});