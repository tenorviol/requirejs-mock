define(['jquery'], function($) {

  describe('just checking', function() {

    it('works for jquery', function() {
      var el = $('<div></div>');
      el.html('Hello my friend!');
      el.text().should.equal('Hello my friend!');
    });

  });

});
