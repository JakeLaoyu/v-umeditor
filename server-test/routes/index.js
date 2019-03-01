const router = require('koa-router')()
const multer = require('koa-multer')

var storageZip = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')		// 文件存储路径
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)	// 对文件重新命名，防止文件名冲突
  }
})

var uploadZip = multer({
  storage: storageZip
})

router.post('/server-test/upload', uploadZip.single('file'), async (ctx) => {
  ctx.body = {
    state: 'SUCCESS',
    url: `//localhost:3000/images/${ctx.req.file.filename}`,
    file: ctx.req.file
  }
})

module.exports = router
