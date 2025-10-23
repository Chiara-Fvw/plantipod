import logger from "./logger.js";
import config from "./config.js";

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({error: 'malformatted '})
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({error: err.message})
  }

  // In production, don't expose internal error details
  if (config.NODE_ENV === 'production') {
    return res.status(500).json({ error: 'Internal server error' });
  }

  // In development, show detailed error
  res.status(500).json({
    error: err.message,
    stack: err.stack
  });
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({error: 'Unknown endpoint.'})
}

export { errorHandler, unknownEndpoint }