"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
document.addEventListener('DOMContentLoaded', function () {
  var spellLists, featsList, day_list, known_list, traitsList, languageList, abilitiesList;
  function updateCharacterDescription() {
    return new Promise(function (resolve, reject) {
      var updateMostRecentTabValue = localStorage.getItem("mostRecentTabValue");
      if (!updateMostRecentTabValue) {
        updateMostRecentTabValue = "js-tab-panel-character";
      }
      localStorage.setItem("updateMostRecentTabValue", updateMostRecentTabValue);
      fetch('https://pathfinder-char-creator.onrender.com/get_character_data', {
        method: 'GET',
        credentials: 'omit'
      }).then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(function (characterData) {
        console.log('Received character data:', characterData);
        localStorage.setItem('characterData', JSON.stringify(characterData));
        if (characterData.spell_list_choose_from) {
          spellLists = characterData.spell_list_choose_from;
          day_list = characterData.day_list;
          known_list = characterData.known_list;
        } else {
          console.log("spellLists is not populated");
        }
        updatespells_known_and_spells_per_day();
        featsList = characterData.feats;
        console.log('Feats List:', featsList);
        traitsList = characterData.selected_traits;
        console.log('traits List:', traitsList);
        languagesList = characterData.language_text;
        console.log('languages List:', languagesList);
        abilitiesList = characterData.class_ability;
        console.log('abilities List:', abilitiesList);
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var featsInfoModule, displayFeatsInfo, displayTraitsInfo, displayArchetypeInfo, displaybodyslotsInfo, display_abilties, display_character_description, featsDescriptionElement, traitsDescriptionElement, archetypeDescriptionElement, bodyslotsDescriptionElement, info, abilitiesDescriptionElement, characterDescriptionElement;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('./display_functions.js'));
                });
              case 3:
                featsInfoModule = _context.sent;
                displayFeatsInfo = featsInfoModule.displayFeatsInfo;
                displayTraitsInfo = featsInfoModule.displayTraitsInfo;
                displayArchetypeInfo = featsInfoModule.displayArchetypeInfo;
                displaybodyslotsInfo = featsInfoModule.displaybodyslotsInfo;
                display_abilties = featsInfoModule.display_abilties;
                display_character_description = featsInfoModule.display_character_description;
                featsDescriptionElement = document.getElementById('statistics-feats-notes');
                traitsDescriptionElement = document.getElementById('statistics-traits-notes');
                archetypeDescriptionElement = document.getElementById('statistics-archetypes-notes');
                bodyslotsDescriptionElement = document.getElementById('equipment-body-slots-notes');
                info = characterData.equip_descrip;
                abilitiesDescriptionElement = document.getElementById('statistics-abilities-notes');
                class_features = characterData['class features'];
                characterDescriptionElement = document.getElementById('basics-character-description');
                displayFeatsInfo(featsDescriptionElement, characterData);
                displayTraitsInfo(traitsDescriptionElement, characterData);
                displayArchetypeInfo(archetypeDescriptionElement, characterData);
                displaybodyslotsInfo(bodyslotsDescriptionElement, characterData, info);
                display_abilties(abilitiesDescriptionElement, characterData, class_features);
                display_character_description(characterDescriptionElement, characterData);
                _context.next = 29;
                break;
              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](0);
                console.error('Error during dynamic import:', _context.t0);
              case 29:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 26]]);
        }))();
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var featsInfoModule, variableMappings;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('./variableMappings.js'));
                });
              case 3:
                featsInfoModule = _context2.sent;
                variableMappings = featsInfoModule.variableMappings_data;
                variableMappings.forEach(function (mapping, index) {
                  var element = document.getElementById(mapping.elementId);
                  if (element) {
                    var value;
                    if (Array.isArray(mapping.dataKey)) {
                      var _mapping$dataKey = _slicedToArray(mapping.dataKey, 2),
                        objectKey = _mapping$dataKey[0],
                        nestedKey = _mapping$dataKey[1];
                      value = characterData[objectKey] ? characterData[objectKey][nestedKey] : undefined;
                    } else {
                      var keys = mapping.dataKey.split('.');
                      value = keys.reduce(function (acc, key) {
                        return acc ? acc[key] : undefined;
                      }, characterData);
                    }
                    if (value !== undefined) {
                      element.value = value;
                      element.focus();
                      stats.render();
                      classes.render();
                      textBlock.render();
                      textareaBlock.render();
                    }
                  }
                });
                _context2.next = 11;
                break;
              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error('Error during dynamic import:', _context2.t0);
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 8]]);
        }))();
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var tabValueModule, clickMostRecentTab;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('./mostRecentTabValue.js'));
                });
              case 3:
                tabValueModule = _context3.sent;
                clickMostRecentTab = tabValueModule.clickMostRecentTab;
                clickMostRecentTab(characterData, updateMostRecentTabValue);
                _context3.next = 11;
                break;
              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.error('Error during dynamic import:', _context3.t0);
              case 11:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 8]]);
        }))();
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var skillRanksString, skillRanksObject, skillRanksModule, skill_ranks_func, includeCustomCheckbox;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                skillRanksString = characterData.skill_ranks;
                skillRanksObject = JSON.parse(skillRanksString);
                _context4.next = 5;
                return Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('./skill_ranks.js'));
                });
              case 5:
                skillRanksModule = _context4.sent;
                skill_ranks_func = skillRanksModule.skill_ranks_func;
                includeCustomCheckbox = document.getElementById('skills-ranks-include-custom');
                skill_ranks_func(skillRanksObject, includeCustomCheckbox);
                skills.render();
                _context4.next = 15;
                break;
              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                console.error('Error during dynamic import:', _context4.t0);
              case 15:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[0, 12]]);
        }))();
        resolve(characterData);
      })["catch"](function (error) {
        console.error('Error fetching or parsing character data:', error);
        var characterDescriptionElement = document.getElementById('basics-character-description');
        if (characterDescriptionElement) {
          characterDescriptionElement.innerHTML = "<pre>Error: ".concat(error.message, "</pre>");
        }
        reject(error);
      });
    });
  }
  var updateDescriptionButton = document.getElementById('updateDescriptionButton');
  function updatespells_known_and_spells_per_day() {
    // Early return if either list is empty
    if (!day_list || !known_list) {
      console.log("Not a caster");
      return;
    }
    console.log("day_list electric boogaloo", day_list);
    console.log("known_list electric boogaloo", known_list);
    for (var i = 0; i < Math.min(day_list.length, known_list.length); i++) {
      var dayElement = document.getElementById("spells-book-level-".concat(i, "-per_day"));
      var knownElement = document.getElementById("spells-book-level-".concat(i, "-known"));
      if (i < day_list.length) {
        dayElement.value = day_list[i];
        knownElement.value = known_list[i];
      } else {
        dayElement.value = "N/A";
        knownElement.value = "N/A";
      }
    }
  }
  function clickClearAllButtons() {
    return _clickClearAllButtons.apply(this, arguments);
  }
  function _clickClearAllButtons() {
    _clickClearAllButtons = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var clearExistingAbilitiesModule, clickClearAllFeatButton, clickClearAllTraitsButton, clickClearAllLanguageButton, clickClearAllAbilitiesButton;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require('./clearExistingData.js'));
            });
          case 2:
            clearExistingAbilitiesModule = _context6.sent;
            clickClearAllFeatButton = clearExistingAbilitiesModule.clickClearAllFeatButton;
            clickClearAllTraitsButton = clearExistingAbilitiesModule.clickClearAllTraitsButton;
            clickClearAllLanguageButton = clearExistingAbilitiesModule.clickClearAllLanguageButton;
            clickClearAllAbilitiesButton = clearExistingAbilitiesModule.clickClearAllAbilitiesButton;
            _context6.next = 9;
            return clickClearAllFeatButton();
          case 9:
            _context6.next = 11;
            return clickClearAllTraitsButton();
          case 11:
            _context6.next = 13;
            return clickClearAllLanguageButton();
          case 13:
            _context6.next = 15;
            return clickClearAllAbilitiesButton();
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return _clickClearAllButtons.apply(this, arguments);
  }
  function handleSpellsAndFeats() {
    return _handleSpellsAndFeats.apply(this, arguments);
  }
  function _handleSpellsAndFeats() {
    _handleSpellsAndFeats = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var addWithDelayModule, addSpellWithDelay, addFeatWithDelay, addTraitWithDelay, addLanguageWithDelay, addAbilitiesWithDelay, j, spellList, i, spellName, _i2, featName, _i3, traitName, _i4, abilitiesName, _i5, languageName;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require('./addWithDelay.js'));
            });
          case 2:
            addWithDelayModule = _context7.sent;
            addSpellWithDelay = addWithDelayModule.addSpellWithDelay;
            addFeatWithDelay = addWithDelayModule.addFeatWithDelay;
            addTraitWithDelay = addWithDelayModule.addTraitWithDelay;
            addLanguageWithDelay = addWithDelayModule.addLanguageWithDelay;
            addAbilitiesWithDelay = addWithDelayModule.addAbilitiesWithDelay;
            console.log('Button clicked');
            _context7.next = 11;
            return updateCharacterDescription();
          case 11:
            if (!spellLists) {
              _context7.next = 29;
              break;
            }
            j = 0;
          case 13:
            if (!(j < spellLists.length)) {
              _context7.next = 27;
              break;
            }
            spellList = spellLists[j];
            i = 0;
          case 16:
            if (!(i < spellList.length)) {
              _context7.next = 24;
              break;
            }
            spellName = spellList[i];
            console.log("Spell Name: ".concat(spellName));
            _context7.next = 21;
            return addSpellWithDelay(j, spellName);
          case 21:
            i++;
            _context7.next = 16;
            break;
          case 24:
            j++;
            _context7.next = 13;
            break;
          case 27:
            _context7.next = 30;
            break;
          case 29:
            console.log('spellLists is not populated');
          case 30:
            _i2 = 0;
          case 31:
            if (!(_i2 < featsList.length)) {
              _context7.next = 39;
              break;
            }
            featName = featsList[_i2];
            console.log("Feat Name: ".concat(featName));
            _context7.next = 36;
            return addFeatWithDelay(featName);
          case 36:
            _i2++;
            _context7.next = 31;
            break;
          case 39:
            _i3 = 0;
          case 40:
            if (!(_i3 < traitsList.length)) {
              _context7.next = 48;
              break;
            }
            traitName = traitsList[_i3];
            console.log("Trait Name: ".concat(traitName));
            _context7.next = 45;
            return addTraitWithDelay(traitName);
          case 45:
            _i3++;
            _context7.next = 40;
            break;
          case 48:
            _i4 = 0;
          case 49:
            if (!(_i4 < abilitiesList.length)) {
              _context7.next = 57;
              break;
            }
            abilitiesName = abilitiesList[_i4];
            console.log("Abilities Name: ".concat(abilitiesName));
            _context7.next = 54;
            return addAbilitiesWithDelay(abilitiesName);
          case 54:
            _i4++;
            _context7.next = 49;
            break;
          case 57:
            _i5 = 0;
          case 58:
            if (!(_i5 < languagesList.length)) {
              _context7.next = 66;
              break;
            }
            languageName = languagesList[_i5];
            console.log("Language Name: ".concat(languageName));
            _context7.next = 63;
            return addLanguageWithDelay(languageName);
          case 63:
            _i5++;
            _context7.next = 58;
            break;
          case 66:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return _handleSpellsAndFeats.apply(this, arguments);
  }
  if (updateDescriptionButton) {
    updateDescriptionButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return clickClearAllButtons();
          case 2:
            _context5.next = 4;
            return handleSpellsAndFeats();
          case 4:
            _context5.next = 6;
            return clickApplyButton();
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    })));
  }
  function clickApplyButton() {
    var applyButton = document.querySelector('a[data-input-block-aggregate-options="target:equipment-wealth-platinum,action:aggregate"]');
    if (applyButton) {
      setTimeout(function () {
        applyButton.click();
        console.log('Apply button clicked.');
      }, 100);
    } else {
      console.error('Apply button not found.');
    }
  }
});