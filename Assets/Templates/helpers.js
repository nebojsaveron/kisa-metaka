Handlebars.registerHelper('printLongDateTime', function(value)
{
    return moment(value).format('DD. MMMM YYYY. u HH:mm');
});

Handlebars.registerHelper('denoteIfActive', function(id, activeNewsId)
{
    var isActive =
        (activeNewsId
         && id === activeNewsId);

    if (isActive)  { return "active"; } 
    else           { return "";       }
});

Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});

Handlebars.registerHelper('printPermalink_news', function (newsId) {
    var locationRoot = window.location.protocol + '//' + window.location.host;

    return locationRoot + '/novosti/' + newsId;
});

Handlebars.registerHelper('printRoute_news', function (news) {
    var urlFriendlyNewsTitle = helpers.toUrlFriendlyString(news.title);

    return '/novosti/' + news.id + '/' + urlFriendlyNewsTitle;
});

Handlebars.registerHelper('printFragment_news', function (news) {
    var urlFriendlyNewsTitle = helpers.toUrlFriendlyString(news.title);

    return '/' + news.id + '/' + urlFriendlyNewsTitle;
});  
