"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
document.addEventListener('DOMContentLoaded', function () {
  // Dynamic import inside the DOMContentLoaded event listener
  var variableMappings = [{
    elementId: 'basics-character-name',
    dataKey: 'character_full_name'
  }, {
    elementId: 'basics-character-description',
    dataKey: 'professions'
  },
  // physical appearance varialbes
  {
    elementId: 'basics-character-race',
    dataKey: 'chosen_race'
  }, {
    elementId: 'basics-character-age',
    dataKey: 'age_number'
  }, {
    elementId: 'basics-character-weight',
    dataKey: 'weight_number'
  }, {
    elementId: 'basics-character-height',
    dataKey: 'height_number'
  },
  // Spiritual variables
  {
    elementId: 'basics-character-alignment',
    dataKey: 'alignment'
  }, {
    elementId: 'basics-character-deity',
    dataKey: 'deity_name'
  },
  // Stat variables
  {
    elementId: 'statistics-stats-str-base',
    dataKey: 'str'
  }, {
    elementId: 'statistics-stats-dex-base',
    dataKey: 'dex'
  }, {
    elementId: 'statistics-stats-con-base',
    dataKey: 'con'
  }, {
    elementId: 'statistics-stats-int-base',
    dataKey: 'int'
  }, {
    elementId: 'statistics-stats-wis-base',
    dataKey: 'wis'
  }, {
    elementId: 'statistics-stats-cha-base',
    dataKey: 'cha'
  },
  // Equipment variables
  {
    elementId: 'equipment-body-slots-belts',
    dataKey: ['equipment_list', 0]
  }, {
    elementId: 'equipment-body-slots-body',
    dataKey: ['equipment_list', 1]
  }, {
    elementId: 'equipment-body-slots-chest',
    dataKey: ['equipment_list', 2]
  }, {
    elementId: 'equipment-body-slots-eyes',
    dataKey: ['equipment_list', 3]
  }, {
    elementId: 'equipment-body-slots-feet',
    dataKey: ['equipment_list', 4]
  }, {
    elementId: 'equipment-body-slots-hands',
    dataKey: ['equipment_list', 5]
  }, {
    elementId: 'equipment-body-slots-head',
    dataKey: ['equipment_list', 6]
  }, {
    elementId: 'equipment-body-slots-headband',
    dataKey: ['equipment_list', 7]
  }, {
    elementId: 'equipment-body-slots-neck',
    dataKey: ['equipment_list', 8]
  }, {
    elementId: 'equipment-body-slots-shoulders',
    dataKey: ['equipment_list', 9]
  }, {
    elementId: 'equipment-body-slots-wrist',
    dataKey: ['equipment_list', 10]
  }, {
    elementId: 'equipment-body-slots-ring-left-hand',
    dataKey: ['equipment_list', 11]
  }, {
    elementId: 'equipment-body-slots-ring-right-hand',
    dataKey: ['equipment_list', 12]
  },
  // Class name section
  {
    elementId: 'basics-classes-all-0-name',
    dataKey: 'c_class'
  }, {
    elementId: 'basics-classes-all-0-level',
    dataKey: 'level'
  }, {
    elementId: 'basics-classes-all-0-hp-base',
    dataKey: 'total_hp_rolls'
  }, {
    elementId: 'basics-classes-all-0-saves-fortitude',
    dataKey: 'fort_saving_throw'
  }, {
    elementId: 'basics-classes-all-0-saves-reflex',
    dataKey: 'reflex_saving_throw'
  }, {
    elementId: 'basics-classes-all-0-saves-will',
    dataKey: 'wisdom_saving_throw'
  }, {
    elementId: 'basics-classes-all-0-bab',
    dataKey: 'bab_total'
  },
  // Defense section
  {
    elementId: 'defense-ac-stats-armor',
    dataKey: 'armor_ac'
  }, {
    elementId: 'defense-ac-stats-shield',
    dataKey: 'shield_ac'
  }, {
    elementId: 'equipment-armor-armor-name',
    dataKey: 'armor_name'
  }, {
    elementId: 'equipment-armor-armor-check-penalty',
    dataKey: 'armor_armor_check_penalty'
  }, {
    elementId: 'equipment-armor-armor-max-dex',
    dataKey: 'armor_max_dex_bonus'
  }, {
    elementId: 'equipment-armor-armor-arcane-spell-failure',
    dataKey: 'armor_spell_failure'
  }, {
    elementId: 'equipment-armor-armor-weight',
    dataKey: 'armor_weight'
  }, {
    elementId: 'equipment-armor-shield-name',
    dataKey: 'shield_name'
  }, {
    elementId: 'equipment-armor-shield-check-penalty',
    dataKey: 'shield_armor_check_penalty'
  }, {
    elementId: 'equipment-armor-shield-max-dex',
    dataKey: 'shield_max_dex_bonus'
  }, {
    elementId: 'equipment-armor-shield-arcane-spell-failure',
    dataKey: 'shield_spell_failure'
  }, {
    elementId: 'equipment-armor-shield-weight',
    dataKey: 'shield_weight'
  },
  // Wealth
  {
    elementId: 'equipment-wealth-platinum',
    dataKey: 'platnium'
  },
  // description / test variables

  // Bloodlines + Domains + Schools
  {
    elementId: 'spells-stats-school',
    dataKey: 'school'
  }, {
    elementId: 'spells-stats-opposition',
    dataKey: 'opposing_school'
  }, {
    elementId: 'spells-stats-domains',
    dataKey: 'full_domain'
  }, {
    elementId: 'spells-stats-bloodline',
    dataKey: 'bloodline'
  }

  // Add more mappings for additional variables as needed
  ];

  var spellLists, featsList, day_list, known_list, traitsList, languageList;
  function updateCharacterDescription() {
    fetch('https://pathfinder-char-creator.onrender.com/get_character_data', {
    // fetch('http://localhost:5000/get_character_data', {
        
      method: 'GET',
      credentials: 'omit'
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(function (characterData) {
      console.log('Received character data:', characterData);

      // Auto Replace Skills function
      if (characterData.spell_list_choose_from) {
        spellLists = characterData.spell_list_choose_from;
        day_list = characterData.day_list;
        known_list = characterData.known_list;
      } else {
        console.log("spellLists is not populated");
        // Handle the case where spellLists is not populated
      }

      updatespells_known_and_spells_per_day();
      featsList = characterData.feats;
      console.log('Feats List:', featsList);
      traitsList = characterData.selected_traits;
      console.log('traits List:', traitsList);
      languagesList = characterData.language_text;
      console.log('languages List:', languagesList);

      // console.log("featsList",featsList);
      // console.log(spellLists)
      var skillRanksString = characterData.skill_ranks;
      var skillRanksObject = JSON.parse(skillRanksString);

      //   Need to add a fix for Perform + knowledge martial + Profession portions + remove skills that don't belong in the list
      for (var skillName in skillRanksObject) {
        if (skillRanksObject.hasOwnProperty(skillName)) {
          var skillRank = skillRanksObject[skillName];
          var elementId = "skills-default-".concat(skillName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(), "-ranks");
          var element = document.getElementById(elementId);
          console.log('Skill Name:', skillName);
          console.log('Element ID:', elementId);
          console.log('Element:', element);
          if (element) {
            // Check if the element is an <input> element
            if (element.tagName.toLowerCase() === 'input') {
              // Update the value property for <input> elements
              element.value = skillRank;
            } else {
              // Update the text content for other types of elements
              element.textContent = skillRank;
            }
          }
        }
      }

      // End of Auto Replace Skills Function

      variableMappings.forEach(function (mapping) {
        var element = document.getElementById(mapping.elementId);
        if (element) {
          var value;
          if (Array.isArray(mapping.dataKey)) {
            var _mapping$dataKey = _slicedToArray(mapping.dataKey, 2),
              objectKey = _mapping$dataKey[0],
              nestedKey = _mapping$dataKey[1];
            value = characterData[objectKey] ? characterData[objectKey][nestedKey] : undefined;
          } else {
            var keys = mapping.dataKey.split('.'); // Split the dataKey by '.' to handle nested keys
            value = keys.reduce(function (acc, key) {
              return acc ? acc[key] : undefined;
            }, characterData);
          }
          if (value !== undefined) {
            element.value = value;
          }
        }
      });

      // characterDescriptionElement.innerHTML = `<pre>${JSON.stringify(characterData, null, 2)}</pre>`;
    })["catch"](function (error) {
      console.error('Error fetching or parsing character data:', error);
      // characterDescriptionElement.innerHTML = `<pre>Error: ${error.message}</pre>`;
    });
  }

  // Filling out Spell list + feats
  // Somewhat buggy

  // Event listener for the "Update Character" button
  var updateDescriptionButton = document.getElementById('updateDescriptionButton');

  // filling out spells per day + spells known
  function updatespells_known_and_spells_per_day() {
    console.log("day_list electric boogaloo", day_list);
    console.log("known_list electric boogaloo", known_list);
    // Update spell list per day and spells known
    for (var i = 0; i < 10; i++) {
      var dayElement = document.getElementById("spells-book-level-".concat(i, "-per_day"));
      var knownElement = document.getElementById("spells-book-level-".concat(i, "-known"));
      if (day_list && known_list) {
        // Check if the index is within the bounds of the lists
        if (i < day_list.length) {
          // Set the value property for input elements
          dayElement.value = day_list[i];
          knownElement.value = known_list[i];
        } else {
          // Handle the case where the lists don't have enough elements
          dayElement.value = "N/A";
          knownElement.value = "N/A";
        }
      }
    }
  }
  if (updateDescriptionButton) {
    // Define a function to handle both spells and feats
    var handleSpellsAndFeats = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var j, spellList, i, spellName, _i2, featName, _i3, traitName, _i4, languageName;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('Button clicked');
              _context.next = 3;
              return updateCharacterDescription();
            case 3:
              if (!spellLists) {
                _context.next = 21;
                break;
              }
              j = 0;
            case 5:
              if (!(j < spellLists.length)) {
                _context.next = 19;
                break;
              }
              spellList = spellLists[j];
              i = 0;
            case 8:
              if (!(i < spellList.length)) {
                _context.next = 16;
                break;
              }
              spellName = spellList[i];
              console.log("Spell Name: ".concat(spellName));
              _context.next = 13;
              return addSpellWithDelay(j, spellName);
            case 13:
              i++;
              _context.next = 8;
              break;
            case 16:
              j++;
              _context.next = 5;
              break;
            case 19:
              _context.next = 22;
              break;
            case 21:
              console.log('spellLists is not populated');
              // Handle the case where spellLists is not populated
            case 22:
              _i2 = 0;
            case 23:
              if (!(_i2 < featsList.length)) {
                _context.next = 31;
                break;
              }
              featName = featsList[_i2];
              console.log("Feat Name: ".concat(featName));
              _context.next = 28;
              return addFeatWithDelay(featName);
            case 28:
              _i2++;
              _context.next = 23;
              break;
            case 31:
              _i3 = 0;
            case 32:
              if (!(_i3 < traitsList.length)) {
                _context.next = 40;
                break;
              }
              traitName = traitsList[_i3];
              console.log("trait Name: ".concat(traitName));
              _context.next = 37;
              return addtraitWithDelay(traitName);
            case 37:
              _i3++;
              _context.next = 32;
              break;
            case 40:
              _i4 = 0;
            case 41:
              if (!(_i4 < languagesList.length)) {
                _context.next = 49;
                break;
              }
              languageName = languagesList[_i4];
              console.log("language Name: ".concat(languageName));
              _context.next = 46;
              return addlanguageWithDelay(languageName);
            case 46:
              _i4++;
              _context.next = 41;
              break;
            case 49:
              clickApplyButton();
            case 50:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function handleSpellsAndFeats() {
        return _ref.apply(this, arguments);
      };
    }(); // Attach the event listener to the "Update Character" button
    var addSpellWithDelay = function addSpellWithDelay(level, spellName) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var spellInput = document.getElementById("add-new-spell-level-".concat(level));
          if (spellInput && spellName) {
            spellInput.value = spellName;
            spellInput.dispatchEvent(new Event('input')); // Emulate typing in the search bar
            setTimeout(function () {
              var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
              suggestionItems.forEach(function (item) {
                if (item.textContent.trim() === spellName) {
                  item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                  var addButton = document.querySelector('.js-add-new-spell');
                  addButton.click(); // Emulate clicking the add button
                  resolve(); // Resolve the promise once the spell is added
                }
              });
            }, 200); // Wait for the suggestion list to populate
          }
        }, 200); // Adjust delay as needed
      });
    }; // Only selecting first feat, because the second option is always mythic
    var addFeatWithDelay = function addFeatWithDelay(featName) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var featInput = document.getElementById('statistics-feat-all');
          var addButton = document.querySelector('.js-pill-block-add');
          if (featInput && addButton && featName) {
            // Check if the feat is already present
            var existingFeats = document.querySelectorAll('.js-pill-block');
            var featAlreadyExists = false;
            existingFeats.forEach(function (existingFeat) {
              if (existingFeat.textContent.trim() === featName) {
                featAlreadyExists = true;
              }
            });
            if (!featAlreadyExists) {
              // If the feat is not already present, add it
              featInput.value = featName;
              featInput.dispatchEvent(new Event('input')); // Emulate typing in the feat input field
              console.log('Waiting for suggestion list to populate...');
              setTimeout(function () {
                var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
                console.log('Suggestion list populated');
                var added = false; // Flag to track if the feat has been added
                suggestionItems.forEach(function (item) {
                  if (item.textContent.trim() === featName && !added) {
                    console.log('Adding feat:', featName);
                    item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                    addButton.click(); // Click on the add button to add the feat
                    added = true; // Set the flag to true to indicate the feat has been added
                    resolve(); // Resolve the promise once the feat is added
                  }
                });
              }, 200); // Wait for the suggestion list to populate
            } else {
              // If the feat is already present, resolve the promise immediately
              console.log('Feat already exists:', featName);
              resolve();
            }
          }
        }, 200); // Adjust delay as needed
      });
    };
    var addtraitWithDelay = function addtraitWithDelay(traitName) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var traitInput = document.getElementById('statistics-traits-all');
          var addButton = document.querySelector('.js-pill-block-add');
          if (traitInput && addButton && traitName) {
            // Check if the trait is already present
            var existingtraits = document.querySelectorAll('.js-pill-block');
            var traitAlreadyExists = false;
            existingtraits.forEach(function (existingtrait) {
              if (existingtrait.textContent.trim() === traitName) {
                traitAlreadyExists = true;
              }
            });
            if (!traitAlreadyExists) {
              // If the trait is not already present, add it
              traitInput.value = traitName;
              traitInput.dispatchEvent(new Event('input')); // Emulate typing in the trait input field
              console.log('Waiting for suggestion list to populate...');
              setTimeout(function () {
                var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
                console.log('Suggestion list populated');
                var added = false; // Flag to track if the trait has been added
                suggestionItems.forEach(function (item) {
                  if (item.textContent.trim() === traitName && !added) {
                    console.log('Adding trait:', traitName);
                    item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                    addButton.click(); // Click on the add button to add the trait
                    added = true; // Set the flag to true to indicate the trait has been added
                    resolve(); // Resolve the promise once the trait is added
                  }
                });
              }, 200); // Wait for the suggestion list to populate
            } else {
              // If the trait is already present, resolve the promise immediately
              console.log('trait already exists:', traitName);
              resolve();
            }
          }
        }, 200); // Adjust delay as needed
      });
    };
    var addlanguageWithDelay = function addlanguageWithDelay(languageName) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var languageInput = document.getElementById('statistics-languages-all');
          var addButton = document.querySelector('.js-pill-block-add');
          if (languageInput && addButton && languageName) {
            // Check if the language is already present
            var existinglanguages = document.querySelectorAll('.js-pill-block');
            var languageAlreadyExists = false;
            existinglanguages.forEach(function (existinglanguage) {
              if (existinglanguage.textContent.trim() === languageName) {
                languageAlreadyExists = true;
              }
            });
            if (!languageAlreadyExists) {
              // If the language is not already present, add it
              languageInput.value = languageName;
              languageInput.dispatchEvent(new Event('input')); // Emulate typing in the language input field
              console.log('Waiting for suggestion list to populate...');
              setTimeout(function () {
                var suggestionItems = document.querySelectorAll('.m-auto-suggest-result');
                console.log('Suggestion list populated');
                var added = false; // Flag to track if the language has been added
                suggestionItems.forEach(function (item) {
                  if (item.textContent.trim() === languageName && !added) {
                    console.log('Adding language:', languageName);
                    item.closest('.m-auto-suggest-text').click(); // Click on the suggestion item
                    addButton.click(); // Click on the add button to add the language
                    added = true; // Set the flag to true to indicate the language has been added
                    resolve(); // Resolve the promise once the language is added
                  }
                });
              }, 200); // Wait for the suggestion list to populate
            } else {
              // If the language is already present, resolve the promise immediately
              console.log('language already exists:', languageName);
              resolve();
            }
          }
        }, 200); // Adjust delay as needed
      });
    }; // Adds platnium to the wealth calculator + clicks button after feats and spells are added  
    var clickApplyButton = function clickApplyButton() {
      var applyButton = document.querySelector('a[data-input-block-aggregate-options="target:equipment-wealth-platinum,action:aggregate"]');
      if (applyButton) {
        setTimeout(function () {
          applyButton.click();
          console.log('Apply button clicked.');
        }, 200); // Adjust the delay time as needed
      } else {
        console.error('Apply button not found.');
      }
    };
    updateDescriptionButton.addEventListener('click', handleSpellsAndFeats);
    clickApplyButton();
  }
});