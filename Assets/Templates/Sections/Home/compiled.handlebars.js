(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "﻿<div class=\"about\">\r\n  <h1> <span> Što je DUMP i čime se bavimo? </span> </h1>\r\n\r\n  <div class=\"outerMargins table\">\r\n    \r\n    <div class=\"col\">\r\n        <div class=\"icon\"><img src=\"/Assets/Themes/Home/Images/passion.png\" /></div>\r\n        <h2>UDRUGA MLADIH ENTUZIJASTA</h2>\r\n        <p> Mi smo udruga pokrenuta zbog entuzijazma i ljubavi prema tehnologiji, najviše nas veseli rad s <i> cutting edge </i>tehnologijama, modernim hardverom i raznovrsnim industrijskim alatima. </p>\r\n        <p> Mi smo “jedni od onih ljudi” koji u torbi nose vlastitu tipkovnicu, prate tehnološke blogove i znaju točne specifikacije vašeg mobitela. </p>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"icon\"><img src=\"/Assets/Themes/Home/Images/courses.png\" /></div>\r\n      <h2>ŠIRIMO ZNANJE O TEHNOLOGIJI</h2>\r\n      <p>Želimo podijeliti znanje i entuzijazam koji imamo na što širi krug ljudi, motivirati zainteresirane studente da samostalno nastave istraživati i učiti.</p>\r\n      <p> Organiziramo besplatne cikluse predavanja o osnovama programiranja, razvoju za web i desktop. Vidimo se na idućem ciklusu predavanja!</p>\r\n    </div>\r\n    \r\n    <div class=\"col\">\r\n      <div class=\"icon\"><img src=\"/Assets/Themes/Home/Images/brains.png\" /></div>\r\n      <h2>STVARAMO KVALITETNE OSOBE</h2>\r\n      <p>Biti dumpovac nije “lako” - to podrazumijeva snažnu volju i sposobnost učenja, rad u timu i izrazitu komunikaciju. </p>\r\n      <p>Kroz članstvo u udruzi dumpovci grade vještine komunikacije, prezentiranja, osjećaj odgovornosti i obzirnosti jedni prema drugima. </p>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n</div>";
  });
templates['billboard'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "﻿<div class=\"billboard flexslider\">\r\n  <ul class=\"slides\">\r\n\r\n    <li class=\"slide\">\r\n      <a style	=	\"background-image: url('/Assets/Images/Billboards/billboard-skola-programiranja-2013.jpg') ;\" \r\n		    href	=	\"/dogadanja/skola-osnova-programiranja-2013\">\r\n        <span class=\"vignete\"></span>\r\n		    <h1>  <span> Kreće peta, jubilarna, <br /> Škola osnova programiranja! </span> </h1>\r\n	    </a>\r\n    </li>    \r\n    \r\n    <li class=\"slide\"> \r\n	    <a style	=	\"background-image: url('/Assets/Images/Billboards/billboard-authink-1.jpg') ;\" \r\n		    href	=	\"/novosti/129/\">\r\n        <span class=\"vignete\"></span>\r\n		    <h1>  <span> AuThinkovci osvojili <br /> DreamSpark Award za edukaciju! </span> </h1>\r\n	    </a>\r\n    </li>\r\n    \r\n    <li class=\"slide\"> \r\n	    <a style	=	\"background-image: url('/Assets/Images/Billboards/billboard-photoshop-2.jpg') ;\" \r\n		    href	=	\"/dogadanja/mala-skola-photoshopa\">\r\n        <span class=\"vignete\"></span>\r\n		    <h1>  <span> Održana Mala škola<br />  Photoshopa! </span> </h1>\r\n	    </a>\r\n    </li>\r\n    \r\n  </ul>\r\n</div>";
  });
templates['keyPoints'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "﻿<!-- HTML kod primjera -->\r\n<div class=\"values flexslider\">\r\n\r\n  <ul class=\"slides\">\r\n\r\n    <li class=\"slide\" style=\"background-image: url('/Assets/Themes/Home/Images/values-technology.jpg')\">\r\n      <span class=\"table\">\r\n        <span class=\"cell\">\r\n          <h3> Volimo tehnologiju <span> u svakom obliku </span> </h3>\r\n          <span class=\"text\">\r\n            <span> Tableti, <i>smartphonei</i>, lijepi prijenosnici, lijep kod, dobar dizajn, uredni kabeli, sponzorske majice, League of Legends rasprave, novi Visual Studio. That's how we roll. </span>\r\n          </span>\r\n          <span class=\"icon\"> <img src=\"/Assets/Themes/Home/Images/values-icon-technology.png\" /> </span>\r\n        </span>\r\n      </span>\r\n    </li>    \r\n    \r\n    <li class=\"slide\" style=\"background-image: url('/Assets/Themes/Home/Images/values-teaching.jpg')\">\r\n      <span class=\"table\">\r\n        <span class=\"cell\">\r\n          <h3> Volimo predavati <span> na neobične načine </span> </h3>\r\n          <span class=\"text\">\r\n            <span> Na našim ciklusima djelimo palačinke, kitimo božićna drvca, glumimo robote i stvaramo priče. Ne vjerujemo klasičnom načinu predavanja, stoga to i ne prakticiramo. </span>\r\n          </span>\r\n          <span class=\"icon\"> <img src=\"/Assets/Themes/Home/Images/values-icon-teaching.png\" /> </span>\r\n        </span>\r\n      </span>\r\n    </li>\r\n\r\n    <li class=\"slide\" style=\"background-image: url('/Assets/Themes/Home/Images/values-perfection.jpg')\">\r\n      <span class=\"table\">\r\n        <span class=\"cell\">\r\n          <h3> Pazimo na detalje <span> i bezgrešan kod </span> </h3>\r\n          <span class=\"text\">\r\n            <span> Svaki razmak, svaki novi red, svaka točka zarez i svaki piksel se broji. Ne želimo biti jedni od \"onih ljudi\", stoga pazimo na detalje prilikom razvoja i dizajna naših proizvoda. Kvaliteta > kvantiteta! </span>\r\n          </span>\r\n          <span class=\"icon\"> <img src=\"/Assets/Themes/Home/Images/values-icon-perfection.png\" /> </span>\r\n        </span>\r\n      </span>\r\n    </li>    \r\n    \r\n    <li class=\"slide\" style=\"background-image: url('/Assets/Themes/Home/Images/values-enthusiasm.jpg')\">\r\n      <span class=\"table\">\r\n        <span class=\"cell\">\r\n          <h3> Volimo entuzijazam <span> i nasmijane ljude </span> </h3>\r\n          <span class=\"text\">\r\n            <span> Biti dumpovac znači biti entuzijast, voliti i širiti entuzijazam. Volimo ljude koji rade isto, gledamo ih kao pokretače društvenih grupica. Upravo među entuzijastima najčešće tražimo potencijalne dumpovce. </span>\r\n          </span>\r\n          <span class=\"icon\"> <img src=\"/Assets/Themes/Home/Images/values-icon-enthusiasm.png\" /> </span>\r\n        </span>\r\n      </span>\r\n    </li>\r\n    \r\n  </ul>\r\n  \r\n</div>";
  });
templates['members'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		  <li class=\"member\"> \r\n        <a title=\"";
  if (stack1 = helpers.fullName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fullName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <img src=\"";
  if (stack1 = helpers.pictureUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pictureUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.fullName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fullName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />  <span>+</span> </a>\r\n        <span class=\"memberStory\">\r\n          <img src=\"";
  if (stack1 = helpers.pictureUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pictureUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.fullName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fullName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n\r\n          <span class=\"story\">\r\n            <h2>";
  if (stack1 = helpers.fullName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fullName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n            <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n\r\n            <ul>\r\n              <li> <a href=\"mailto:";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> </li>\r\n              ";
  stack1 = helpers['if'].call(depth0, depth0.facebookUrl, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              ";
  stack1 = helpers['if'].call(depth0, depth0.twitterUrl, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              ";
  stack1 = helpers['if'].call(depth0, depth0.linkedInUrl, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n              ";
  stack1 = helpers['if'].call(depth0, depth0.otherUrl, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </ul>\r\n          </span>\r\n        </span>\r\n      </li>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li> <a target=\"_blank\" href=\"";
  if (stack1 = helpers.facebookUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.facebookUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.facebookUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.facebookUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> </li>";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li> <a target=\"_blank\" href=\"";
  if (stack1 = helpers.twitterUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.twitterUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.twitterUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.twitterUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> </li>";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li> <a target=\"_blank\" href=\"";
  if (stack1 = helpers.linkedInUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.linkedInUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.linkedInUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.linkedInUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> </li>";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li> <a target=\"_blank\" href=\"";
  if (stack1 = helpers.otherUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.otherUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.otherUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.otherUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> </li>";
  return buffer;
  }

  buffer += "﻿<div class=\"members\">\r\n\r\n	<h2>	<span>Tko su dumpovci?</span>	</h2>\r\n	<p>		<span>Trenutno brojimo 15 <i>geekova</i>, većinom studenata FESB-a. Tko su oni, kako su došli u DUMP i čime se svaki član bavi možete saznati ispod.</span>	</p>\r\n\r\n	<ul class=\"outerMargins clearfix\">\r\n	  ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	\r\n    <li class=\"signup\"> \r\n      <a href=\"mailto:info%40dump%2ehr?subject={IME} {PREZIME} - Prijava za članstvo u DUMP Udruzi mladih programera\"> \r\n        <span>Ti?</span> \r\n      </a> \r\n    </li>\r\n	</ul>\r\n\r\n</div>";
  return buffer;
  });
templates['shell'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "﻿<div id=\"billboardContainer\"></div>\r\n<div id=\"aboutContainer\"></div>\r\n<div id=\"keyPointsContainer\"></div>\r\n<div id=\"membersContainer\"></div>\r\n<div id=\"socialContainer\"></div>";
  });
templates['social'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "﻿<div class=\"social clearfix\">\r\n\r\n  <h2 class=\"outerLeftMargin\"> <span>Aktivni smo i na društvenim mrežama</span> </h2>\r\n\r\n  <a href=\"http://www.youtube.com/user/DUMPSnimke\" class=\"segment yt\">\r\n    <div class=\"icon\"> <img src=\"/Assets/Themes/Home/Images/social-yt-icon.png\" /> </div>\r\n    <div class=\"info\">\r\n      <span class=\"number\"> 136  </span>\r\n      <span class=\"link\">   DUMP Snimke  </span>\r\n    </div>\r\n  </a>  \r\n\r\n  <a  href=\"https://twitter.com/dumphr\" class=\"segment tw\">\r\n    <div class=\"icon\"> <img src=\"/Assets/Themes/Home/Images/social-tw-icon.png\" /> </div>\r\n    <div class=\"info\">\r\n      <span class=\"number\"> 255  </span>\r\n      <span class=\"link\">   twitter.com/dumphr </span>\r\n    </div>\r\n  </a>\r\n  \r\n  <a href=\"https://www.facebook.com/dump.hr\" class=\"segment\">\r\n    <div class=\"icon\"> <img src=\"/Assets/Themes/Home/Images/social-fb-icon.png\" /> </div>\r\n    <div class=\"info\">\r\n      <span class=\"number\"> 1205  </span>\r\n      <span class=\"link\">   fb.com/dump.hr  </span>\r\n    </div>\r\n  </a>  \r\n  \r\n</div>";
  });
})();