function sortByName(a, b) {
  var titleA = a.title.toUpperCase(); // ignore upper and lowercase
  var titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  // names must be equal
  return 0;
};

Vue.component('category', {
  props: ['header', 'links', 'type'],
  template: `
    <div>
      <h3>{{header}}</h3>
      <a v-for="link in links" :href="link.url" target="_blank">{{link.title}}</a>
    </div>
  `
});

const app = new Vue({
  el: '#app',
  data: {
    column: 'flex-column',
    core: 'core',
    coreLinks: [],
    non: 'non',
    nonLinks: [],
    support: 'supporting',
    supportLinks: []
  },
  linkData: [],
  created: async function() {
    const path = 'https://gj474n8ecg.execute-api.us-east-1.amazonaws.com/dev/getLinks';
    const options = { mode: 'no-cors' };
    const data = await fetch(path).then((response) => {
      response.json().then((body) => {
        const coreLinks = body.data.filter(link => link.type === "core");
        const nonLinks = body.data.filter(link => link.type === "non");
        const supportLinks = body.data.filter(link => link.type === "support");
        coreLinks.sort((a, b) => { return sortByName(a, b); }).forEach((link) => { this.coreLinks.push(link); });
        nonLinks.sort((a, b) => { return sortByName(a, b); }).forEach((link) => { this.nonLinks.push(link); });
        supportLinks.sort((a, b) => { return sortByName(a, b); }).forEach((link) => { this.supportLinks.push(link); });
      });
    });
  }
});
