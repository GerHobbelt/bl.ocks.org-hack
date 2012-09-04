<style>
h1 { /* fix bl.ocks.org ugly <h1> */
  font-size: 28px;
  margin-top: 2em;
  margin-bottom: .5em;
}
</style>

TODO …… <a href="http://bl.ocks.org/2997144" title="view this gist via bl.ocks.org">?</a> <a href="http://bl.ocks.org/GerHobbelt" title="view a list of all my gists at bl.ocks.org">?</a>




var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.cssClass { color: #F00; }';
document.getElementsByTagName('head')[0].appendChild(style);

document.getElementById('someElementId').className = 'cssClass';
