function fix_blocksorg() {
  var frame = null;
  var frame_doc = null;
  var tweaker = function() {
    return tweaker;
  };
  
  tweaker.adjust_gist_iframe(width, height) {
    if (width != null && d3) {
      d3.select(frame)
        .style("width", width);
    }
    if (height != null && d3) {
      d3.select(frame)
        .style("height", height);
    }
    return tweaker;
  }
  
  try {
    frame = window.frameElement;
    if (!frame)
      return;
    frame_doc = frame.ownerDocument;
    if (!frame_doc)
      return;

    /* fix bl.ocks.org ugly <h1> */
    var style = frame_doc.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'h1.gist-title { font-size: 48px; letter-spacing: -2px; margin: .3em 4em .1em 0; line-height: 1em; }';
    frame_doc.getElementsByTagName('head')[0].appendChild(style);
    
    var style = frame_doc.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.gist-readme h1 { font-size: 28px; letter-spacing: 0px; margin: 2em 5em .5em 0; line-height: 1.1em; font-weight: bold; }';
    frame_doc.getElementsByTagName('head')[0].appendChild(style);
    
  } catch (e) {
    // forget about it...
  }
  
  return tweaker;
}
  