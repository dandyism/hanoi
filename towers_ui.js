(function(root) {
  var TowersUI = root.TowersUI = function (game) {
    this.game = game;
    this.sourcePileID = -1;
    $piles = $('.pile');
    var that = this;
    $piles.click(function() {
      if (that.sourcePileID === -1) {
        that.sourcePileID = $(this).index();
        $(this).addClass("highlight");
      } else {
        game.move(that.sourcePileID, $(this).index());
        $piles.removeClass("highlight");
        that.sourcePileID = -1;
        that.render();
      }
    })
  };

  
  TowersUI.prototype.render = function () {
    $piles = $('.pile');
    
    for (var i = 0; i < this.game.towers.length; i++) {
      $pile = $piles.eq(i);
      $pile.empty();
      
      _.each(this.game.towers[i], function(disc) {
        $disc = $('<div>');
        $disc.addClass("disc disc-" + disc);
        $pile.append($disc);
      });
    }
  };
  
})(this);