
function fix_blocksorg() {
  var frame = null;
  var frame_doc = null;
  var tweaker = function() {
    return tweaker;
  };
  
  tweaker.adjust_gist_iframe = function(width, height) {
    // make sure the general fix is always being applied first:
    fix_blocksorg();
    
    if (width > 0 && d3) {
      d3.select(frame)
        .style("width", width);
    }
    if (height > 0 && d3) {
      d3.select(frame)
        .style("height", height);
    }
    return tweaker;
  }

  try {
    frame = window.frameElement;
    if (!frame)
      return tweaker;
    frame_doc = frame.ownerDocument;
    if (!frame_doc)
      return tweaker;

    if (frame_doc.blocksorg_v1_000_fixed === true)
      return tweaker;

    /* fix bl.ocks.org ugly <h1> */
    var style = frame_doc.createElement('style');
    style.type = 'text/css';
    // right margin to prevent overlapping the timestamp
    style.innerHTML = 'h1.gist-title { font-size: 48px; letter-spacing: -2px; margin: .3em 4em .1em 0; line-height: 1em; }';
    frame_doc.getElementsByTagName('head')[0].appendChild(style);
    
    var style = frame_doc.createElement('style');
    style.type = 'text/css';
    // right margin to prevent overlapping the 'Open in new window' text/link
    style.innerHTML = '.gist-readme h1 { font-size: 36px; letter-spacing: 0px; margin: 1em 4em .5em 0; line-height: 1.1em; font-weight: bold; }';
    frame_doc.getElementsByTagName('head')[0].appendChild(style);
  
    frame_doc.blocksorg_v1_000_fixed = true;
    
  } catch (e) {
    // forget about it...
  }
  
  return tweaker;
}
  
fix_blocksorg();
