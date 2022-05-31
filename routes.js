const pkg = require('./package.json')
const event = require('./api/events')

function routes(app) {
  app.set('pkg', pkg)
  app.get('/', (req, res) => {
    res.json({
      name: app.get('pkg').name,
      author: app.get('pkg').author,
      description: app.get('pkg').description,
      version: app.get('pkg').version
    })
  })
  app.use('/api/v1/events', event)

}

module.exports = routes




