document.addEventListener('DOMContentLoaded', () => {
  const containerPrincipal = document.querySelector('.container-principal');
  const botaoAdicionarCartao = document.getElementById('btn-adicionar-cartao');
  
  if (containerPrincipal && botaoAdicionarCartao) {
    botaoAdicionarCartao.addEventListener('click', () => {
      const novoCartao = document.createElement('article'); 
      novoCartao.classList.add('cartao');
      novoCartao.innerHTML = `
        <h2>Novo Artigo</h2>
        <p>Este é um novo artigo adicionado dinamicamente.</p>
      `;
      
      containerPrincipal.appendChild(novoCartao);
    });
  }
});
