/**
 * 
 * @param {*} document_root 
 * 
 * Get all page content from all open tabs.
 * 
 * 1) parse all page content
 * 2) store all h1's through h3's this will give us important information about the page content
 * 3) look through the meta tags.
 * 4) What will give us other important page content?
 */
function DOMtoString(document_root) {
  let html = '';
  let node = document_root.firstChild;

  debugger;

  while (node) {
    switch (node.nodeType) {
    case Node.ELEMENT_NODE:
        html += node.outerHTML;
        break;
    case Node.TEXT_NODE:
        html += node.nodeValue;
        break;
    case Node.CDATA_SECTION_NODE:
        html += '<![CDATA[' + node.nodeValue + ']]>';
        break;
    case Node.COMMENT_NODE:
        html += '<!--' + node.nodeValue + '-->';
        break;
    case Node.DOCUMENT_TYPE_NODE:
        // (X)HTML documents are identified by public identifiers
        html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
        break;
    }
    node = node.nextSibling;
  }
  return html;
}

chrome.runtime.sendMessage({
  action: 'extractPageSource',
  source: DOMtoString(document)
});