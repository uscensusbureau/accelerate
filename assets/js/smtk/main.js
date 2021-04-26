---
---

const creativeResources = {{ site.data.2020-data-release.creative-resources | jsonify }}
console.log(creativeResources)
const crSelect = document.getElementById('cr-select')
crSelect.addEventListener('change', e => {
  console.log( crSelect.value )
  const match = creativeResources.find( el => el.title === crSelect.value )
  console.log(match)
})