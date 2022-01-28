const router = require("express").Router()
const Band = require("./bands-model")

router.get("/", (req, res, next) => {
  return Band.getAll()
    .then((bands) => {
      res.status(200).json(bands)
    })
    .catch((err) => next(err))
})

router.get("/:id", (req, res, next) => {
  Band.getById(req.params.id)
    .then((band) => {
        if (!band) {
          res.status(404).json({message: `couldn't find band with id ${req.params.id}`})
      } else {
        res.status(200).json(band)
      }
    })
    .catch((err) => next(err))
})

module.exports = router
