(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['activeNews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n    <div class=\"inner\">\r\n\r\n			<h1 class=\"title\"> ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </h1>\r\n			<span class=\"dateTime\"> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.printLongDateTime || depth0.printLongDateTime),stack1 ? stack1.call(depth0, depth0.publishedOn, options) : helperMissing.call(depth0, "printLongDateTime", depth0.publishedOn, options)))
    + " </span>\r\n			\r\n			<p class=\"summary\"> ";
  if (stack2 = helpers.summary) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.summary; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </p>\r\n\r\n			<div class=\"image\" style=\"background-image: url('";
  if (stack2 = helpers.pictureUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pictureUrl; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "');\"> </div>\r\n			\r\n			<div class=\"text\"> ";
  if (stack2 = helpers.text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.text; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div>\r\n\r\n    </div>\r\n";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.activeNews, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['activeNewsSummary'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n\r\n	<span class=\"content\">\r\n	<h3 class=\"title\"   >						";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "                          </h3>\r\n	<span class=\"dateTime\">						";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.printLongDateTime || depth0.printLongDateTime),stack1 ? stack1.call(depth0, depth0.publishedOn, options) : helperMissing.call(depth0, "printLongDateTime", depth0.publishedOn, options)))
    + "  </span>\r\n	</span>\r\n\r\n";
  return buffer;
  }

  buffer += "﻿";
  stack1 = helpers['with'].call(depth0, depth0.activeNews, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates['newsNavigation_news'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n  \r\n    <li class=\"news\" data-news-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.printFragment_news || depth0.printFragment_news),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "printFragment_news", depth0, options)))
    + "\">\r\n      \r\n      <a href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.printRoute_news || depth0.printRoute_news),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "printRoute_news", depth0, options)))
    + "\" class=\"clearfix\">\r\n        <span class=\"image\"><img src=\"";
  if (stack2 = helpers.pictureUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.pictureUrl; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" /></span>\r\n        <span class=\"content\">\r\n          <h3 class=\"title\"   >                   ";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "                         </h3>\r\n          <span class=\"dateTime\">                 ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.printLongDateTime || depth0.printLongDateTime),stack1 ? stack1.call(depth0, depth0.publishedOn, options) : helperMissing.call(depth0, "printLongDateTime", depth0.publishedOn, options)))
    + " </span>\r\n        </span>\r\n      </a>\r\n      \r\n    </li>\r\n  \r\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n  ";
  }

function program5(depth0,data) {
  
  
  return "\r\n    <span class=\"list-empty\">Nema pronađenih novosti za navedni upit.</span>\r\n  ";
  }

  buffer += "<ul>\r\n  \r\n  ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  \r\n  ";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });
templates['newsNavigation_shell'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"newsNavigationWrapper\">\r\n  <div class=\"searchWrapper\">\r\n    <div class=\"title\">Najnovije novosti</div>\r\n    <input id=\"searchInput\" type=\"text\" placeholder=\"Pretraži najnovije novosti...\" />\r\n  </div>\r\n\r\n  <div class=\"inner\">\r\n    <div id=\"newsContainer\">\r\n      <div id=\"newsListContainer\"></div>\r\n      <div class=\"loadMoreLatestNewsWrapper\">\r\n        <div class=\"loadingNews\">\r\n          <span>\r\n            <img src=\"/Assets/Images/Shared/loader-circular.gif\" alt=\"Loading animation\" />\r\n          </span>\r\n        </div>\r\n        <span class=\"loadMoreLatestNewsButton\">UČITAJ JOŠ NOVOSTI</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"newsSearchContainer\">\r\n      <div id=\"newsSearchListContainer\"></div>\r\n      <div class=\"loadingNews\">\r\n        <span>\r\n          <img src=\"/Assets/Images/Shared/loader-circular.gif\" alt=\"Loading animation\" />\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>";
  });
templates['shell'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"newsNavigation\" class=\"latest-news outerMargins\"></div>\r\n<div id=\"activeNewsSummaryPlaceholder\" class=\"outerLeftMargin\"></div>\r\n<div id=\"activeNews\" class=\"active-news outerRightMargin\"></div>\r\n\r\n<div class=\"loadingNews\" id=\"loadingActiveNews\"> \r\n  <span> <img src=\"/Assets/Images/Shared/loader-circular.gif\" alt=\"Loading animation\" /> </span> \r\n</div>\r\n";
  });
})();