System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var customElement, bindable, computedFrom, PaginationNav;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
            computedFrom = _aureliaFramework.computedFrom;
        }],
        execute: function () {
            PaginationNav = (function () {
                var _instanceInitializers = {};

                function PaginationNav() {
                    _classCallCheck(this, _PaginationNav);

                    _defineDecoratedPropertyDescriptor(this, 'List', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'Pager', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'ShowFirstLast', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'ShowPreviousNext', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'Callback', _instanceInitializers);
                }

                PaginationNav.prototype.setNext = function setNext() {
                    if (!this.isLastPage) {
                        this.setPageNumber(this.Pager.PageNumber + 1);
                    }
                };

                PaginationNav.prototype.setPrevious = function setPrevious() {
                    if (!this.isFirstPage) {
                        this.setPageNumber(this.Pager.PageNumber - 1);
                    }
                };

                PaginationNav.prototype.setPageNumber = function setPageNumber(i) {
                    this.Pager.PageNumber = i;
                    if (this.Callback != null) {
                        this.Callback();
                    }
                };

                PaginationNav.prototype.bind = function bind(bindingContext) {
                    this.$parent = bindingContext;
                };

                _createDecoratedClass(PaginationNav, [{
                    key: 'List',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return [];
                    },
                    enumerable: true
                }, {
                    key: 'Pager',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return {
                            'PageNumber': 1,
                            'PageSize': 25,
                            'TotalRecords': 0
                        };
                    },
                    enumerable: true
                }, {
                    key: 'ShowFirstLast',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return false;
                    },
                    enumerable: true
                }, {
                    key: 'ShowPreviousNext',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return true;
                    },
                    enumerable: true
                }, {
                    key: 'Callback',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'isFirstPage',
                    decorators: [computedFrom('List', 'Pager')],
                    get: function get() {
                        return this.Pager.PageNumber == 1;
                    }
                }, {
                    key: 'isLastPage',
                    decorators: [computedFrom('List', 'Pager')],
                    get: function get() {
                        return this.Pager.PageNumber >= this.pageCount;
                    }
                }, {
                    key: 'pageCount',
                    decorators: [computedFrom('List', 'Pager', 'Page.TotalRecords')],
                    get: function get() {
                        var n = Math.ceil(this.Pager.TotalRecords / this.Pager.PageSize);
                        var array = [];
                        for (var i = 0; i < n; i++) {
                            array.push(i + 1);
                        }
                        return array;
                    }
                }, {
                    key: 'hasPreviousPage',
                    decorators: [computedFrom('List', 'Pager')],
                    get: function get() {
                        return this.Pager.PageNumber > 1;
                    }
                }, {
                    key: 'hasNextPage',
                    decorators: [computedFrom('List', 'Pager')],
                    get: function get() {
                        return this.Pager.PageNumber < this.pageCount();
                    }
                }], null, _instanceInitializers);

                var _PaginationNav = PaginationNav;
                PaginationNav = customElement('pagination-nav')(PaginationNav) || PaginationNav;
                return PaginationNav;
            })();

            _export('PaginationNav', PaginationNav);
        }
    };
});