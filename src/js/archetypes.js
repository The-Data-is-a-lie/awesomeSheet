var archetypeStats = (function() {

    var renderTimer = null;
  
    function render() {
      // Your rendering logic here
    };
  
    function delayUpdate(element) {
      // Your update logic here
    };
  
    function bind() {
      _bind_all_archetypeFields();
    };
  
    function _bind_all_archetypeFields() {
      var all_archetypeFields = helper.eA(".js-archetype-field");
      for (var i = 0; i < all_archetypeFields.length; i++) {
        all_archetypeFields[i].addEventListener("input", function() {
          clearTimeout(renderTimer);
          renderTimer = setTimeout(delayUpdate, 350, helper.getClosest(this, ".js-archetype"));
        }, false);
      };
    };
  
    // Exposed methods
    return {
      render: render,
      bind: bind
    };
  
  })();
  