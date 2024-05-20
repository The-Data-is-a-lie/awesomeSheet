var tabs = (function() {

  var state = (function() {
    var tabState = {
      basics: {
        character: true,
        experience: false,
        classes: false,
        senses: false,
        initiative: false,
        speed: false,
        image: false
      },
      statistics: {
        stats: true,
        abilities: false,
        feats: false,
        archetypes: false,
        traits: false,
        languages: false,
        power: false
      },
      equipment: {
        possessions: true,
        armor: false,
        body_slots: false,
        item: false,
        encumbrance: false,
        consumable: false,
        wealth: false
      },
      defense: {
        hp: true,
        ac: false,
        cmd: false,
        saves: false,
        dr: false,
        sr: false,
        resistance: false
      },
      offense: {
        stats: true,
        cmb: false,
        attack: false
      },
      skills: {
        all: true,
        custom: false
      },
      spells: {
        stats: true,
        level_0: false,
        level_1: false,
        level_2: false,
        level_3: false,
        level_4: false,
        level_5: false,
        level_6: false,
        level_7: false,
        level_8: false,
        level_9: false
      },
      notes: {
        character: true,
        story: false
      }
    };
    var get = function(options) {
      var defaultOptions = {
        section: null,
        tab: null,
        all: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.all) {
        return tabState;
      } else if (defaultOptions.section != null && defaultOptions.tab == null) {
        return tabState[defaultOptions.section];
      } else if (defaultOptions.section != null && defaultOptions.tab != null) {
        return tabState[defaultOptions.section][defaultOptions.tab];
      };
    };
    var set = function(options) {
      var defaultOptions = {
        section: null,
        tab: null,
        boolean: null
      };
      if (options) {
        defaultOptions = helper.applyOptions(defaultOptions, options);
      };
      if (defaultOptions.boolean != null) {
        if (defaultOptions.section != null && defaultOptions.tab != null) {
          tabState[defaultOptions.section][defaultOptions.tab] = defaultOptions.boolean;
        };
      } else {
        if (defaultOptions.section != null && defaultOptions.tab != null) {
          for (var key in tabState[defaultOptions.section]) {
            tabState[defaultOptions.section][key] = false;
          };
          if (tabState[defaultOptions.section][defaultOptions.tab]) {
            tabState[defaultOptions.section][defaultOptions.tab] = false;
          } else {
            tabState[defaultOptions.section][defaultOptions.tab] = true;
          };
        };
      };
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  // updated to hold a previous tabState, so we can easily determine the
  function _store() {
    // Get the current tab state
    const currentTabState = JSON.stringify(state.get({ all: true }));
    // Get the previous tab state from localStorage
    const previousTabState = localStorage.getItem('tabState');
    // Store the previous tab state (which is the current one before updating)
    localStorage.setItem('previousTabState', previousTabState);
    // Store the current tab state
    localStorage.setItem('tabState', currentTabState);

}

function MostRecentTab_func() {
  console.log("Function start");

  // Retrieve previous tab state from localStorage
  var previousTabStateString = localStorage.getItem('previousTabState');
  console.log("previousTabStateString:", previousTabStateString);
  var previousTabState = JSON.parse(previousTabStateString);
  console.log("previousTabState:", previousTabState);

  // Retrieve current tab state from localStorage
  var currentTabStateString = localStorage.getItem('tabState');
  console.log("currentTabStateString:", currentTabStateString);
  var currentTabState = JSON.parse(currentTabStateString);
  console.log("currentTabState:", currentTabState);

  // Declare a variable to store the most recent tab and set a default value
  var MostRecentTabValue = "js-tab-panel-character";
  console.log("Initial MostRecentTabValue:", MostRecentTabValue);

  // // Check if previousTabState and currentTabState are not null
  if (previousTabState && currentTabState) {
    // Iterate through tab states to find the most recent tab
    for (var section in currentTabState) {
      for (var tab in currentTabState[section]) {
        console.log("Checking tab:", tab);
        if (currentTabState[section][tab] && !previousTabState[section][tab]) {
          MostRecentTabValue = "js-tab-panel-" + tab;
          console.log("Updated MostRecentTabValue:", MostRecentTabValue);
        }
      }
    }
    // If there is no most recent tab, set MostRecentTabValue to "js-tab-panel-character"
    if (!MostRecentTabValue) {
      MostRecentTabValue = "js-tab-panel-character";
      console.log("Updated MostRecentTabValue:", MostRecentTabValue);
    }
  }

  // Store the most recent tab value in localStorage
  localStorage.setItem('MostRecentTabValue', MostRecentTabValue);
  console.log("Stored MostRecentTabValue:", MostRecentTabValue);

  console.log("Function end");
  return MostRecentTabValue;
}




  function bind() {
    _bind_tabGroup();
    _bind_tabArrow();
  };

  function _bind_tabGroup() {
    var all_tabGroup = helper.eA(".js-tab-group");
    for (var i = 0; i < all_tabGroup.length; i++) {
      var all_tabItem = all_tabGroup[i].querySelectorAll(".js-tab-item");
      for (var j = 0; j < all_tabItem.length; j++) {
        all_tabItem[j].addEventListener("click", function() {
          _changeState(this);
          _store();
          render();
        }, false);
      };
    };
  };

  function _bind_tabArrow() {
    var all_tabArrow = helper.eA(".js-tab-arrow");
    for (var i = 0; i < all_tabArrow.length; i++) {
      all_tabArrow[i].addEventListener("click", function() {
        _singleStepChangeState(this);
        _store();
        render();
      }, false);
    };
  };

  function _singleStepChangeState(arrow) {
    var tabOrder = {
      basics: ["character", "experience", "classes", "senses", "initiative", "speed", "image"],
      statistics: ["stats", "abilities", "archetypes" , "feats", "traits", "languages", "power"],
      equipment: ["possessions", "armor", "body_slots", "item", "encumbrance", "consumable", "wealth"],
      defense: ["hp", "ac", "cmd", "saves", "dr", "sr", "resistance"],
      offense: ["stats", "cmb", "attack"],
      skills: ["all", "custom"],
      spells: ["stats", "level_0", "level_1", "level_2", "level_3", "level_4", "level_5", "level_6", "level_7", "level_8", "level_9"],
      notes: ["character", "story"]
    };
    var options = helper.makeObject(arrow.dataset.tabArrowOptions);
    var newIndex = 0;
    tabOrder[options.tabGroup].forEach(function(arrayItem, index) {
      if (state.get({
          section: options.tabGroup,
          tab: arrayItem
        })) {
        if (options.action == "right") {
          newIndex = index + 1;
        };
        if (options.action == "left") {
          newIndex = index - 1;
        };
        if (newIndex > (tabOrder[options.tabGroup].length - 1)) {
          newIndex = 0;
        };
        if (newIndex < 0) {
          newIndex = (tabOrder[options.tabGroup].length - 1);
        };
      };
    });
    state.set({
      section: options.tabGroup,
      tab: tabOrder[options.tabGroup][newIndex]
    });
  };

  function _changeState(tab) {
    var options = helper.makeObject(tab.dataset.tabOptions);
    state.set({
      section: options.tabGroup,
      tab: options.tab
    });
  };

  function init() {
    if (helper.read("tabState")) {
      var savedState = JSON.parse(helper.read("tabState"));
      for (var section in savedState) {
        for (var tab in savedState[section]) {
          state.set({
            section: section,
            tab: tab,
            boolean: savedState[section][tab]
          });
        };
      };
    };
    render();
  };

  function render() {
    _render_all_tabRow();
    _render_most_recent_tab();
  };

  function _render_all_tabRow() {
    var all_tabRow = helper.eA(".js-tab-row");
    for (var i = 0; i < all_tabRow.length; i++) {
      _render_tabIndicator(all_tabRow[i]);
      _render_tabPanel(all_tabRow[i]);
      render_scroll(all_tabRow[i]);

    };
  };

  function _render_most_recent_tab() {

    var MostRecentTabValue = MostRecentTab_func();
    console.log("Most recent tab: Function", MostRecentTabValue);
    MostRecentTabValue = localStorage.getItem("MostRecentTabValue");
    console.log("Most recent tab: localStorage", MostRecentTabValue);
    _handleMostRecentTab(MostRecentTabValue);

    
  }
  function _render_tabIndicator(tabRow) {
    var tabIndicator = tabRow.querySelector(".m-tab-indicator");
    var all_tabItem = tabRow.querySelectorAll(".js-tab-item");
    all_tabItem.forEach(function(arrayItem, index) {
      var options = helper.makeObject(arrayItem.dataset.tabOptions);
      if (state.get({
          section: options.tabGroup,
          tab: options.tab
        })) {
        var tabArea = arrayItem.getBoundingClientRect();
        var width = (tabArea.width - 10).toFixed(0);
        var left = (arrayItem.offsetLeft + 5).toFixed(0);
        tabIndicator.setAttribute("style", "width:" + width + "px;left:" + left + "px;");
      };
    });
  };


  
  function _render_tabPanel(tabRow) {
    var all_tabItem = tabRow.querySelectorAll(".js-tab-item");
    all_tabItem.forEach(function(arrayItem, index) {
        var options = helper.makeObject(arrayItem.dataset.tabOptions);
        if (state.get({
            section: options.tabGroup,
            tab: options.tab
        })) {
            helper.addClass(arrayItem, "is-active");
            helper.removeClass(helper.e("." + options.target), "is-hidden");
            console.log("this tab is active", options.target);
        } else {
            helper.removeClass(arrayItem, "is-active");
            helper.addClass(helper.e("." + options.target), "is-hidden");
        }
    });

}
  
function _handleMostRecentTab(MostRecentTab) {
  // Focusable elements section only for specific targets
  if (MostRecentTab === "js-tab-panel-stats" 
      || MostRecentTab === "js-tab-panel-character" 
      || MostRecentTab === "js-tab-panel-classes" 
      || MostRecentTab === "js-tab-panel-skills-all" 
      || MostRecentTab === "js-tab-panel-archetypes"
      || MostRecentTab === "js-tab-panel-speed"
      || MostRecentTab === "js-tab-panel-intiative"
      || MostRecentTab === "js-tab-panel-abilties"
      || MostRecentTab === "js-tab-panel-archetypes"
      || MostRecentTab === "js-tab-panel-body_slots"
      // || MostRecentTab === "js-tab-panel-body_slots_descriptions"
  ) {
      const focusableElements = helper.e("." + MostRecentTab).querySelectorAll('a[href], area[href], input:not([type="hidden"]), select, textarea, button, [tabindex]:not([tabindex="-1"])');
      if (focusableElements.length > 0) {
          for (let i = 0; i < focusableElements.length; i++) {
              console.log("Focusing on element:", focusableElements[i]);
              focusableElements[i].focus();
              // Optionally, you can perform additional actions here for each focused element
          }
          stats.render();
          classes.render();
          textBlock.render();
          textareaBlock.render();
          // archetypeStats.render();
      }
  }
  // Always run this block when MostRecentTab is "js-tab-panel-character"
  if (MostRecentTab === "js-tab-panel-character") {
    // need to import this somehow
    // characterSelect._render_currentCharacter();
  }
}


  function render_scroll(tabRow) {
    var tabRowArea = tabRow.getBoundingClientRect();
    var all_tabItem = tabRow.querySelectorAll(".js-tab-item");
    all_tabItem.forEach(function(arrayItem, index) {
      var options = helper.makeObject(arrayItem.dataset.tabOptions);
      if (state.get({
          section: options.tabGroup,
          tab: options.tab
        })) {
        var tabArea = arrayItem.getBoundingClientRect();
        var left = Math.ceil(arrayItem.offsetLeft - (tabRowArea.width / 2) + (tabArea.width / 2), 10);
        if (tabRow.scroll) {
          tabRow.scroll({
            top: 0,
            left: left,
            behavior: 'smooth'
          });
        } else {
          if (tabArea.left < tabRowArea.left) {
            var left = arrayItem.offsetLeft;
            tabRow.scrollLeft = left;
          } else if (tabArea.right > tabRowArea.right) {
            var right = Math.ceil(arrayItem.offsetLeft - tabRowArea.width + tabArea.width, 10);
            tabRow.scrollLeft = right;
          };
        };
      };
    });
  };

  function toggle(options) {
    var defaultOptions = {
      section: null,
      tab: null
    };
    if (options) {
      defaultOptions = helper.applyOptions(defaultOptions, options);
    };
    if (options.section != null && options.tab != null) {
      state.set({
        section: options.section,
        tab: options.tab
      });
      _store();
      render();
    };
  };

  function reset() {
    var defaultState = [{
      section: "basics",
      tab: "character"
    }, {
      section: "statistics",
      tab: "stats"
    }, {
      section: "equipment",
      tab: "possessions"
    }, {
      section: "defense",
      tab: "hp"
    }, {
      section: "offense",
      tab: "stats"
    }, {
      section: "skills",
      tab: "all"
    }, {
      section: "spells",
      tab: "stats"
    }, {
      section: "notes",
      tab: "character"
    }];
    defaultState.forEach(function(arrayItem) {
      toggle({
        section: arrayItem.section,
        tab: arrayItem.tab
      });
    });
  };

  // exposed methods
  return {
    init: init,
    reset: reset,
    toggle: toggle,
    state: state,
    bind: bind,
    render: render,
    render_scroll: render_scroll
  };

})();
