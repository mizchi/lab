(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var LabEditor, createCoffeeEditor, createJadeEditor,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

createCoffeeEditor = function(el, fn) {
  var codemirror;
  return codemirror = CodeMirror.fromTextArea(el, {
    mode: 'coffeescript',
    lineNumbers: true,
    matchBrackets: true,
    indentWithTabs: true,
    vimMode: true,
    showCursorWhenSelecting: true,
    extraKeys: {
      'Ctrl-S': fn
    }
  });
};

createJadeEditor = function(el, fn) {
  var codemirror;
  return codemirror = CodeMirror.fromTextArea(el, {
    mode: 'jade',
    vimMode: true,
    lineNumbers: true,
    showCursorWhenSelecting: true,
    extraKeys: {
      'Ctrl-S': fn
    }
  });
};

LabEditor = (function() {
  function LabEditor() {
    this.render = __bind(this.render, this);
    this.update = __bind(this.update, this);
    this.coffeeEditor = createCoffeeEditor(document.querySelector('#coffee-editor'), this.update);
    this.jadeEditor = createJadeEditor(document.querySelector('#jade-editor'), this.update);
  }

  LabEditor.prototype.update = function() {
    var coffee, html, _jade;
    _jade = this.jadeEditor.getValue();
    html = jade.compile(_jade);
    $('.output').html(html);
    localStorage.jade = _jade;
    coffee = this.coffeeEditor.getValue();
    localStorage.coffee = coffee;
    return eval(CoffeeScript.compile(coffee));
  };

  LabEditor.prototype.render = function() {
    var $coffeeButton, $coffeeContainer, $jadeButton, $jadeContainer, updateMode, _ref;
    $coffeeButton = $('.coffee');
    $jadeButton = $('.jade');
    $coffeeContainer = $('.coffee-editor-container');
    $jadeContainer = $('.jade-editor-container');
    this.mode = (_ref = localStorage.mode) != null ? _ref : 'both';
    updateMode = (function(_this) {
      return function() {
        switch (_this.mode) {
          case 'coffee':
            $coffeeContainer.show();
            return $jadeContainer.hide();
          case 'jade':
            $coffeeContainer.hide();
            return $jadeContainer.show();
          case 'both':
            $coffeeContainer.show();
            return $jadeContainer.show();
        }
      };
    })(this);
    $('.coffee').on('click', (function(_this) {
      return function() {
        localStorage.mode = _this.mode = 'coffee';
        return updateMode();
      };
    })(this));
    $('.jade').on('click', (function(_this) {
      return function() {
        localStorage.mode = _this.mode = 'jade';
        return updateMode();
      };
    })(this));
    $('.both').on('click', (function(_this) {
      return function() {
        localStorage.mode = _this.mode = 'both';
        return updateMode();
      };
    })(this));
    updateMode();
    if (localStorage.coffee) {
      this.coffeeEditor.setValue(localStorage.coffee);
    }
    if (localStorage.jade) {
      return this.jadeEditor.setValue(localStorage.jade);
    }
  };

  return LabEditor;

})();

$(function() {
  window.editor = new LabEditor;
  return editor.render();
});


},{}]},{},[1])