import logger from "./logger.js";

const errorHandler = (err, req, res, next) => {
  logger.error(err.messge);

  if (err.name === 'CastError') {
    return res.status(400).send({error: 'malformatted '})
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({error: err.message})
  }

  next(err);
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({error: 'Unknown endpoint.'})
}

export { errorHandler, unknownEndpoint }