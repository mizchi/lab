isMac = /Mac/.test(navigator.platform)

class LabEditor
  @markdown: (text) -> marked(text)

  constructor: (options = {}) ->

  render: ->
    el = document.querySelector('#editor')
    @codemirror = CodeMirror.fromTextArea el,
      mode: 'coffeescript'
      lineNumbers: true
      matchBrackets: true
      indentWithTabs: true
      vimMode: true
      showCursorWhenSelecting: true
      extraKeys:
        'Ctrl-S': =>
          $('.output').empty()
          src = @codemirror.getValue()
          localStorage.src = src
          js = CoffeeScript.compile src
          eval(js)

    if localStorage.src
      @codemirror.setValue localStorage.src

  getCodemirror: -> @codemirror

  getContent: ->
    @getCodemirror().getValue()

window.LabEditor = LabEditor