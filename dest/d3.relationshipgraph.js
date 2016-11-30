/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The MIT License (MIT).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2016 Harrison Kelly.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * D3-relationshipgraph - 2.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _d3Collection = __webpack_require__(1);

	var _d3Selection = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* jshint ignore:start */
	/**
	 * Constructs a new tooltip.
	 *
	 * @returns {*} a tip.
	 * @public
	 */
	var d3tip = function d3tip() {
	    var node = void 0;
	    var point = void 0;
	    var target = void 0;
	    'use strict';

	    /**
	     * @returns {string} The direction.
	     */
	    var d3TipDirection = function d3TipDirection() {
	        return 'n';
	    };

	    /**
	     * @returns {Array} The offset.
	     */
	    var d3TipOffset = function d3TipOffset() {
	        return [0, 0];
	    };

	    /**
	     * @returns {string} The HTML.
	     */
	    var d3TipHtml = function d3TipHtml() {
	        return ' ';
	    };

	    /**
	     * Initializes the node.
	     *
	     * @returns {*} The node.
	     */
	    var initNode = function initNode() {
	        var node = (0, _d3Selection.select)(document.createElement('div'));
	        node.style('position', 'absolute').style('top', 0).style('opacity', 0).style('pointer-events', 'none').style('box-sizing', 'border-box');

	        return node.node();
	    };

	    var getNodeEl = function getNodeEl() {
	        if (node === null) {
	            node = initNode();
	            // re-add node to DOM
	            document.body.appendChild(node);
	        }

	        return (0, _d3Selection.select)(node);
	    };

	    /**
	     * Given a shape on the screen, will return an SVGPoint for the directions:
	     *     north, south, east, west, northeast, southeast, northwest, southwest.
	     *
	     *     +-+-+
	     *     |   |
	     *     +   |
	     *     |   |
	     *     +-+-+
	     *
	     * @returns {{}} an Object {n, s, e, w, nw, sw, ne, se}
	     * @private
	     */
	    var getScreenBBox = function getScreenBBox() {
	        var targetel = target || event.target;

	        while (typeof targetel.getScreenCTM === 'undefined' && targetel.parentNode === 'undefined') {
	            targetel = targetel.parentNode;
	        }

	        var bbox = {},
	            matrix = targetel.getScreenCTM(),
	            tbbox = targetel.getBBox(),
	            width = tbbox.width,
	            height = tbbox.height,
	            y = tbbox.y;

	        point.x = tbbox.x;
	        point.y = y;
	        bbox.nw = point.matrixTransform(matrix);
	        point.x += width;
	        bbox.ne = point.matrixTransform(matrix);
	        point.y += height;
	        bbox.se = point.matrixTransform(matrix);
	        point.x -= width;
	        bbox.sw = point.matrixTransform(matrix);
	        point.y -= height / 2;
	        bbox.w = point.matrixTransform(matrix);
	        point.x += width;
	        bbox.e = point.matrixTransform(matrix);
	        point.x -= width / 2;
	        point.y -= height / 2;
	        bbox.n = point.matrixTransform(matrix);
	        point.y += height;
	        bbox.s = point.matrixTransform(matrix);

	        return bbox;
	    };

	    var direction = d3TipDirection,
	        offset = d3TipOffset,
	        html = d3TipHtml;

	    node = initNode();
	    var svg = null;
	    point = null;
	    target = null;

	    /**
	     * Gets the top of the page left http://stackoverflow.com/a/7611054.
	     *
	     * @param {*} el The element.
	     * @returns {{left: number, top: number}} An object containing the left and top positions.
	     */
	    var getPageTopLeft = function getPageTopLeft(el) {
	        var rect = el.getBoundingClientRect(),
	            docEl = document.documentElement;

	        return {
	            top: rect.top + (window.pageYOffset || docEl.scrollTop || 0),
	            right: rect.right + (window.pageXOffset || 0),
	            bottom: rect.bottom + (window.pageYOffset || 0),
	            left: rect.left + (window.pageXOffset || docEl.scrollLeft || 0)
	        };
	    };

	    var functor = function functor(val) {
	        return typeof val === 'function' ? val : function () {
	            return val;
	        };
	    };

	    var directionN = function directionN() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.n.y - node.offsetHeight,
	            left: bbox.n.x - node.offsetWidth / 2
	        };
	    };

	    var directionS = function directionS() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.s.y,
	            left: bbox.s.x - node.offsetWidth / 2
	        };
	    };

	    var directionE = function directionE() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.e.y - node.offsetHeight / 2,
	            left: bbox.e.x
	        };
	    };

	    var directionW = function directionW() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.w.y - node.offsetHeight / 2,
	            left: bbox.w.x - node.offsetWidth
	        };
	    };

	    var directionNW = function directionNW() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.nw.y - node.offsetHeight,
	            left: bbox.nw.x - node.offsetWidth
	        };
	    };

	    var directionNE = function directionNE() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.ne.y - node.offsetHeight,
	            left: bbox.ne.x
	        };
	    };

	    var directionSW = function directionSW() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.sw.y,
	            left: bbox.sw.x - node.offsetWidth
	        };
	    };

	    var directionSE = function directionSE() {
	        var bbox = getScreenBBox();
	        return {
	            top: bbox.se.y,
	            left: bbox.e.x
	        };
	    };

	    var direction_callbacks = (0, _d3Collection.map)({
	        n: directionN,
	        s: directionS,
	        e: directionE,
	        w: directionW,
	        nw: directionNW,
	        ne: directionNE,
	        sw: directionSW,
	        se: directionSE
	    }),
	        directions = direction_callbacks.keys();

	    var getSVGNode = function getSVGNode(el) {
	        el = el.node();

	        if (el.tagName.toLowerCase() === 'svg') {
	            return el;
	        }

	        return el.ownerSVGElement;
	    };

	    var tip = function tip(vis) {
	        svg = getSVGNode(vis);
	        point = svg.createSVGPoint();
	        document.body.appendChild(node);
	    };

	    /**
	     * Show the tooltip on the screen.
	     *
	     * @returns {function()} a tip
	     * @public
	     */
	    tip.show = function () {
	        var args = Array.prototype.slice.call(arguments);
	        if (args[args.length - 1] instanceof SVGElement) {
	            target = args.pop();
	        }

	        var content = html.apply(this, args),
	            poffset = offset.apply(this, args),
	            nodel = getNodeEl(),
	            scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
	            scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

	        var coords = void 0,
	            dir = direction.apply(this, args),
	            i = directions.length;

	        nodel.html(content).style('position', 'absolute').style('opacity', 1).style('pointer-events', 'all');

	        // Figure out the correct direction.
	        var node = nodel._groups ? nodel._groups[0][0] : nodel[0][0],
	            nodeWidth = node.clientWidth,
	            nodeHeight = node.clientHeight,
	            windowWidth = window.innerWidth,
	            windowHeight = window.innerHeight,
	            elementCoords = getPageTopLeft(this),
	            breaksTop = elementCoords.top - nodeHeight < 0,
	            breaksLeft = elementCoords.left - nodeWidth < 0,
	            breaksRight = elementCoords.right + nodeHeight > windowWidth,
	            breaksBottom = elementCoords.bottom + nodeHeight > windowHeight;

	        if (breaksTop && !breaksRight && !breaksBottom && breaksLeft) {
	            // Case 1: NW
	            dir = 'e';
	        } else if (breaksTop && !breaksRight && !breaksBottom && !breaksLeft) {
	            // Case 2: N
	            dir = 's';
	        } else if (breaksTop && breaksRight && !breaksBottom && !breaksLeft) {
	            // Case 3: NE
	            dir = 'w';
	        } else if (!breaksTop && !breaksRight && !breaksBottom && breaksLeft) {
	            // Case 4: W
	            dir = 'e';
	        } else if (!breaksTop && !breaksRight && breaksBottom && breaksLeft) {
	            // Case 5: SW
	            dir = 'e';
	        } else if (!breaksTop && !breaksRight && breaksBottom && !breaksLeft) {
	            // Case 6: S
	            dir = 'e';
	        } else if (!breaksTop && breaksRight && breaksBottom && !breaksLeft) {
	            // Case 7: SE
	            dir = 'n';
	        } else if (!breaksTop && breaksRight && !breaksBottom && !breaksLeft) {
	            // Case 8: E
	            dir = 'w';
	        }

	        direction(dir);

	        while (i--) {
	            nodel.classed(directions[i], false);
	        }

	        coords = direction_callbacks.get(dir).apply(this);
	        nodel.classed(dir, true).style('top', coords.top + poffset[0] + scrollTop + 'px').style('left', coords.left + poffset[1] + scrollLeft + 'px');

	        return tip;
	    };

	    /**
	     * Hide the tooltip
	     *
	     * @returns {function()} a tup
	     * @public
	     */
	    tip.hide = function () {
	        var nodel = getNodeEl();

	        nodel.style('opacity', 0).style('pointer-events', 'none');

	        return tip;
	    };

	    /**
	     * Proxy attr calls to the d3 tip container. Sets or gets attribute value.
	     *
	     * @param n {String} The name of the attribute
	     * @returns {*} The tip or attribute value
	     * @public
	     */
	    tip.attr = function (n) {
	        if (arguments.length < 2 && typeof n === 'string') {
	            return getNodeEl().attr(n);
	        } else {
	            var args = Array.prototype.slice.call(arguments);
	            _d3Selection.selection.prototype.attr.apply(getNodeEl(), args);
	        }

	        return tip;
	    };

	    /**
	     * Proxy style calls to the d3 tip container. Sets or gets a style value.
	     *
	     * @param n {String} name of the property.
	     * @returns {*} The tip or style property value
	     * @public
	     */
	    tip.style = function (n) {
	        if (arguments.length < 2 && typeof n === 'string') {
	            return getNodeEl().style(n);
	        } else {
	            var args = Array.prototype.slice.call(arguments);

	            if (args.length === 1) {
	                var styles = args[0],
	                    keys = Object.keys(styles);

	                for (var key = 0; key < keys.length; key++) {
	                    _d3Selection.selection.prototype.style.apply(getNodeEl(), styles[key]);
	                }
	            }
	        }

	        return tip;
	    };

	    /**
	     * Set or get the direction of the tooltip
	     *
	     * @param v {String} One of: n, s, e, w, nw, sw, ne, se.
	     * @returns {function()} The tip or the direction
	     * @public
	     */
	    tip.direction = function (v) {
	        if (!arguments.length) {
	            return direction;
	        }

	        direction = v == null ? v : functor(v);

	        return tip;
	    };

	    /**
	     * Sets or gets the offset of the tip
	     *
	     * @param v {Array} Array of [x, y,] offset
	     * @returns {function()} The offset or the tip.
	     * @public
	     */
	    tip.offset = function (v) {
	        if (!arguments.length) {
	            return offset;
	        }

	        offset = v == null ? v : functor(v);

	        return tip;
	    };

	    /**
	     * Sets or gets the html value of the tooltip.
	     *
	     * @param v {String} Thes tring value of the tip
	     * @returns {function()} The html value or the tip.
	     * @public
	     */
	    tip.html = function (v) {
	        if (!arguments.length) {
	            return html;
	        }

	        html = v == null ? v : functor(v);

	        return tip;
	    };

	    /**
	     * Destroys the tooltip and removes it from the DOM.
	     *
	     * @returns {function()} A tip.
	     * @public
	     */
	    tip.destroy = function () {
	        if (node) {
	            getNodeEl().remove();
	            node = null;
	        }

	        return tip;
	    };

	    return tip;
	};

	/* jshint ignore:end */

	var RelationshipGraph = function () {

	    /**
	     *
	     * @param {d3.selection} selection The ID of the element containing the graph.
	     * @param {Object} userConfig Configuration for graph.
	     * @constructor
	     */

	    function RelationshipGraph(selection) {
	        var userConfig = arguments.length <= 1 || arguments[1] === undefined ? { showTooltips: true, maxChildCount: 0, thresholds: [] } : arguments[1];

	        _classCallCheck(this, RelationshipGraph);

	        // Verify that the user config contains the thresholds.
	        if (!userConfig.thresholds) {
	            userConfig.thresholds = [];
	        } else if (_typeof(userConfig.thresholds) !== 'object') {
	            throw 'Thresholds must be an Object.';
	        }

	        if (userConfig.onClick !== undefined) {
	            this.parentPointer = userConfig.onClick.parent !== undefined;
	            this.childPointer = userConfig.onClick.child !== undefined;
	        } else {
	            this.parentPointer = false;
	            this.childPointer = false;
	        }

	        var defaultOnClick = { parent: RelationshipGraph.noop, child: RelationshipGraph.noop };

	        /**
	         * Contains the configuration for the graph.
	         *
	         * @type {{blockSize: number, selection: d3.selection, showTooltips: boolean, maxChildCount: number,
	         * onClick: (RelationshipGraph.noop|*), showKeys: (*|boolean), thresholds: Array,
	         * colors: (*|Array|boolean|string[]), transitionTime: (*|number),
	         * truncate: (RelationshipGraph.truncate|*|number)}}
	         */
	        this.configuration = {
	            blockSize: 24, // The block size for each child.
	            selection: selection, // The ID for the graph.
	            showTooltips: userConfig.showTooltips, // Whether or not to show the tooltips on hover.
	            maxChildCount: userConfig.maxChildCount || 0, // The maximum amount of children to show per row.
	            onClick: userConfig.onClick || defaultOnClick, // The callback function to call.
	            showKeys: userConfig.showKeys, // Whether or not to show the keys in the tooltip.
	            thresholds: userConfig.thresholds, // Thresholds to determine the colors of the child blocks with.
	            colors: userConfig.colors || RelationshipGraph.getColors(), // Colors to use for blocks.
	            transitionTime: userConfig.transitionTime || 1500, // Time for a transition to start and complete.
	            truncate: userConfig.truncate || 0, // Maximum length of a parent label. Use 0 to turn off truncation.
	            sortFunction: userConfig.sortFunction || RelationshipGraph.sortJson, // A custom sort function
	            valueKeyName: userConfig.valueKeyName // Set a custom key in the tooltip.
	        };

	        // Make sure that the colors are in the correct format.
	        for (var i = 0; i < this.configuration.colors.length; i++) {
	            var color = this.configuration.colors[i];

	            if (color.indexOf('#') < 0 && typeof color === 'string' && color.length === 6 && !isNaN(parseInt(color, 16))) {
	                color = '#' + color;
	                this.configuration.colors[i] = color;
	            }
	        }

	        // TODO: Find a better way to handles these.
	        if (this.configuration.showTooltips === undefined) {
	            this.configuration.showTooltips = true;
	        }

	        if (this.configuration.showKeys === undefined) {
	            this.configuration.showKeys = true;
	        }

	        if (this.configuration.keyValueName === undefined) {
	            this.configuration.keyValueName = 'value';
	        }

	        // If the threshold array is made up of numbers, make sure that it is sorted.
	        if (this.configuration.thresholds.length && typeof this.configuration.thresholds[0] == 'number') {
	            this.configuration.thresholds.sort(function (a, b) {
	                return a - b;
	            });
	        }

	        /**
	         * Used for measuring text widths.
	         * @type {Element}
	         */
	        this.measurementDiv = document.createElement('div');
	        this.measurementDiv.className = 'relationshipGraph-measurement';
	        document.body.appendChild(this.measurementDiv);

	        /**
	         * Used for caching measurements.
	         * @type {{}}
	         */
	        this.measuredCache = {};

	        /**
	         * Represents the current data that is shown by the graph.
	         * @type {Array}
	         */
	        this.representation = [];

	        /**
	         * The _spacing (in pixels) between child nodes.
	         * @type {number}
	         */
	        this._spacing = 1;

	        /**
	         * Used to determine whether or not d3 V3 or V4 is being used.
	         *
	         * @type {boolean}
	         * @private
	         */
	        this._d3V4 = !!this.configuration.selection._groups;

	        /**
	         * Function to create the tooltip.
	         *
	         * @param {RelationshipGraph} self The RelationshipGraph instance.
	         * @returns {function} the tip object.
	         */
	        var createTooltip = function createTooltip(self) {
	            var hiddenKeys = ['_PRIVATE_', 'PARENT', 'PARENTCOLOR', 'SETNODECOLOR', 'SETNODESTROKECOLOR'],
	                showKeys = self.configuration.showKeys;

	            return d3tip().attr('class', 'relationshipGraph-tip').offset([-8, -10]).html(function (obj) {
	                var keys = Object.keys(obj),
	                    table = document.createElement('table'),
	                    count = keys.length,
	                    rows = [];

	                // Loop through the keys in the object and only show values self are not in the hiddenKeys array.
	                while (count--) {
	                    var element = keys[count],
	                        upperCaseKey = element.toUpperCase();

	                    if (!RelationshipGraph.contains(hiddenKeys, upperCaseKey) && !upperCaseKey.startsWith('__')) {
	                        var row = document.createElement('tr'),
	                            key = showKeys ? document.createElement('td') : null,
	                            value = document.createElement('td');

	                        if (showKeys) {
	                            key.innerHTML = element.charAt(0).toUpperCase() + element.substring(1);
	                            row.appendChild(key);
	                        }

	                        if (upperCaseKey == 'VALUE' && !self.configuration.valueKeyName) {
	                            continue;
	                        }

	                        value.innerHTML = obj[element];
	                        value.style.fontWeight = 'normal';

	                        row.appendChild(value);
	                        rows.push(row);
	                    }
	                }

	                var rowCount = rows.length;

	                while (rowCount--) {
	                    table.appendChild(rows[rowCount]);
	                }

	                return table.outerHTML;
	            });
	        };

	        if (this.configuration.showTooltips) {
	            this.tooltip = createTooltip(this);
	            this.tooltip.direction('n');
	        } else {
	            this.tooltip = null;
	        }

	        // Check if this selection already has a graph.
	        this.svg = this.configuration.selection.select('svg').select('g');

	        if (this.svg.empty()) {
	            // Create the svg element that will contain the graph.
	            this.svg = this.configuration.selection.append('svg').attr('width', '500').attr('height', '500').attr('style', 'display: block').append('g').attr('transform', 'translate(10, 0)');
	        }

	        this.graph = this;
	    }

	    /**
	     * Generate the basic set of colors.
	     *
	     * @returns {string[]} List of HEX colors.
	     * @private
	     */


	    _createClass(RelationshipGraph, [{
	        key: 'getId',


	        /**
	         * Return the ID of the selection.
	         *
	         * @returns {string} The ID of the selection.
	         * @private
	         */
	        value: function getId() {
	            var selection = this.configuration.selection,
	                parent = this._d3V4 ? selection._groups[0][0] : selection[0][0];

	            return parent.id;
	        }

	        /**
	         * Returns the pixel length of the string based on the font size.
	         *
	         * @param {string} str The string to get the length of.
	         * @returns {Number} The pixel length of the string.
	         * @public
	         */

	    }, {
	        key: 'getPixelLength',
	        value: function getPixelLength(str) {
	            if (RelationshipGraph.containsKey(this.measuredCache, str)) {
	                return this.measuredCache[str];
	            }

	            var text = document.createTextNode(str);
	            this.measurementDiv.appendChild(text);

	            var width = this.measurementDiv.offsetWidth;
	            this.measurementDiv.removeChild(text);

	            this.measuredCache[str] = width;

	            return width;
	        }

	        /**
	         * Assign the index and row to each of the children in the Array of Objects.
	         *
	         * @param json {Array} The array of Objects to loop through.
	         * @param parentSizes {Object} The parent sizes determined.
	         * @param parents {Array} The parent label names.
	         * @returns {Array} Object containing the longest width, the calculated max children per row, and the maximum amount
	         *  of rows.
	         */

	    }, {
	        key: 'assignIndexAndRow',
	        value: function assignIndexAndRow(json, parentSizes, parents) {
	            // Determine the longest parent name to calculate how far from the left the child blocks should start.
	            var longest = '';
	            var parentNames = Object.keys(parentSizes);
	            var i = void 0;
	            var index = 0;
	            var row = 0;
	            var previousParent = '';
	            var parentLength = parents.length;
	            var configuration = this.configuration;
	            var blockSize = configuration.blockSize;
	            var selection = configuration.selection;


	            for (i = 0; i < parentLength; i++) {
	                var current = parents[i] + ' ( ' + parentSizes[parentNames[i]] + ') ';

	                if (current.length > longest.length) {
	                    longest = current;
	                }
	            }

	            // Calculate the row and column for each child block.
	            var longestWidth = this.getPixelLength(longest);
	            var parentDiv = this._d3V4 ? selection._groups[0][0] : selection[0][0];
	            var calculatedMaxChildren = configuration.maxChildCount === 0 ? Math.floor((parentDiv.parentElement.clientWidth - blockSize - longestWidth) / blockSize) : configuration.maxChildCount;
	            var jsonLength = json.length;
	            var thresholds = configuration.thresholds;


	            for (i = 0; i < jsonLength; i++) {
	                var element = json[i];
	                var parent = element.parent;


	                if (previousParent !== null && previousParent !== parent) {
	                    element.__row = row + 1;
	                    element.__index = 1;

	                    index = 2;
	                    row++;
	                } else {
	                    if (index === calculatedMaxChildren + 1) {
	                        index = 1;
	                        row++;
	                    }

	                    element.__row = row;
	                    element.__index = index;

	                    index++;
	                }

	                previousParent = parent;

	                if (thresholds.length === 0) {
	                    element.__color = 0;
	                } else {
	                    // Figure out the color based on the threshold.
	                    var value = void 0,
	                        compare = void 0;

	                    if (typeof thresholds[0] === 'string') {
	                        value = element.value;
	                        compare = RelationshipGraph.stringCompare;
	                    } else {
	                        var elementValue = element.value;

	                        value = typeof elementValue == 'number' ? elementValue : parseFloat(elementValue.replace(/[^0-9-.]+/g, ''));

	                        compare = RelationshipGraph.numericCompare;
	                    }

	                    var thresholdIndex = compare(value, thresholds);

	                    element.__color = thresholdIndex === -1 ? 0 : thresholdIndex;
	                    element.__colorValue = this.configuration.colors[element.__color % this.configuration.colors.length];
	                }

	                // Add the interaction methods
	                /**
	                 * Set the color of the node. This method gets the object lazily and is only gets the object from the DOM
	                 * once.
	                 *
	                 * @param {String} color The new color of the node to set.
	                 */
	                element.setNodeColor = function (color) {
	                    if (!this.__node) {
	                        this.__node = document.getElementById(this.__id);
	                    }

	                    if (this.__node) {
	                        this.__node.style.fill = color;
	                    }
	                };

	                /**
	                 * Set the color of the node's stroke. This method gets the object lazily and is only gets the object from
	                 * the DOM once.
	                 *
	                 * @param {String} color The color to set the stroke to. Set this to a falsy value to remove the stroke.
	                 */
	                element.setNodeStrokeColor = function (color) {
	                    if (!this.__node) {
	                        this.__node = document.getElementById(this.__id);
	                    }

	                    if (this.__node) {
	                        this.__node.style.strokeWidth = color ? '1px' : 0;
	                        this.__node.style.stroke = color ? color : '';
	                    }
	                };

	                element.__id = this.getId() + '-child-node' + element.__row + '-' + element.__index;
	            }

	            return [longestWidth, calculatedMaxChildren, row];
	        }

	        /**
	         * Verify that the JSON passed in is correct.
	         *
	         * @param json {Array} The array of JSON objects to verify.
	         */

	    }, {
	        key: 'createParents',


	        /**
	         * Creates the parent labels.
	         *
	         * @param {d3.selection} parentNodes The parentNodes.
	         * @param {Object} parentSizes The child count for each parent.
	         * @param {number} longestWidth The longest width of a parent node.
	         * @param {number} calculatedMaxChildren The maximum amount of children nodes per row.
	         * @private
	         */
	        value: function createParents(parentNodes, parentSizes, longestWidth, calculatedMaxChildren) {
	            var parentSizesKeys = Object.keys(parentSizes),
	                _this = this;

	            parentNodes.enter().append('text').text(function (obj, index) {
	                return obj + ' (' + parentSizes[parentSizesKeys[index]] + ')';
	            }).attr('x', function (obj, index) {
	                var width = _this.getPixelLength(obj + ' (' + parentSizes[parentSizesKeys[index]] + ')');
	                return longestWidth - width;
	            }).attr('y', function (obj, index) {
	                if (index === 0) {
	                    return 0;
	                }

	                /**
	                 * Determine the Y coordinate by determining the Y coordinate of all of the parents before. This
	                 * has to be calculated completely because it is an update and can occur anywhere.
	                 */
	                var previousParentSize = 0,
	                    i = index - 1;

	                while (i > -1) {
	                    previousParentSize += Math.ceil(parentSizes[parentSizesKeys[i]] / calculatedMaxChildren) * calculatedMaxChildren;
	                    i--;
	                }

	                return Math.ceil(previousParentSize / calculatedMaxChildren) * _this.configuration.blockSize + _this._spacing * index;
	            }).style('text-anchor', 'start').style('fill', function (obj) {
	                return obj.parentColor !== undefined ? _this.configuration.colors[obj.parentColor] : '#000000';
	            }).style('cursor', this.parentPointer ? 'pointer' : 'default').attr('class', 'relationshipGraph-Text').attr('transform', 'translate(-6, ' + _this.configuration.blockSize / 1.5 + ')').on('click', function (obj) {
	                _this.configuration.onClick.parent(obj);
	            });
	        }

	        /**
	         * Updates the existing parent nodes with new data.
	         *
	         * @param {d3.selection} parentNodes The parentNodes.
	         * @param {Object} parentSizes The child count for each parent.
	         * @param {number} longestWidth The longest width of a parent node.
	         * @param {number} calculatedMaxChildren The maxiumum amount of children nodes per row.
	         * @private
	         */

	    }, {
	        key: 'updateParents',
	        value: function updateParents(parentNodes, parentSizes, longestWidth, calculatedMaxChildren) {
	            var parentSizesKeys = Object.keys(parentSizes),
	                _this = this;

	            // noinspection JSUnresolvedFunction
	            parentNodes.text(function (obj, index) {
	                return obj + ' (' + parentSizes[parentSizesKeys[index]] + ')';
	            }).attr('x', function (obj, index) {
	                var width = _this.getPixelLength(obj + ' (' + parentSizes[parentSizesKeys[index]] + ')');
	                return longestWidth - width;
	            }).attr('y', function (obj, index) {
	                if (index === 0) {
	                    return 0;
	                }

	                /**
	                 * Determine the Y coordinate by determining the Y coordinate of all of the parents before. This
	                 * has to be calculated completely because it is an update and can occur anywhere.
	                 */
	                var previousParentSize = 0,
	                    i = index - 1;

	                while (i > -1) {
	                    previousParentSize += Math.ceil(parentSizes[parentSizesKeys[i]] / calculatedMaxChildren) * calculatedMaxChildren;
	                    i--;
	                }

	                return Math.ceil(previousParentSize / calculatedMaxChildren) * _this.configuration.blockSize + _this._spacing * index;
	            }).style('fill', function (obj) {
	                return obj.parentColor !== undefined ? _this.configuration.colors[obj.parentColor] : '#000000';
	            }).style('cursor', _this.parentPointer ? 'pointer' : 'default');
	        }

	        /**
	         * Creates new children nodes.
	         *
	         * @param {d3.selection} childrenNodes The children nodes.
	         * @param {number} longestWidth The longest width of a parent node.
	         * @private
	         */

	    }, {
	        key: 'createChildren',
	        value: function createChildren(childrenNodes, longestWidth) {
	            var _this = this;

	            childrenNodes.enter().append('rect').attr('id', function (obj) {
	                return obj.__id;
	            }).attr('x', function (obj) {
	                return longestWidth + (obj.__index - 1) * _this.configuration.blockSize + 5 + (_this._spacing * obj.__index - 1);
	            }).attr('y', function (obj) {
	                return (obj.__row - 1) * _this.configuration.blockSize + (_this._spacing * obj.__row - 1);
	            }).attr('rx', 4).attr('ry', 4).attr('class', 'relationshipGraph-block').attr('width', _this.configuration.blockSize).attr('height', _this.configuration.blockSize).style('fill', function (obj) {
	                return obj.__colorValue;
	            }).style('cursor', _this.childPointer ? 'pointer' : 'default').on('mouseover', _this.tooltip ? _this.tooltip.show : RelationshipGraph.noop).on('mouseout', _this.tooltip ? _this.tooltip.hide : RelationshipGraph.noop).on('click', function (obj) {
	                _this.tooltip.hide();
	                _this.configuration.onClick.child(obj);
	            });
	        }

	        /**
	         * Updates the existing children nodes with new data.
	         *
	         * @param {d3.selection} childrenNodes The children nodes.
	         * @param {number} longestWidth The longest width of a parent node.
	         * @private
	         */

	    }, {
	        key: 'updateChildren',
	        value: function updateChildren(childrenNodes, longestWidth) {
	            var blockSize = this.configuration.blockSize;
	            var _this = this;

	            // noinspection JSUnresolvedFunction
	            childrenNodes.transition(this.configuration.transitionTime).attr('id', function (obj) {
	                return obj.__id;
	            }).attr('x', function (obj) {
	                return longestWidth + (obj.__index - 1) * blockSize + 5 + (_this._spacing * obj.__index - 1);
	            }).attr('y', function (obj) {
	                return (obj.__row - 1) * blockSize + (_this._spacing * obj.__row - 1);
	            }).style('fill', function (obj) {
	                return obj.__colorValue;
	            });
	        }

	        /**
	         * Removes nodes that no longer exist.
	         *
	         * @param {d3.selection} nodes The nodes.
	         * @private
	         */

	    }, {
	        key: 'removeNodes',
	        value: function removeNodes(nodes) {
	            // noinspection JSUnresolvedFunction
	            nodes.exit().transition(this.configuration.transitionTime).remove();
	        }

	        /**
	         * Generate the graph.
	         *
	         * @param {Array} json The array of JSON to feed to the graph.
	         * @return {RelationshipGraph} The RelationshipGraph object to keep d3's chaining functionality.
	         * @public
	         */

	    }, {
	        key: 'data',
	        value: function data(json) {
	            if (RelationshipGraph.verifyJson(json)) {
	                var parents = [];
	                var parentSizes = {};
	                var configuration = this.configuration;


	                var row = 0,
	                    parent = void 0,
	                    i = void 0,
	                    maxWidth = void 0,
	                    maxHeight = void 0,
	                    calculatedMaxChildren = 0,
	                    longestWidth = 0;

	                // Ensure that the JSON is sorted by parent.
	                configuration.sortFunction(json);

	                this.representation = json;

	                /**
	                 * Loop through all of the childrenNodes in the JSON array and determine the amount of childrenNodes per
	                 * parent. This will also calculate the row and index for each block and truncate the parent names to 25
	                 * characters.
	                 */
	                var jsonLength = json.length;

	                for (i = 0; i < jsonLength; i++) {
	                    parent = json[i].parent;

	                    if (RelationshipGraph.containsKey(parentSizes, parent)) {
	                        parentSizes[parent]++;
	                    } else {
	                        parentSizes[parent] = 1;
	                        parents.push(RelationshipGraph.truncate(parent, configuration.truncate));
	                    }
	                }

	                /**
	                 * Assign the indexes and rows to each child. This method also calculates the maximum amount of children
	                 * per row, the longest row width, and how many rows there are.
	                 */


	                // Set the max width and height.

	                var _assignIndexAndRow = this.assignIndexAndRow(json, parentSizes, parents);

	                var _assignIndexAndRow2 = _slicedToArray(_assignIndexAndRow, 3);

	                longestWidth = _assignIndexAndRow2[0];
	                calculatedMaxChildren = _assignIndexAndRow2[1];
	                row = _assignIndexAndRow2[2];
	                maxHeight = row * configuration.blockSize;
	                maxWidth = longestWidth + calculatedMaxChildren * configuration.blockSize;

	                // Account for the added _spacing.
	                maxWidth += this._spacing * calculatedMaxChildren;

	                for (i = 0; i < row; i++) {
	                    maxHeight += this._spacing * i;
	                }

	                // Select all of the parent nodes.
	                var parentNodes = this.svg.selectAll('.relationshipGraph-Text').data(parents);

	                // Add new parent nodes.
	                this.createParents(parentNodes, parentSizes, longestWidth, calculatedMaxChildren);

	                // Update existing parent nodes.
	                this.updateParents(parentNodes, parentSizes, longestWidth, calculatedMaxChildren);

	                // Remove deleted parent nodes.
	                this.removeNodes(parentNodes);

	                // Select all of the children nodes.
	                var childrenNodes = this.svg.selectAll('.relationshipGraph-block').data(json);

	                // Add new child nodes.
	                this.createChildren(childrenNodes, longestWidth);

	                // Update existing child nodes.
	                this.updateChildren(childrenNodes, longestWidth);

	                // Delete removed child nodes.
	                this.removeNodes(childrenNodes);

	                if (this.configuration.showTooltips) {
	                    (0, _d3Selection.select)('.d3-tip').remove();
	                    this.svg.call(this.tooltip);
	                }

	                this.configuration.selection.select('svg').attr('width', Math.abs(maxWidth + 15)).attr('height', Math.abs(maxHeight + 15));
	            }

	            return this;
	        }

	        /**
	         * Searches through the representation and returns the child nodes that match the search query.
	         *
	         * @param {object} query The partial object match to search for.
	         * @returns {Array} An array with the objects that matched the partial query or an empty array if none are found.
	         */

	    }, {
	        key: 'search',
	        value: function search(query) {
	            var results = [],
	                queryKeys = Object.keys(query),
	                queryKeysLength = queryKeys.length;

	            if (this.representation && query) {
	                var length = this.representation.length;

	                for (var i = 0; i < length; i++) {
	                    var currentObject = this.representation[i];

	                    var isMatch = false;

	                    for (var j = 0; j < queryKeysLength; j++) {
	                        var queryVal = query[queryKeys[j]];

	                        if (!(isMatch = currentObject[queryKeys[j]] == queryVal)) {
	                            break;
	                        }
	                    }

	                    if (isMatch) {
	                        results.push(currentObject);
	                    }
	                }
	            }

	            return results;
	        }
	    }], [{
	        key: 'getColors',
	        value: function getColors() {
	            return ['#c4f1be', '#a2c3a4', '#869d96', '#525b76', '#201e50', '#485447', '#5b7f77', '#6474ad', '#b9c6cb', '#c0d6c1', '#754668', '#587d71', '#4daa57', '#b5dda4', '#f9eccc', '#0e7c7b', '#17bebb', '#d4f4dd', '#d62246', '#4b1d3f', '#cf4799', '#c42583', '#731451', '#f3d1bf', '#c77745'];
	        }

	        /**
	         * Checks if the object contains the key.
	         *
	         * @param {object} obj The object to check in.
	         * @param {string} key They key to check for.
	         * @returns {boolean} Whether or not the object contains the key.
	         * @private
	         */

	    }, {
	        key: 'containsKey',
	        value: function containsKey(obj, key) {
	            return Object.keys(obj).indexOf(key) > -1;
	        }

	        /**
	         * Checks whether or not the key is in the array.
	         *
	         * @param {*[]} arr The array to check in.
	         * @param {string} key The key to check for.
	         * @returns {boolean} Whether or not the key exists in the array.
	         * @private
	         */

	    }, {
	        key: 'contains',
	        value: function contains(arr, key) {
	            return arr.indexOf(key) > -1;
	        }

	        /**
	         * Truncate a string to 25 characters plus an ellipses.
	         *
	         * @param {string} str The string to truncate.
	         * @param {number} cap The number to cap the string at before it gets truncated.
	         * @returns {string} The string truncated (if necessary).
	         * @private
	         */

	    }, {
	        key: 'truncate',
	        value: function truncate(str, cap) {
	            if (!cap || !str) {
	                return str;
	            }

	            return str.length > cap ? str.substring(0, cap) + '...' : str;
	        }

	        /**
	         * Determines if the array passed in is an Array object.
	         *
	         * @param arr {Array} The array object to check.
	         * @returns {boolean} Whether or not the array is actually an array object.
	         */

	    }, {
	        key: 'isArray',
	        value: function isArray(arr) {
	            return Object.prototype.toString.call(arr) == '[object Array]';
	        }

	        /**
	         * Noop function.
	         *
	         * @private
	         */

	    }, {
	        key: 'noop',
	        value: function noop() {}

	        /**
	         * Sorts the array of JSON by parent name. This method is case insensitive.
	         *
	         * @param json {Array} The Array to be sorted.
	         */

	    }, {
	        key: 'sortJson',
	        value: function sortJson(json) {
	            json.sort(function (child1, child2) {
	                var parent1 = child1.parent.toLowerCase(),
	                    parent2 = child2.parent.toLowerCase();

	                return parent1 > parent2 ? 1 : parent1 < parent2 ? -1 : 0;
	            });
	        }

	        /**
	         * Go through all of the thresholds and find the one that is equal to the value.
	         *
	         * @param {String} value The value from the JSON.
	         * @param {Array} thresholds The thresholds from the JSON.
	         * @returns {number} The index of the threshold that is equal to the value or -1 if the value doesn't equal any
	         *  thresholds.
	         * @private
	         */

	    }, {
	        key: 'stringCompare',
	        value: function stringCompare(value, thresholds) {
	            if (typeof value !== 'string') {
	                throw 'Cannot make value comparison between a string and a ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '.';
	            }

	            if (!thresholds || !thresholds.length) {
	                throw 'Cannot find correct threshold because there are no thresholds.';
	            }

	            var thresholdsLength = thresholds.length;

	            for (var i = 0; i < thresholdsLength; i++) {
	                if (value == thresholds[i]) {
	                    return i;
	                }
	            }

	            return -1;
	        }

	        /**
	         * Go through all of the thresholds and find the smallest number that is greater than the value.
	         *
	         * @param {number} value The value from the JSON.
	         * @param {Array} thresholds The thresholds from the JSON.
	         * @returns {number} The index of the threshold that is the smallest number that is greater than the value or -1 if
	         *  the value isn't between any thresholds.
	         * @private
	         */

	    }, {
	        key: 'numericCompare',
	        value: function numericCompare(value, thresholds) {
	            if (typeof value !== 'number') {
	                throw 'Cannot make value comparison between a number and a ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '.';
	            }

	            if (!thresholds || !thresholds.length) {
	                throw 'Cannot find correct threshold because there are no thresholds.';
	            }

	            var length = thresholds.length;

	            for (var i = 0; i < length; i++) {
	                if (value <= thresholds[i]) {
	                    return i;
	                }
	            }

	            return -1;
	        }
	    }, {
	        key: 'verifyJson',
	        value: function verifyJson(json) {
	            if (!RelationshipGraph.isArray(json) || json.length < 0 || _typeof(json[0]) !== 'object') {
	                throw 'JSON has to be an Array of JavaScript objects that is not empty.';
	            }

	            var length = json.length;

	            while (length--) {
	                var element = json[length];
	                var keys = Object.keys(element);
	                var keyLength = keys.length;
	                var parentColor = element.parentColor;


	                if (element.parent === undefined) {
	                    throw 'Child does not have a parent.';
	                } else if (parentColor !== undefined && (parentColor > 4 || parentColor < 0)) {
	                    throw 'Parent color is unsupported.';
	                }

	                while (keyLength--) {
	                    if (keys[keyLength].toUpperCase() == 'VALUE') {
	                        if (keys[keyLength] != 'value') {
	                            json[length].value = json[length][keys[keyLength]];
	                            delete json[length][keys[keyLength]];
	                        }
	                        break;
	                    }
	                }
	            }

	            return true;
	        }
	    }]);

	    return RelationshipGraph;
	}();

	// Make the tests work in the browser..


	exports.default = RelationshipGraph;
	window.RelationshipGraph = RelationshipGraph;

	if (window.d3) {
	    /**
	     * Add a relationshipGraph function to d3 that returns a RelationshipGraph object.
	     */
	    window.d3.relationshipGraph = function () {
	        'use strict';

	        return RelationshipGraph.extend.apply(RelationshipGraph, arguments);
	    };

	    /**
	     * Add relationshipGraph to selection.
	     *
	     * @param {Object} userConfig Configuration for graph.
	     * @return {Object} Returns a new RelationshipGraph object.
	     */
	    window.d3.selection.prototype.relationshipGraph = function (userConfig) {
	        'use strict';

	        return new RelationshipGraph(this, userConfig);
	    };
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-collection/ Version 1.0.2. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';

	var prefix = "$";

	function Map() {}

	Map.prototype = map.prototype = {
	  constructor: Map,
	  has: function(key) {
	    return (prefix + key) in this;
	  },
	  get: function(key) {
	    return this[prefix + key];
	  },
	  set: function(key, value) {
	    this[prefix + key] = value;
	    return this;
	  },
	  remove: function(key) {
	    var property = prefix + key;
	    return property in this && delete this[property];
	  },
	  clear: function() {
	    for (var property in this) if (property[0] === prefix) delete this[property];
	  },
	  keys: function() {
	    var keys = [];
	    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
	    return keys;
	  },
	  values: function() {
	    var values = [];
	    for (var property in this) if (property[0] === prefix) values.push(this[property]);
	    return values;
	  },
	  entries: function() {
	    var entries = [];
	    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
	    return entries;
	  },
	  size: function() {
	    var size = 0;
	    for (var property in this) if (property[0] === prefix) ++size;
	    return size;
	  },
	  empty: function() {
	    for (var property in this) if (property[0] === prefix) return false;
	    return true;
	  },
	  each: function(f) {
	    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
	  }
	};

	function map(object, f) {
	  var map = new Map;

	  // Copy constructor.
	  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

	  // Index array by numeric index or specified key function.
	  else if (Array.isArray(object)) {
	    var i = -1,
	        n = object.length,
	        o;

	    if (f == null) while (++i < n) map.set(i, object[i]);
	    else while (++i < n) map.set(f(o = object[i], i, object), o);
	  }

	  // Convert object to map.
	  else if (object) for (var key in object) map.set(key, object[key]);

	  return map;
	}

	var nest = function() {
	  var keys = [],
	      sortKeys = [],
	      sortValues,
	      rollup,
	      nest;

	  function apply(array, depth, createResult, setResult) {
	    if (depth >= keys.length) return rollup != null
	        ? rollup(array) : (sortValues != null
	        ? array.sort(sortValues)
	        : array);

	    var i = -1,
	        n = array.length,
	        key = keys[depth++],
	        keyValue,
	        value,
	        valuesByKey = map(),
	        values,
	        result = createResult();

	    while (++i < n) {
	      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	        values.push(value);
	      } else {
	        valuesByKey.set(keyValue, [value]);
	      }
	    }

	    valuesByKey.each(function(values, key) {
	      setResult(result, key, apply(values, depth, createResult, setResult));
	    });

	    return result;
	  }

	  function entries(map$$1, depth) {
	    if (++depth > keys.length) return map$$1;
	    var array, sortKey = sortKeys[depth - 1];
	    if (rollup != null && depth >= keys.length) array = map$$1.entries();
	    else array = [], map$$1.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
	    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
	  }

	  return nest = {
	    object: function(array) { return apply(array, 0, createObject, setObject); },
	    map: function(array) { return apply(array, 0, createMap, setMap); },
	    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	    key: function(d) { keys.push(d); return nest; },
	    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	    sortValues: function(order) { sortValues = order; return nest; },
	    rollup: function(f) { rollup = f; return nest; }
	  };
	};

	function createObject() {
	  return {};
	}

	function setObject(object, key, value) {
	  object[key] = value;
	}

	function createMap() {
	  return map();
	}

	function setMap(map$$1, key, value) {
	  map$$1.set(key, value);
	}

	function Set() {}

	var proto = map.prototype;

	Set.prototype = set.prototype = {
	  constructor: Set,
	  has: proto.has,
	  add: function(value) {
	    value += "";
	    this[prefix + value] = value;
	    return this;
	  },
	  remove: proto.remove,
	  clear: proto.clear,
	  values: proto.keys,
	  size: proto.size,
	  empty: proto.empty,
	  each: proto.each
	};

	function set(object, f) {
	  var set = new Set;

	  // Copy constructor.
	  if (object instanceof Set) object.each(function(value) { set.add(value); });

	  // Otherwise, assume it’s an array.
	  else if (object) {
	    var i = -1, n = object.length;
	    if (f == null) while (++i < n) set.add(object[i]);
	    else while (++i < n) set.add(f(object[i], i, object));
	  }

	  return set;
	}

	var keys = function(map) {
	  var keys = [];
	  for (var key in map) keys.push(key);
	  return keys;
	};

	var values = function(map) {
	  var values = [];
	  for (var key in map) values.push(map[key]);
	  return values;
	};

	var entries = function(map) {
	  var entries = [];
	  for (var key in map) entries.push({key: key, value: map[key]});
	  return entries;
	};

	exports.nest = nest;
	exports.set = set;
	exports.map = map;
	exports.keys = keys;
	exports.values = values;
	exports.entries = entries;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-selection/ Version 1.0.3. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';

	var xhtml = "http://www.w3.org/1999/xhtml";

	var namespaces = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: xhtml,
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};

	var namespace = function(name) {
	  var prefix = name += "", i = prefix.indexOf(":");
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
	};

	function creatorInherit(name) {
	  return function() {
	    var document = this.ownerDocument,
	        uri = this.namespaceURI;
	    return uri === xhtml && document.documentElement.namespaceURI === xhtml
	        ? document.createElement(name)
	        : document.createElementNS(uri, name);
	  };
	}

	function creatorFixed(fullname) {
	  return function() {
	    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	  };
	}

	var creator = function(name) {
	  var fullname = namespace(name);
	  return (fullname.local
	      ? creatorFixed
	      : creatorInherit)(fullname);
	};

	var nextId = 0;

	function local() {
	  return new Local;
	}

	function Local() {
	  this._ = "@" + (++nextId).toString(36);
	}

	Local.prototype = local.prototype = {
	  constructor: Local,
	  get: function(node) {
	    var id = this._;
	    while (!(id in node)) if (!(node = node.parentNode)) return;
	    return node[id];
	  },
	  set: function(node, value) {
	    return node[this._] = value;
	  },
	  remove: function(node) {
	    return this._ in node && delete node[this._];
	  },
	  toString: function() {
	    return this._;
	  }
	};

	var matcher = function(selector) {
	  return function() {
	    return this.matches(selector);
	  };
	};

	if (typeof document !== "undefined") {
	  var element = document.documentElement;
	  if (!element.matches) {
	    var vendorMatches = element.webkitMatchesSelector
	        || element.msMatchesSelector
	        || element.mozMatchesSelector
	        || element.oMatchesSelector;
	    matcher = function(selector) {
	      return function() {
	        return vendorMatches.call(this, selector);
	      };
	    };
	  }
	}

	var matcher$1 = matcher;

	var filterEvents = {};

	exports.event = null;

	if (typeof document !== "undefined") {
	  var element$1 = document.documentElement;
	  if (!("onmouseenter" in element$1)) {
	    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
	  }
	}

	function filterContextListener(listener, index, group) {
	  listener = contextListener(listener, index, group);
	  return function(event) {
	    var related = event.relatedTarget;
	    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
	      listener.call(this, event);
	    }
	  };
	}

	function contextListener(listener, index, group) {
	  return function(event1) {
	    var event0 = exports.event; // Events can be reentrant (e.g., focus).
	    exports.event = event1;
	    try {
	      listener.call(this, this.__data__, index, group);
	    } finally {
	      exports.event = event0;
	    }
	  };
	}

	function parseTypenames(typenames) {
	  return typenames.trim().split(/^|\s+/).map(function(t) {
	    var name = "", i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    return {type: t, name: name};
	  });
	}

	function onRemove(typename) {
	  return function() {
	    var on = this.__on;
	    if (!on) return;
	    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.capture);
	      } else {
	        on[++i] = o;
	      }
	    }
	    if (++i) on.length = i;
	    else delete this.__on;
	  };
	}

	function onAdd(typename, value, capture) {
	  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
	  return function(d, i, group) {
	    var on = this.__on, o, listener = wrap(value, i, group);
	    if (on) for (var j = 0, m = on.length; j < m; ++j) {
	      if ((o = on[j]).type === typename.type && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.capture);
	        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
	        o.value = value;
	        return;
	      }
	    }
	    this.addEventListener(typename.type, listener, capture);
	    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
	    if (!on) this.__on = [o];
	    else on.push(o);
	  };
	}

	var selection_on = function(typename, value, capture) {
	  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

	  if (arguments.length < 2) {
	    var on = this.node().__on;
	    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	      for (i = 0, o = on[j]; i < n; ++i) {
	        if ((t = typenames[i]).type === o.type && t.name === o.name) {
	          return o.value;
	        }
	      }
	    }
	    return;
	  }

	  on = value ? onAdd : onRemove;
	  if (capture == null) capture = false;
	  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
	  return this;
	};

	function customEvent(event1, listener, that, args) {
	  var event0 = exports.event;
	  event1.sourceEvent = exports.event;
	  exports.event = event1;
	  try {
	    return listener.apply(that, args);
	  } finally {
	    exports.event = event0;
	  }
	}

	var sourceEvent = function() {
	  var current = exports.event, source;
	  while (source = current.sourceEvent) current = source;
	  return current;
	};

	var point = function(node, event) {
	  var svg = node.ownerSVGElement || node;

	  if (svg.createSVGPoint) {
	    var point = svg.createSVGPoint();
	    point.x = event.clientX, point.y = event.clientY;
	    point = point.matrixTransform(node.getScreenCTM().inverse());
	    return [point.x, point.y];
	  }

	  var rect = node.getBoundingClientRect();
	  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
	};

	var mouse = function(node) {
	  var event = sourceEvent();
	  if (event.changedTouches) event = event.changedTouches[0];
	  return point(node, event);
	};

	function none() {}

	var selector = function(selector) {
	  return selector == null ? none : function() {
	    return this.querySelector(selector);
	  };
	};

	var selection_select = function(select) {
	  if (typeof select !== "function") select = selector(select);

	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	      }
	    }
	  }

	  return new Selection(subgroups, this._parents);
	};

	function empty() {
	  return [];
	}

	var selectorAll = function(selector) {
	  return selector == null ? empty : function() {
	    return this.querySelectorAll(selector);
	  };
	};

	var selection_selectAll = function(select) {
	  if (typeof select !== "function") select = selectorAll(select);

	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        subgroups.push(select.call(node, node.__data__, i, group));
	        parents.push(node);
	      }
	    }
	  }

	  return new Selection(subgroups, parents);
	};

	var selection_filter = function(match) {
	  if (typeof match !== "function") match = matcher$1(match);

	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }

	  return new Selection(subgroups, this._parents);
	};

	var sparse = function(update) {
	  return new Array(update.length);
	};

	var selection_enter = function() {
	  return new Selection(this._enter || this._groups.map(sparse), this._parents);
	};

	function EnterNode(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}

	EnterNode.prototype = {
	  constructor: EnterNode,
	  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
	  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
	  querySelector: function(selector) { return this._parent.querySelector(selector); },
	  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
	};

	var constant = function(x) {
	  return function() {
	    return x;
	  };
	};

	var keyPrefix = "$"; // Protect against keys like “__proto__”.

	function bindIndex(parent, group, enter, update, exit, data) {
	  var i = 0,
	      node,
	      groupLength = group.length,
	      dataLength = data.length;

	  // Put any non-null nodes that fit into update.
	  // Put any null nodes into enter.
	  // Put any remaining data into enter.
	  for (; i < dataLength; ++i) {
	    if (node = group[i]) {
	      node.__data__ = data[i];
	      update[i] = node;
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }

	  // Put any non-null nodes that don’t fit into exit.
	  for (; i < groupLength; ++i) {
	    if (node = group[i]) {
	      exit[i] = node;
	    }
	  }
	}

	function bindKey(parent, group, enter, update, exit, data, key) {
	  var i,
	      node,
	      nodeByKeyValue = {},
	      groupLength = group.length,
	      dataLength = data.length,
	      keyValues = new Array(groupLength),
	      keyValue;

	  // Compute the key for each node.
	  // If multiple nodes have the same key, the duplicates are added to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if (node = group[i]) {
	      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
	      if (keyValue in nodeByKeyValue) {
	        exit[i] = node;
	      } else {
	        nodeByKeyValue[keyValue] = node;
	      }
	    }
	  }

	  // Compute the key for each datum.
	  // If there a node associated with this key, join and add it to update.
	  // If there is not (or the key is a duplicate), add it to enter.
	  for (i = 0; i < dataLength; ++i) {
	    keyValue = keyPrefix + key.call(parent, data[i], i, data);
	    if (node = nodeByKeyValue[keyValue]) {
	      update[i] = node;
	      node.__data__ = data[i];
	      nodeByKeyValue[keyValue] = null;
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }

	  // Add any remaining nodes that were not bound to data to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
	      exit[i] = node;
	    }
	  }
	}

	var selection_data = function(value, key) {
	  if (!value) {
	    data = new Array(this.size()), j = -1;
	    this.each(function(d) { data[++j] = d; });
	    return data;
	  }

	  var bind = key ? bindKey : bindIndex,
	      parents = this._parents,
	      groups = this._groups;

	  if (typeof value !== "function") value = constant(value);

	  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	    var parent = parents[j],
	        group = groups[j],
	        groupLength = group.length,
	        data = value.call(parent, parent && parent.__data__, j, parents),
	        dataLength = data.length,
	        enterGroup = enter[j] = new Array(dataLength),
	        updateGroup = update[j] = new Array(dataLength),
	        exitGroup = exit[j] = new Array(groupLength);

	    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

	    // Now connect the enter nodes to their following update node, such that
	    // appendChild can insert the materialized enter node before this node,
	    // rather than at the end of the parent node.
	    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	      if (previous = enterGroup[i0]) {
	        if (i0 >= i1) i1 = i0 + 1;
	        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	        previous._next = next || null;
	      }
	    }
	  }

	  update = new Selection(update, parents);
	  update._enter = enter;
	  update._exit = exit;
	  return update;
	};

	var selection_exit = function() {
	  return new Selection(this._exit || this._groups.map(sparse), this._parents);
	};

	var selection_merge = function(selection) {

	  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }

	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }

	  return new Selection(merges, this._parents);
	};

	var selection_order = function() {

	  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	      if (node = group[i]) {
	        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }

	  return this;
	};

	var selection_sort = function(compare) {
	  if (!compare) compare = ascending;

	  function compareNode(a, b) {
	    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	  }

	  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        sortgroup[i] = node;
	      }
	    }
	    sortgroup.sort(compareNode);
	  }

	  return new Selection(sortgroups, this._parents).order();
	};

	function ascending(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	var selection_call = function() {
	  var callback = arguments[0];
	  arguments[0] = this;
	  callback.apply(null, arguments);
	  return this;
	};

	var selection_nodes = function() {
	  var nodes = new Array(this.size()), i = -1;
	  this.each(function() { nodes[++i] = this; });
	  return nodes;
	};

	var selection_node = function() {

	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	      var node = group[i];
	      if (node) return node;
	    }
	  }

	  return null;
	};

	var selection_size = function() {
	  var size = 0;
	  this.each(function() { ++size; });
	  return size;
	};

	var selection_empty = function() {
	  return !this.node();
	};

	var selection_each = function(callback) {

	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) callback.call(node, node.__data__, i, group);
	    }
	  }

	  return this;
	};

	function attrRemove(name) {
	  return function() {
	    this.removeAttribute(name);
	  };
	}

	function attrRemoveNS(fullname) {
	  return function() {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}

	function attrConstant(name, value) {
	  return function() {
	    this.setAttribute(name, value);
	  };
	}

	function attrConstantNS(fullname, value) {
	  return function() {
	    this.setAttributeNS(fullname.space, fullname.local, value);
	  };
	}

	function attrFunction(name, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttribute(name);
	    else this.setAttribute(name, v);
	  };
	}

	function attrFunctionNS(fullname, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
	    else this.setAttributeNS(fullname.space, fullname.local, v);
	  };
	}

	var selection_attr = function(name, value) {
	  var fullname = namespace(name);

	  if (arguments.length < 2) {
	    var node = this.node();
	    return fullname.local
	        ? node.getAttributeNS(fullname.space, fullname.local)
	        : node.getAttribute(fullname);
	  }

	  return this.each((value == null
	      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
	      ? (fullname.local ? attrFunctionNS : attrFunction)
	      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
	};

	var defaultView = function(node) {
	  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
	      || (node.document && node) // node is a Window
	      || node.defaultView; // node is a Document
	};

	function styleRemove(name) {
	  return function() {
	    this.style.removeProperty(name);
	  };
	}

	function styleConstant(name, value, priority) {
	  return function() {
	    this.style.setProperty(name, value, priority);
	  };
	}

	function styleFunction(name, value, priority) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.style.removeProperty(name);
	    else this.style.setProperty(name, v, priority);
	  };
	}

	var selection_style = function(name, value, priority) {
	  var node;
	  return arguments.length > 1
	      ? this.each((value == null
	            ? styleRemove : typeof value === "function"
	            ? styleFunction
	            : styleConstant)(name, value, priority == null ? "" : priority))
	      : defaultView(node = this.node())
	          .getComputedStyle(node, null)
	          .getPropertyValue(name);
	};

	function propertyRemove(name) {
	  return function() {
	    delete this[name];
	  };
	}

	function propertyConstant(name, value) {
	  return function() {
	    this[name] = value;
	  };
	}

	function propertyFunction(name, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) delete this[name];
	    else this[name] = v;
	  };
	}

	var selection_property = function(name, value) {
	  return arguments.length > 1
	      ? this.each((value == null
	          ? propertyRemove : typeof value === "function"
	          ? propertyFunction
	          : propertyConstant)(name, value))
	      : this.node()[name];
	};

	function classArray(string) {
	  return string.trim().split(/^|\s+/);
	}

	function classList(node) {
	  return node.classList || new ClassList(node);
	}

	function ClassList(node) {
	  this._node = node;
	  this._names = classArray(node.getAttribute("class") || "");
	}

	ClassList.prototype = {
	  add: function(name) {
	    var i = this._names.indexOf(name);
	    if (i < 0) {
	      this._names.push(name);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  remove: function(name) {
	    var i = this._names.indexOf(name);
	    if (i >= 0) {
	      this._names.splice(i, 1);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  contains: function(name) {
	    return this._names.indexOf(name) >= 0;
	  }
	};

	function classedAdd(node, names) {
	  var list = classList(node), i = -1, n = names.length;
	  while (++i < n) list.add(names[i]);
	}

	function classedRemove(node, names) {
	  var list = classList(node), i = -1, n = names.length;
	  while (++i < n) list.remove(names[i]);
	}

	function classedTrue(names) {
	  return function() {
	    classedAdd(this, names);
	  };
	}

	function classedFalse(names) {
	  return function() {
	    classedRemove(this, names);
	  };
	}

	function classedFunction(names, value) {
	  return function() {
	    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	  };
	}

	var selection_classed = function(name, value) {
	  var names = classArray(name + "");

	  if (arguments.length < 2) {
	    var list = classList(this.node()), i = -1, n = names.length;
	    while (++i < n) if (!list.contains(names[i])) return false;
	    return true;
	  }

	  return this.each((typeof value === "function"
	      ? classedFunction : value
	      ? classedTrue
	      : classedFalse)(names, value));
	};

	function textRemove() {
	  this.textContent = "";
	}

	function textConstant(value) {
	  return function() {
	    this.textContent = value;
	  };
	}

	function textFunction(value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  };
	}

	var selection_text = function(value) {
	  return arguments.length
	      ? this.each(value == null
	          ? textRemove : (typeof value === "function"
	          ? textFunction
	          : textConstant)(value))
	      : this.node().textContent;
	};

	function htmlRemove() {
	  this.innerHTML = "";
	}

	function htmlConstant(value) {
	  return function() {
	    this.innerHTML = value;
	  };
	}

	function htmlFunction(value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  };
	}

	var selection_html = function(value) {
	  return arguments.length
	      ? this.each(value == null
	          ? htmlRemove : (typeof value === "function"
	          ? htmlFunction
	          : htmlConstant)(value))
	      : this.node().innerHTML;
	};

	function raise() {
	  if (this.nextSibling) this.parentNode.appendChild(this);
	}

	var selection_raise = function() {
	  return this.each(raise);
	};

	function lower() {
	  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	}

	var selection_lower = function() {
	  return this.each(lower);
	};

	var selection_append = function(name) {
	  var create = typeof name === "function" ? name : creator(name);
	  return this.select(function() {
	    return this.appendChild(create.apply(this, arguments));
	  });
	};

	function constantNull() {
	  return null;
	}

	var selection_insert = function(name, before) {
	  var create = typeof name === "function" ? name : creator(name),
	      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
	  return this.select(function() {
	    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	  });
	};

	function remove() {
	  var parent = this.parentNode;
	  if (parent) parent.removeChild(this);
	}

	var selection_remove = function() {
	  return this.each(remove);
	};

	var selection_datum = function(value) {
	  return arguments.length
	      ? this.property("__data__", value)
	      : this.node().__data__;
	};

	function dispatchEvent(node, type, params) {
	  var window = defaultView(node),
	      event = window.CustomEvent;

	  if (event) {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
	    else event.initEvent(type, false, false);
	  }

	  node.dispatchEvent(event);
	}

	function dispatchConstant(type, params) {
	  return function() {
	    return dispatchEvent(this, type, params);
	  };
	}

	function dispatchFunction(type, params) {
	  return function() {
	    return dispatchEvent(this, type, params.apply(this, arguments));
	  };
	}

	var selection_dispatch = function(type, params) {
	  return this.each((typeof params === "function"
	      ? dispatchFunction
	      : dispatchConstant)(type, params));
	};

	var root = [null];

	function Selection(groups, parents) {
	  this._groups = groups;
	  this._parents = parents;
	}

	function selection() {
	  return new Selection([[document.documentElement]], root);
	}

	Selection.prototype = selection.prototype = {
	  constructor: Selection,
	  select: selection_select,
	  selectAll: selection_selectAll,
	  filter: selection_filter,
	  data: selection_data,
	  enter: selection_enter,
	  exit: selection_exit,
	  merge: selection_merge,
	  order: selection_order,
	  sort: selection_sort,
	  call: selection_call,
	  nodes: selection_nodes,
	  node: selection_node,
	  size: selection_size,
	  empty: selection_empty,
	  each: selection_each,
	  attr: selection_attr,
	  style: selection_style,
	  property: selection_property,
	  classed: selection_classed,
	  text: selection_text,
	  html: selection_html,
	  raise: selection_raise,
	  lower: selection_lower,
	  append: selection_append,
	  insert: selection_insert,
	  remove: selection_remove,
	  datum: selection_datum,
	  on: selection_on,
	  dispatch: selection_dispatch
	};

	var select = function(selector) {
	  return typeof selector === "string"
	      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
	      : new Selection([[selector]], root);
	};

	var selectAll = function(selector) {
	  return typeof selector === "string"
	      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
	      : new Selection([selector == null ? [] : selector], root);
	};

	var touch = function(node, touches, identifier) {
	  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

	  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
	    if ((touch = touches[i]).identifier === identifier) {
	      return point(node, touch);
	    }
	  }

	  return null;
	};

	var touches = function(node, touches) {
	  if (touches == null) touches = sourceEvent().touches;

	  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
	    points[i] = point(node, touches[i]);
	  }

	  return points;
	};

	exports.creator = creator;
	exports.local = local;
	exports.matcher = matcher$1;
	exports.mouse = mouse;
	exports.namespace = namespace;
	exports.namespaces = namespaces;
	exports.select = select;
	exports.selectAll = selectAll;
	exports.selection = selection;
	exports.selector = selector;
	exports.selectorAll = selectorAll;
	exports.touch = touch;
	exports.touches = touches;
	exports.window = defaultView;
	exports.customEvent = customEvent;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));


/***/ }
/******/ ]);