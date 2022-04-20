module.exports = (req, res, next) => {
  const { talk } = req.body;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  // referência https://bobbyhadz.com/blog/javascript-date-validation-dd-mm-yyyy#:~:text=The%20toISOString()%20method%20returns,as%20DD%2FMM%2FYYYY%20.
  const checkDate = regex.test(talk.watchedAt);
  if (!talk.watchedAt) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (!checkDate) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  
  next();
};
