Split(['#a', '#b'], {
  gutterSize: 8,
  sizes: [15, 85],
  cursor: 'col-resize',
})

Split(['#c', '#d'], {
  direction: 'vertical',
  sizes: [90, 10],
  gutterSize: 8,
  cursor: 'row-resize',
})

Split(['#e', '#f'], {
  direction: 'vertical',
  sizes: [0, 100],
  gutterSize: 0,
  cursor: 'row-resize'
})

$(function(){
    $(".tree").treemenu({delay:100}).openActive();
});

$(document).ready(function() {
  //add hidden tabs example
  $("#appendTab").dynatabs({
    tabBodyID : 'adddivtabbody',
    showCloseBtn : true,
    confirmDelete : false
  });
});

function addNewDivTab(value)
{
  $.addDynaTab({
    tabID : 'appendTab',
    type : 'div',
    divID : 'hdnDataTabDiv',
    params : {},
    tabTitle : value
  });
}
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  matchBrackets: true,
  styleActiveLine: true,
  mode: "application/x-httpd-php",
  indentUnit: 4,
  indentWithTabs: true
});

shortcut.add("Ctrl+S",function() {
    alert(editor.getValue());
});

$(document).ready(function(){
  $('#save').click(function(){
    alert(editor.getValue());
  });
});

$(function() {
  $.contextMenu({
      selector: '.isFolder',
      callback: function(key, options) {
          var m = "clicked: " + key;
          //window.console && console.log(m) || alert(m);

          if(key == 'newfile'){
            $(this).after('<ul>\
                  <li><a class="isFile" href="#jobs1">Job 1</a></li>\
                </ul>');
          }
          if(key == 'newfolder'){
            $(this).closest("li").addClass('tree-opened');
            $(this).closest("li").removeClass('tree-empty');
            $(this).after('<ul>\
              <li>\
                <span class="toggler"></span>\
                <span class="isFolder">jQuery</span>\
              </li>\
            </ul>');
          }
          
      },
      items: {
          "newfile": {name: "New File", icon: "add"},
          "newfolder": {name: "New Folder", icon: "add"},
          "rename": {name: "Rename", icon: "edit"},
          "refresh": {name: "Refresh", icon: "loading"},
          "delete": {name: "Delete", icon: "delete"}
      }
  });

  $.contextMenu({
      selector: '.isFile', 
      callback: function(key, options) {
          var m = "clicked: " + key;
          //window.console && console.log(m) || alert(m); 
      },
      items: {
          "edit": {name: "Edit", icon: "edit"},
          "rename": {name: "Rename", icon: "edit"},
          "delete": {name: "Delete", icon: "delete"}
      }
  });
});
