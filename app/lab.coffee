createCoffeeEditor = (el, fn) ->
  codemirror = CodeMirror.fromTextArea el,
    mode: 'coffeescript'
    lineNumbers: true
    matchBrackets: true
    indentWithTabs: true
    vimMode: true
    showCursorWhenSelecting: true
    extraKeys:
      'Ctrl-S': fn

createJadeEditor = (el, fn) ->
  codemirror = CodeMirror.fromTextArea el,
    mode: 'jade'
    vimMode: true
    lineNumbers: true
    showCursorWhenSelecting: true
    extraKeys:
      'Ctrl-S': fn

class LabEditor
  constructor: ->
    @coffeeEditor = createCoffeeEditor document.querySelector('#coffee-editor'), @update
    @jadeEditor   = createJadeEditor document.querySelector('#jade-editor'), @update

  update: =>
    # Jade
    _jade = @jadeEditor.getValue()
    html = jade.compile _jade
    $('.output').html html
    localStorage.jade = _jade

    # Coffee
    coffee = @coffeeEditor.getValue()
    localStorage.coffee = coffee
    eval CoffeeScript.compile coffee

  render: =>
    $coffeeButton = $('.coffee')
    $jadeButton = $('.jade')

    $coffeeContainer = $('.coffee-editor-container')
    $jadeContainer = $('.jade-editor-container')

    @mode = localStorage.mode ? 'both'

    updateMode = =>
      switch @mode
        when 'coffee'
          $coffeeContainer.show()
          $jadeContainer.hide()
        when 'jade'
          $coffeeContainer.hide()
          $jadeContainer.show()
        when 'both'
          $coffeeContainer.show()
          $jadeContainer.show()

    $('.coffee').on 'click', =>
      localStorage.mode = @mode = 'coffee'
      updateMode()

    $('.jade').on 'click', =>
      localStorage.mode = @mode = 'jade'
      updateMode()

    $('.both').on 'click', =>
      localStorage.mode = @mode = 'both'
      updateMode()

    updateMode()

    if localStorage.coffee
      @coffeeEditor.setValue localStorage.coffee

    if localStorage.jade
      @jadeEditor.setValue localStorage.jade

$ ->
  window.editor = new LabEditor
  editor.render()
