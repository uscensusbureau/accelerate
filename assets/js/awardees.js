---
---

window.awardsByCompany = [
{% assign awards_by_company = site.data.awards | group_by: "awardeeName" | sort: 'name' %}
{% for company in awards_by_company %}
{% assign = forloop_last = forloop.last %}
{% for award in company.items %}
{
"title": {{ award.awardeeName | title | jsonify }},
"slug": "{{ award.awardeeName | slugify }}",
"date": "{{ award.date }}",
"awardee": "{{ award.awardeeName }}",
"city": "{{ award.awardeeCity | titlecase }}, {{ award.awardeeStateCode }}",
"piName": "{{ award.piFirstName }} {{ award.piLastName }}",
"amount": "{{ award.fundsObligatedAmt | round | intcomma_dollar }}",
"abstractText": {{ award.abstractText | default: '' | jsonify }}
}{% unless forloop_last and forloop.last %},{% endunless %}
{% endfor %}
{% endfor %}
]

$(function() {

console.log('loaded')
  var options = {
    valueNames: [
      'title',
      'date',
      'awardee',
      'city',
      'piName',
      'amount',
      'slug',
      'abstractText'
    ],
    item: "<li>" +
      "<h3 class='title'></h3><p class='date'></p>" +
      "<h4 class='awardee'></h4>" +
      "<p class='city'></p>" +
      "<p class='piName'></p>" +
      "<p class='amount'></p>" +
      "<p class='abstractText'></p>" +
    "</li>"
  };

  var awardsDetailsList = new List('awards-details-list', options);
  console.log(awardsDetailsList)
  window.awardsDetailsList = awardsDetailsList;


  function slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  window.awardsByCompany.forEach(function(company){
    if (company.slug == getQueryVariable('company')) {
      var newItem = awardsDetailsList.add(company)
      $('.results-loading').hide()
      $('.results').show();
      console.log(company.awardee);
      $('.title').text('Company details for ' + company.awardee);
    }
  })

});

