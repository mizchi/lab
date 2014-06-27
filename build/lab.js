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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWl6Y2hpL3NhbmRib3gvcHJldmlld2VyL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9taXpjaGkvc2FuZGJveC9wcmV2aWV3ZXIvc3JjL2xhYi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLGdCQUFBOztBQUFBLEtBQUEsR0FBUSxLQUFLLENBQUMsSUFBTixDQUFXLFNBQVMsQ0FBQyxRQUFyQixDQUFSLENBQUE7O0FBQUE7QUFHRSxFQUFBLFNBQUMsQ0FBQSxRQUFELEdBQVcsU0FBQyxJQUFELEdBQUE7V0FBVSxNQUFBLENBQU8sSUFBUCxFQUFWO0VBQUEsQ0FBWCxDQUFBOztBQUVhLEVBQUEsbUJBQUMsT0FBRCxHQUFBOztNQUFDLFVBQVU7S0FBWDtFQUFBLENBRmI7O0FBQUEsc0JBSUEsTUFBQSxHQUFRLFNBQUEsR0FBQTtBQUNOLFFBQUEsRUFBQTtBQUFBLElBQUEsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQUwsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLFVBQUQsR0FBYyxVQUFVLENBQUMsWUFBWCxDQUF3QixFQUF4QixFQUNaO0FBQUEsTUFBQSxJQUFBLEVBQU0sY0FBTjtBQUFBLE1BQ0EsV0FBQSxFQUFhLElBRGI7QUFBQSxNQUVBLGFBQUEsRUFBZSxJQUZmO0FBQUEsTUFHQSxjQUFBLEVBQWdCLElBSGhCO0FBQUEsTUFJQSxPQUFBLEVBQVMsSUFKVDtBQUFBLE1BS0EsdUJBQUEsRUFBeUIsSUFMekI7QUFBQSxNQU1BLFNBQUEsRUFDRTtBQUFBLFFBQUEsUUFBQSxFQUFVLENBQUEsU0FBQSxLQUFBLEdBQUE7aUJBQUEsU0FBQSxHQUFBO0FBQ1IsZ0JBQUEsT0FBQTtBQUFBLFlBQUEsQ0FBQSxDQUFFLFNBQUYsQ0FBWSxDQUFDLEtBQWIsQ0FBQSxDQUFBLENBQUE7QUFBQSxZQUNBLEdBQUEsR0FBTSxLQUFDLENBQUEsVUFBVSxDQUFDLFFBQVosQ0FBQSxDQUROLENBQUE7QUFBQSxZQUVBLFlBQVksQ0FBQyxHQUFiLEdBQW1CLEdBRm5CLENBQUE7QUFBQSxZQUdBLEVBQUEsR0FBSyxZQUFZLENBQUMsT0FBYixDQUFxQixHQUFyQixDQUhMLENBQUE7bUJBSUEsSUFBQSxDQUFLLEVBQUwsRUFMUTtVQUFBLEVBQUE7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVY7T0FQRjtLQURZLENBRGQsQ0FBQTtBQWdCQSxJQUFBLElBQUcsWUFBWSxDQUFDLEdBQWhCO2FBQ0UsSUFBQyxDQUFBLFVBQVUsQ0FBQyxRQUFaLENBQXFCLFlBQVksQ0FBQyxHQUFsQyxFQURGO0tBakJNO0VBQUEsQ0FKUixDQUFBOztBQUFBLHNCQXdCQSxhQUFBLEdBQWUsU0FBQSxHQUFBO1dBQUcsSUFBQyxDQUFBLFdBQUo7RUFBQSxDQXhCZixDQUFBOztBQUFBLHNCQTBCQSxVQUFBLEdBQVksU0FBQSxHQUFBO1dBQ1YsSUFBQyxDQUFBLGFBQUQsQ0FBQSxDQUFnQixDQUFDLFFBQWpCLENBQUEsRUFEVTtFQUFBLENBMUJaLENBQUE7O21CQUFBOztJQUhGLENBQUE7O0FBQUEsTUFnQ00sQ0FBQyxTQUFQLEdBQW1CLFNBaENuQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpc01hYyA9IC9NYWMvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKVxuXG5jbGFzcyBMYWJFZGl0b3JcbiAgQG1hcmtkb3duOiAodGV4dCkgLT4gbWFya2VkKHRleHQpXG5cbiAgY29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cbiAgcmVuZGVyOiAtPlxuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRvcicpXG4gICAgQGNvZGVtaXJyb3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSBlbCxcbiAgICAgIG1vZGU6ICdjb2ZmZWVzY3JpcHQnXG4gICAgICBsaW5lTnVtYmVyczogdHJ1ZVxuICAgICAgbWF0Y2hCcmFja2V0czogdHJ1ZVxuICAgICAgaW5kZW50V2l0aFRhYnM6IHRydWVcbiAgICAgIHZpbU1vZGU6IHRydWVcbiAgICAgIHNob3dDdXJzb3JXaGVuU2VsZWN0aW5nOiB0cnVlXG4gICAgICBleHRyYUtleXM6XG4gICAgICAgICdDdHJsLVMnOiA9PlxuICAgICAgICAgICQoJy5vdXRwdXQnKS5lbXB0eSgpXG4gICAgICAgICAgc3JjID0gQGNvZGVtaXJyb3IuZ2V0VmFsdWUoKVxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zcmMgPSBzcmNcbiAgICAgICAgICBqcyA9IENvZmZlZVNjcmlwdC5jb21waWxlIHNyY1xuICAgICAgICAgIGV2YWwoanMpXG5cbiAgICBpZiBsb2NhbFN0b3JhZ2Uuc3JjXG4gICAgICBAY29kZW1pcnJvci5zZXRWYWx1ZSBsb2NhbFN0b3JhZ2Uuc3JjXG5cbiAgZ2V0Q29kZW1pcnJvcjogLT4gQGNvZGVtaXJyb3JcblxuICBnZXRDb250ZW50OiAtPlxuICAgIEBnZXRDb2RlbWlycm9yKCkuZ2V0VmFsdWUoKVxuXG53aW5kb3cuTGFiRWRpdG9yID0gTGFiRWRpdG9yIl19
