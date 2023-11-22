<script>
    const cardCadastro = [
        { 
            title: "Formulário de cadastro"
        },
        {
            title: "Micro e pequenas empresas"
        },
        {
            title: "Emissão de CRC"
        },
    ];

    let showModal = false;
    let selectedCard = null; // Para manter o controle do card selecionado
  
    function openModal(card) {
        selectedCard = card;
        showModal = true;
    }
</script>
  
<div class="container mx-auto my-12 px-4 md:px-12">
    <div class="flex flex-wrap justify-center">
      {#each cardCadastro as card}
      <!-- Column -->
      <div class="my-4 px-4 w-full md:w-1/2 lg:w-1/4">
        <!-- Article -->
        <article class="overflow-hidden bg-transparent shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] text-center border-b-4 border-emerald-600 hover:border-yellow-200">
          <header class="p-4">
            <h1 class="text-lg text-gray-950"> 
              <a href="#" class="no-underline text-gray-950">
                {card.title}
              </a>
            </h1>
          </header>
        </article>
      </div>
      {/each}
    </div>
</div>
  

<section class="my-16 mx-auto bg-neutral-100 bg-opacity-80 p-16">
    <div class="ml-20 border-r w-1 bg-emerald-600">
      <h4 class="max-w-xl mx-auto mr-20 ml-2 whitespace-nowrap font-medium text-4xl">Cadastramento | Atualização de Fornecedores</h4>
    </div>
    <p class="ml-20 mr-20 font-light mt-4 text-xl">O cadastramento de fornecedores e a emissão do Certificado de Registro Cadastral (CRC) são condições necessárias para participar de processos licitatórios e realizar as contratações deles decorrentes no âmbito da Administração Pública Estadual do Ceará, nos termos da Lei Federal nº 8.666/1993 e do Decreto Estadual nº 32.901, de 17 de dezembro de 2018.
    Esta página objetiva informar sobre os procedimentos, documentos e meios de contatos (se necessários) para o cadastramento de fornecedores e obtenção do Certificado de Registro Cadastral (CRC).</p>
</section>

<section class="my-12 mx-auto max-w-6xl">
    <div class="border-r w-1 bg-emerald-600">
      <h4 class="ml-2 whitespace-nowrap font-medium">Procedimento para novo cadastro ou atualização/recadastramento (o fornecedor receberá login e senha)</h4>
    </div>
    <p class="font-light mt-4">Para iniciar os passos a seguir, acesse o sistema Cadastro de Fornecedores, clicando em:</p>
    <p class="font-light mt-4">Pré-cadastro Fornecedor Pessoa Jurídica, se quem vai fornecer é uma pessoa jurídica (CNPJ); ou Pré-cadastro Fornecedor Pessoa Física, se quem vai fornecer é uma pessoa física (CPF).</p>
    <ul class="list-disc ml-4 mt-4 font-light">
        <li>
            Passo 1º – Realizar o cadastramento ou atualização (se necessário) do Representante de Cadastro;
        </li>
        <li>
            Passo 2º – Realizar o cadastramento ou atualização do Fornecedor;
        </li>
        <li>
            Passo 3º – Validar o e-mail e imprimir/assinar o Termo de Adesão do Fornecedor;
        </li>
        <li>
            Passo 4º – Entregar o Termo de Adesão do Fornecedor, juntamente com a documentação exigida, na Coordenadoria de Gestão de Compras da SEPLAG (endereço ao final desta página); <span class="font-medium">Tendo em vista a situação excepcional de trabalho remoto nesse período de emergência em saúde, estamos recebendo a documentação de inscrição por e-mail, por intermédio do endereço eletrônico <a href="mailto:crc@seplag.ce.gov.br" class="hover:underline text-blue-600">crc@seplag.ce.gov.br</a></span> 
        </li>
        <li>
            Passo 5º – Aguardar e-mail com usuário e senha do Representante de Cadastro para acessar o sistema de cotação eletrônica.
            <p>Obs. 1: No caso de fornecedor Pessoa Física, o Representante de Cadastro poderá ser a própria pessoa física interessada no fornecimento.</p>
            <p>Obs. 2: No caso de substituição do Representante de Cadastro, faz- se necessário o cadastramento do novo Representante e a atualização do Fornecedor no sistema, ocasião em que poderá ser excluído o Representante a ser substituído.</p>
        </li>
        <li>
            Para aprender a utilizar o sistema Cadastro de Fornecedores, <a class="hover:underline text-blue-600" href="https://s2gpr.sefaz.ce.gov.br/fornecedor-web/paginas/ajuda/AjudaExterna.seam?cid=255" target="_blank">clique aqui.</a>
        </li>
        <li>
            Para realizar novo cadastro ou atualização/recadastramento, <a class="hover:underline text-blue-600" href="https://s2gpr.sefaz.ce.gov.br/fornecedor-web/padrao-web/paginas/seguranca/login.seam?cid=255" target="_blank">clique aqui.</a>
        </li>
        <li>
            Para ler Perguntas Frequentes (FAQ), <a class="hover:underline text-blue-600" href="https://www.portalcompras.ce.gov.br/2016/05/05/perguntas-e-respostas-frequentes-faq/" target="_blank">clique aqui.</a> 
        </li>
        <li>
            Navegador Padrão: <a class="hover:underline text-blue-600" href="https://www.mozilla.org/pt-BR/firefox/new/" target="_blank"> Mozilla Firefox</a>
        </li>
    </ul>
</section>



  