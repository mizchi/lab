(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var LabEditor, isMac;

isMac = /Mac/.test(navigator.platform);

LabEditor = (function() {
  LabEditor.markdown = function(text) {
    return marked(text);
  };

  function LabEditor(options) {
    if (options == null) {
      options = {};
    }
  }

  LabEditor.prototype.render = function() {
    var el;
    el = document.querySelector('#editor');
    this.codemirror = CodeMirror.fromTextArea(el, {
      mode: 'coffeescript',
      lineNumbers: true,
      matchBrackets: true,
      indentWithTabs: true,
      vimMode: true,
      showCursorWhenSelecting: true,
      extraKeys: {
        'Ctrl-S': (function(_this) {
          return function() {
            var js, src;
            $('.output').empty();
            src = _this.codemirror.getValue();
            localStorage.src = src;
            js = CoffeeScript.compile(src);
            return eval(js);
          };
        })(this)
      }
    });
    if (localStorage.src) {
      return this.codemirror.setValue(localStorage.src);
    }
  };

  LabEditor.prototype.getCodemirror = function() {
    return this.codemirror;
  };

  LabEditor.prototype.getContent = function() {
    return this.getCodemirror().getValue();
  };

  return LabEditor;

})();

window.LabEditor = LabEditor;


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWl6Y2hpL3NhbmRib3gvcHJldmlld2VyL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9taXpjaGkvc2FuZGJveC9wcmV2aWV3ZXIvc3JjL21kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxnQkFBQTs7QUFBQSxLQUFBLEdBQVEsS0FBSyxDQUFDLElBQU4sQ0FBVyxTQUFTLENBQUMsUUFBckIsQ0FBUixDQUFBOztBQUFBO0FBR0UsRUFBQSxTQUFDLENBQUEsUUFBRCxHQUFXLFNBQUMsSUFBRCxHQUFBO1dBQVUsTUFBQSxDQUFPLElBQVAsRUFBVjtFQUFBLENBQVgsQ0FBQTs7QUFFYSxFQUFBLG1CQUFDLE9BQUQsR0FBQTs7TUFBQyxVQUFVO0tBQVg7RUFBQSxDQUZiOztBQUFBLHNCQUlBLE1BQUEsR0FBUSxTQUFBLEdBQUE7QUFDTixRQUFBLEVBQUE7QUFBQSxJQUFBLEVBQUEsR0FBSyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFMLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxVQUFELEdBQWMsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsRUFBeEIsRUFDWjtBQUFBLE1BQUEsSUFBQSxFQUFNLGNBQU47QUFBQSxNQUNBLFdBQUEsRUFBYSxJQURiO0FBQUEsTUFFQSxhQUFBLEVBQWUsSUFGZjtBQUFBLE1BR0EsY0FBQSxFQUFnQixJQUhoQjtBQUFBLE1BSUEsT0FBQSxFQUFTLElBSlQ7QUFBQSxNQUtBLHVCQUFBLEVBQXlCLElBTHpCO0FBQUEsTUFNQSxTQUFBLEVBQ0U7QUFBQSxRQUFBLFFBQUEsRUFBVSxDQUFBLFNBQUEsS0FBQSxHQUFBO2lCQUFBLFNBQUEsR0FBQTtBQUNSLGdCQUFBLE9BQUE7QUFBQSxZQUFBLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxLQUFiLENBQUEsQ0FBQSxDQUFBO0FBQUEsWUFDQSxHQUFBLEdBQU0sS0FBQyxDQUFBLFVBQVUsQ0FBQyxRQUFaLENBQUEsQ0FETixDQUFBO0FBQUEsWUFFQSxZQUFZLENBQUMsR0FBYixHQUFtQixHQUZuQixDQUFBO0FBQUEsWUFHQSxFQUFBLEdBQUssWUFBWSxDQUFDLE9BQWIsQ0FBcUIsR0FBckIsQ0FITCxDQUFBO21CQUlBLElBQUEsQ0FBSyxFQUFMLEVBTFE7VUFBQSxFQUFBO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFWO09BUEY7S0FEWSxDQURkLENBQUE7QUFnQkEsSUFBQSxJQUFHLFlBQVksQ0FBQyxHQUFoQjthQUNFLElBQUMsQ0FBQSxVQUFVLENBQUMsUUFBWixDQUFxQixZQUFZLENBQUMsR0FBbEMsRUFERjtLQWpCTTtFQUFBLENBSlIsQ0FBQTs7QUFBQSxzQkF3QkEsYUFBQSxHQUFlLFNBQUEsR0FBQTtXQUFHLElBQUMsQ0FBQSxXQUFKO0VBQUEsQ0F4QmYsQ0FBQTs7QUFBQSxzQkEwQkEsVUFBQSxHQUFZLFNBQUEsR0FBQTtXQUNWLElBQUMsQ0FBQSxhQUFELENBQUEsQ0FBZ0IsQ0FBQyxRQUFqQixDQUFBLEVBRFU7RUFBQSxDQTFCWixDQUFBOzttQkFBQTs7SUFIRixDQUFBOztBQUFBLE1BZ0NNLENBQUMsU0FBUCxHQUFtQixTQWhDbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaXNNYWMgPSAvTWFjLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSlcblxuY2xhc3MgTGFiRWRpdG9yXG4gIEBtYXJrZG93bjogKHRleHQpIC0+IG1hcmtlZCh0ZXh0KVxuXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuXG4gIHJlbmRlcjogLT5cbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0b3InKVxuICAgIEBjb2RlbWlycm9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEgZWwsXG4gICAgICBtb2RlOiAnY29mZmVlc2NyaXB0J1xuICAgICAgbGluZU51bWJlcnM6IHRydWVcbiAgICAgIG1hdGNoQnJhY2tldHM6IHRydWVcbiAgICAgIGluZGVudFdpdGhUYWJzOiB0cnVlXG4gICAgICB2aW1Nb2RlOiB0cnVlXG4gICAgICBzaG93Q3Vyc29yV2hlblNlbGVjdGluZzogdHJ1ZVxuICAgICAgZXh0cmFLZXlzOlxuICAgICAgICAnQ3RybC1TJzogPT5cbiAgICAgICAgICAkKCcub3V0cHV0JykuZW1wdHkoKVxuICAgICAgICAgIHNyYyA9IEBjb2RlbWlycm9yLmdldFZhbHVlKClcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc3JjID0gc3JjXG4gICAgICAgICAganMgPSBDb2ZmZWVTY3JpcHQuY29tcGlsZSBzcmNcbiAgICAgICAgICBldmFsKGpzKVxuXG4gICAgaWYgbG9jYWxTdG9yYWdlLnNyY1xuICAgICAgQGNvZGVtaXJyb3Iuc2V0VmFsdWUgbG9jYWxTdG9yYWdlLnNyY1xuXG4gIGdldENvZGVtaXJyb3I6IC0+IEBjb2RlbWlycm9yXG5cbiAgZ2V0Q29udGVudDogLT5cbiAgICBAZ2V0Q29kZW1pcnJvcigpLmdldFZhbHVlKClcblxud2luZG93LkxhYkVkaXRvciA9IExhYkVkaXRvciJdfQ==
