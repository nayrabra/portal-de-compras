<!-- Importando a AppBar do módulo Skeleton -->
<!-- 
    <script>
    import { AppBar } from '@skeletonlabs/skeleton';
    </script>
   -->

  <!-- Início da barra de navegação (AppBar) -->

<!--   
  <AppBar>
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    (title)
    <svelte:fragment slot="trail">(actions)</svelte:fragment>
  </AppBar>
   -->

  <!-- Fim da barra de navegação -->
  
  <script>
    let showMenu = false;
  
    // Função para alternar a visibilidade do menu
    function toggleNavbar() {
      showMenu = !showMenu;
    }
  </script>
  
  <!-- Conteúdo principal da página -->
  <div>
    <div>
      <!-- Barra de navegação principal -->
      <nav class="px-6 py-2 mx-auto md:flex md:justify-between md:items-center bg-white">
        <div class="flex items-center justify-between">
          <!-- Logo da página -->
          <a class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400" href="https://www.tre-ce.jus.br/">Logo</a>
  
          <!-- Botão do menu para dispositivos móveis -->
          <div on:click={toggleNavbar} class="flex md:hidden">
            <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Menu para dispositivos móveis (aberto: "block", fechado: "hidden") -->
        <div class="flex-col mt-8 space-y-4 content-center md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu ? 'flex' : 'hidden'}">
          <a class="text-gray-800 hover:text-blue-400" href="/home">Público</a>
          <a class="text-gray-800 hover:text-blue-400" href="/blog">Empresas</a>
          <a class="text-gray-800 hover:text-blue-400" href="/contact">Documentações</a>
          <!-- <a class="text-gray-800 hover:text-blue-400" href="/about">About Us</a> -->
  
          <!-- Formulário de pesquisa -->
          <form class="flex items-center space-x-2 border-2 border-gray-200 bg-gray-200 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-800">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
            <input class="flex items-center space-x-2 border-none bg-gray-200 rounded-full p-1 placeholder-gray-800 text-gray-800" type="text" placeholder="Search"/>
          </form>
        </div>
      </nav>
      <!-- Fim da barra de navegação principal -->
    </div>
  </div>
  <!-- Fim do conteúdo principal da página -->
  