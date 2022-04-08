function mediaResultado(media) {
  if (media >= 7) {
    return 'aprovado';
  }

  return 'reprovado';
}

module.exports = mediaResultado;
