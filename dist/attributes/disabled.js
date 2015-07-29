System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, customAttribute, Disabled;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            Disabled = (function () {
                function Disabled(element) {
                    _classCallCheck(this, _Disabled);

                    this.element = element;
                }

                Disabled.prototype.valueChanged = function valueChanged(newValue) {
                    if (newValue) {
                        this.element.classList.add('disabled');
                    } else {
                        this.element.classList.remove('disabled');
                    }
                };

                var _Disabled = Disabled;
                Disabled = inject(Element)(Disabled) || Disabled;
                Disabled = customAttribute('disabled')(Disabled) || Disabled;
                return Disabled;
            })();

            _export('Disabled', Disabled);
        }
    };
});