let nomeErro = false
const states = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goías' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraíma' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
  ];

  window.onload = () => {
    for (let index = 0; index < states.length; index += 1) {
      document.querySelector('#estado').appendChild(document.createElement('option'));
      let opcao = document.querySelectorAll('#estado option');
      opcao[index].innerText = states[index].label;
      opcao[index].value = states[index].value;
    } 
  };


document.querySelector('#inicio').addEventListener('keyup', () => {
  const valor = document.querySelector('#inicio').value
  if (valor.length == 2) {
    document.querySelector('#inicio').value += '/'
  }
  if(valor.length == 5) {
    document.querySelector('#inicio').value += '/'
  }
})

document.querySelector('#inicio').addEventListener('keydown', function(event) {
  var tecla = event.keyCode;
  if (tecla === 8) {
    document.querySelector('#inicio').value = ''
  }
})

document.querySelector('#enviar').addEventListener('click', (event) => {
  if (document.querySelector('#nome').value === "" ) {
    event.preventDefault()
    alert('Nome não pode estar vázio!')
  } else if (document.querySelector('#email').value === "" ) {
    event.preventDefault()
    alert('Email não pode estar vázio!')
  } else if (document.querySelector('#cpf').value.length < 11 ) {
    event.preventDefault()
    alert('CPF precisa ter 11 digitos!')
  } else if (document.querySelector('#endereço').value === "" ) {
    event.preventDefault()
    alert('Endereço não pode estar vázio!')
  } else if (document.querySelector('#cidade').value === "" ) {
    event.preventDefault()
    alert('Cidade não pode estar vázio!')
  } else if (document.querySelector('#textarea').value === "" ) {
    event.preventDefault()
    alert('Experiência não pode estar vázio!')
  } else if (document.querySelector('#cargo').value === "" ) {
    event.preventDefault()
    alert('Cargo não pode estar vázio!')
  } else if (document.querySelector('#descricao').value === "") {
    event.preventDefault()
    alert('Descrição não pode estar vázio!')
  }
})

