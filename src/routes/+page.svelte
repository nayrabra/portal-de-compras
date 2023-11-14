<script>
    import Icon from '../../static/icon-clock.svg'
    
    //const logo = new URL('/src/images/TRE_Logo.png', import.meta.url).href;
    const cardData = [
  {
  id: "1",
  title: "Planejamento de Contratações",
  },
  {
  id: "2",
  title: "Documentos",
  },
  {
  id: "3",
  title: "Registro de Preços",
  },
  {
  id: "4",
  title: "Licitações Publicadas",
  },
  {
  id: "5",
  title: "Gestores e fiscais de contratação",
  },
  {
  id: "6",
  title: "Fornecedores Emissão de CRC",
  },
  {
  id: "7",
  title: "Pesquisa de Preços",
  
  },
  ];
  
  let showModal = false;
  let selectedCard = null; // Para manter o controle do card selecionado
  
  function openModal(card) {
    selectedCard = card;
    showModal = true;
  }
  </script>
  
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      {#each cardData as card}
      <!-- Column -->
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 mx-auto">
        <!-- Article -->
        <article class="overflow-hidden bg-green-400 rounded-lg shadow-xl text-center content-center">
          <a href="{card.link}" class="block h-full p-4 text-center">
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg text-center content-center text-gray-950"> 
                <a href="#" class="no-underline text-gray-950 drop-shadow center text-center content-center">
                  {card.title}
                </a>
              </h1>
            </header>
          </a>
        </article>
      </div>
      {/each}
    </div>
  </div>
  
  <article class="my-12 mx-auto max-w-6xl">
    <h3 class="text-center text-2xl font-semibold mb-8">Regulamentações da Lei nº 14.133/21 por Tema</h3>
    <div>
      <p class="mb-6">A nova página foi organizada por temas para auxiliar os usuários no encontro das legislações de maneira rápida e eficiente, possibilitando assim, a navegação de forma intuitiva, conforme assuntos específicos.</p>
      <p>Portanto, a página permite o encontro de normas de uma variedade de temas, como Rede Nacional de Contratações Públicas, Fornecedores, Políticas Públicas, Planejamento das Contratações, Execução Contratual e muito mais. <br>
      Todos os assuntos estão relacionados à <strong>Lei n.º 14.133 de 1º de abril de 2021.</strong></p>
    </div> 
    <div class="text-center mt-8">
      <button class="bg-gray-100 px-1.5 py-1.5 mt-4 border-blue-500 border text-blue-500 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none drop-shadow-md"><a href="#">Lei n˚14.133/21</a></button>
    </div>
  </article>
  
  <div class="grid grid-cols-3 gap-4 mx-auto max-w-6xl">
    <section class="mt-16 mr-12 mb-40 ml-12"> 
      <div class="border-r w-1 bg-emerald-600">
        <h4 class="ml-2">Fornecedores</h4>
      </div>
      <div class="w-120 h-60 bg-gray-300 mb-2 mt-2"></div>
      <p class="font-medium text-xs mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="font-light text-xs mr-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
      <div class="text-center">
        <button class="px-1.5 py-1.5 mt-4 border-blue-500 border text-blue-500 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"><a href="#">Seja um Fornecedor</a></button>
      </div>
    </section>
  
    <section class="m-8 mt-16 mr-12 mb-40 ml-12">
      <div class="border-r w-1 bg-emerald-600">
        <h4 class="ml-2 whitespace-nowrap">Órgão Público</h4>
      </div>
      <div class="w-120 h-60 bg-gray-300 mb-2 mt-2"></div>
      <p class="font-medium text-xs mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="font-light text-xs mr-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="text-center">
        <button class="px-1.5 py-1.5 mt-4 border-blue-500 border text-blue-500 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"><a href="#">Faça sua Adesão</a></button>
      </div>
    </section>
  
    <section class="m-8 mt-16 mr-12 mb-40 ml-12">
      <div class="border-r w-1 bg-emerald-600">
        <h4 class="ml-2 whitespace-nowrap">Compras e Consultas</h4>
      </div>
      <div class="w-120 h-60 bg-gray-300 mb-2 mt-2"></div>
      <p class="font-medium text-xs mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="font-light text-xs mr-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="text-center">
        <button class="px-1.5 py-1.5 mt-4 border-blue-500 border text-blue-500 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"><a href="#">Ver mais</a></button>
      </div>
    </section>
  </div>
  
  <footer class=" bg-emerald-600 bottom-0 inset-x-0 p-1 px-1">
    <section class="flex bottom-0 inset-x-0 mb-4 ml-6 text-neutral-200">
      <div class="flex-auto flex flex-row items-center content-center">
        <img alt="logo TRE" class="h-10 w-10" src="/src/images/TRE_Logo.png">
        <p class="ml-2 mt-2">Tribunal<br> Regional<br> Eleitoral</p>
      </div>
  
      <div class="flex-auto flex flex-row items-center content-center mr-24 gap-2">
        <div class="text-center">
          <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6795 35.4866C6.75784 36.6631 4.33334 38.2881 4.33334 40.0832C4.33334 43.6733 14.0335 46.5832 26 46.5832C37.9665 46.5832 47.6667 43.6733 47.6667 40.0832C47.6667 38.2881 45.2411 36.6631 41.3205 35.4866" stroke="#F9EBEB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 37.9166C26 37.9166 40.0834 28.7126 40.0834 18.0721C40.0834 10.4844 33.7784 4.33325 26 4.33325C18.2217 4.33325 11.9167 10.4844 11.9167 18.0721C11.9167 28.7126 26 37.9166 26 37.9166Z" stroke="#F9EBEB" stroke-width="4" stroke-linejoin="round"/>
            <path d="M26 23.8333C27.4366 23.8333 28.8144 23.2627 29.8302 22.2468C30.846 21.231 31.4167 19.8533 31.4167 18.4167C31.4167 16.9801 30.846 15.6023 29.8302 14.5865C28.8144 13.5707 27.4366 13 26 13C24.5634 13 23.1857 13.5707 22.1698 14.5865C21.154 15.6023 20.5833 16.9801 20.5833 18.4167C20.5833 19.8533 21.154 21.231 22.1698 22.2468C23.1857 23.2627 24.5634 23.8333 26 23.8333Z" stroke="#F9EBEB" stroke-width="4" stroke-linejoin="round"/>
          </svg>
        </div>  
          <p class="ml-2 mt-2">Rua Dr. Pontes Neto 800 - Eng. Luciano Cavalcante - 
          <br>Fortaleza/CE - CEP 60813-600
          <br>Tel: (85) 3453-3500</p>
  
        <!-- Divisória -->
        <div class="border-r-4 h-18 mx-4 mt-2 border-gray-50"></div>
  
        <div class="text-center ml-12">
          <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 0.333252C19.1547 0.333252 16.3373 0.893677 13.7086 1.98253C11.0798 3.07138 8.69133 4.66734 6.67939 6.67927C2.61611 10.7426 0.333374 16.2536 0.333374 21.9999C0.333374 27.7463 2.61611 33.2573 6.67939 37.3206C8.69133 39.3325 11.0798 40.9285 13.7086 42.0173C16.3373 43.1062 19.1547 43.6666 22 43.6666C27.7464 43.6666 33.2574 41.3839 37.3207 37.3206C41.384 33.2573 43.6667 27.7463 43.6667 21.9999C43.6667 19.1546 43.1063 16.3372 42.0174 13.7084C40.9286 11.0797 39.3326 8.69121 37.3207 6.67927C35.3088 4.66734 32.9202 3.07138 30.2915 1.98253C27.6628 0.893677 24.8453 0.333252 22 0.333252ZM31.1 31.0999L19.8334 24.1666V11.1666H23.0834V22.4333L32.8334 28.2832L31.1 31.0999Z" fill="#F9EBEB"/>
          </svg>
        </div>
        <p class="ml-2">Horário de funcionamento:
        <br>Segunda a sexta das 8h às 14h.</p>
      </div>
      
    </section>
  </footer>  
  
  
  
  
  
  