const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const resultado = (obj) => {
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
    console.log(`Nome da habilidade: ${Object.keys(obj)[i]}
Nível: ${Object.values(obj)[i]}
`)}};

resultado(student1)

