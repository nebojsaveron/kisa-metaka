(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['activeEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div id=\"eventContent\">";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>";
  return buffer;
  });
templates['eventList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"highlight\" href=\"/dogadanja/skola-osnova-programiranja-2013\">\r\n  <span class=\"outerLeftMargin\"> \r\n    <h1>  <span> Škola osnova <br />programiranja 2013  </span> </h1>\r\n    <p>   <span> 17:00, 26.10.2013, A100@FESB     </span> </p>\r\n  </span>\r\n  <img src=\"/Assets/Events/skola-osnova-programiranja-2013/feature.jpg\" />\r\n</a>\r\n\r\n<h2><span>Prošla događanja</span></h2>\r\n<ul class=\"legend\">\r\n  <li>\r\n    <span class=\"dif easy\"></span>\r\n    <span> za početnike </span>\r\n  </li>\r\n  <li>\r\n    <span class=\"dif medium\"></span>\r\n    <span> za naprednije </span>\r\n  </li>\r\n  <li>\r\n    <span class=\"dif hard\"></span>\r\n    <span> za iskusnjare </span>\r\n  </li>\r\n</ul>\r\n\r\n<ul class=\"clearfix outerMargins\">\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-osnova-programiranja-2013\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif easy\"></span>\r\n      <span>Škola osnova programiranja 2013</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/mala-skola-photoshopa\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif medium\"></span> \r\n      <span>Mala škola Photoshopa</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-osnova-racunalnih-mreza\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif medium\"></span>\r\n      <span>Škola osnova računalnih mreža</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-osnova-programiranja-2012\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif easy\"></span>\r\n      <span>Škola osnova programiranja 2012</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-web-programiranja\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif hard\"></span>\r\n      <span>Škola web programiranja</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-osnova-programiranja-2011\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif easy\"></span>\r\n      <span>Škola osnova programiranja 2011</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/ruby-on-rails\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif hard\"></span>\r\n      <span>Ruby on Rails predavanja</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-programiranja-u-c-sharp\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif medium\"></span>\r\n      <span>Škola programiranja u C#</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-osnova-programiranja-2010\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif easy\"></span>\r\n      <span>Škola osnova programiranja 2010</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/naucite-programirati\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif medium\"></span>\r\n      <span>Naučite programirati</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/algoritmi-trikovi-za-natjecanje\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif hard\"></span>\r\n      <span>Algoritmi - trikovi za natjecanje</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"eventListItem\">\r\n    <a href=\"dogadanja/skola-osnova-programiranja-2009\" class=\"eventLink\" style=\"background-image: url('');\">\r\n      <span class=\"dif easy\"></span>\r\n      <span>Škola osnova programiranja 2009</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<div class=\"yt outerMargins\">\r\n  <a href=\"http://www.youtube.com/user/DUMPSnimke\">\r\n    <span> Posjeti  DUMP YouTube kanal </span>\r\n  </a>\r\n</div>";
  });
templates['shell'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"loadingActiveEvent\">\r\n  <div id=\"followingBallsG\">\r\n    <div id=\"followingBallsG_1\" class=\"followingBallsG\">\r\n    </div>\r\n    <div id=\"followingBallsG_2\" class=\"followingBallsG\">\r\n    </div>\r\n    <div id=\"followingBallsG_3\" class=\"followingBallsG\">\r\n    </div>\r\n    <div id=\"followingBallsG_4\" class=\"followingBallsG\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"clearfix\">\r\n  <div id=\"activeEvent\"></div>\r\n  <div id=\"eventList\" ></div>\r\n</div>\r\n\r\n";
  });
})();