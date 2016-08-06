self.addEventListener('fetch', function (event) {
  console.log(`Fetching URL: ${event.request.url}`);
});
