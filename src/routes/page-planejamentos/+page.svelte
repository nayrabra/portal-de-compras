<script>
    const cardDocs = [
        {
            title: "Documento tipo 1",
            description: "Explicação de constituição de documento",
            form: "Formulário",
            doc: "Ver DOC",
            pdf: "Ver PDF",
        },
        {
            title: "Documento tipo 2",
            description: "Explicação de constituição de documento",
            form: "Formulário",
            doc: "Ver DOC",
            pdf: "Ver PDF",
        },
        {
            title: "Documento tipo 3",
            description: "Explicação de constituição de documento",
            form: "Formulário",
            doc: "Ver DOC",
            pdf: "Ver PDF",
        },
    ];
  </script>

<section class="mt-8 mr-52 mb-12 ml-12">
    <div class="border-r w-1 bg-emerald-600">
      <h4 class="ml-2 whitespace-nowrap font-medium">Planejamento de Contratações</h4>
    </div>
    <p class="font-light mt-4">Lorem ipsum dolor sit amet. Ad culpa iusto id quibusdam inventore quo internos adipisci ut molestias iure est autem iusto qui soluta maiores. Ab quia internos est unde galisum rem quisquam consequatur nam facere libero aut voluptas maiores. In veniam dolores et nobis modi nam assumenda Quis ut modi quia quo facilis voluptas vel accusantium molestiae et velit architecto. Ut blanditiis itaque ut aliquam maxime aut autem dolorem et quia reprehenderit!</p>
    <p class="font-light mt-2">Ut eveniet dolor id delectus optio qui fugiat totam qui vero harum eos labore modi. Aut consequuntur nihil aut excepturi tenetur ut quia impedit? Est minus sint rem minima illum aut molestias voluptatibus sit voluptas velit non iusto harum ab maxime quisquam. Qui galisum rerum ut animi galisum vel eligendi voluptates ad saepe unde hic voluptate ipsum est corporis doloremque aut officiis assumenda.</p>  
    <p class="font-light mt-2">Ut eveniet dolor id delectus optio qui fugiat totam qui vero harum eos labore modi. Aut consequuntur nihil aut excepturi tenetur ut quia impedit? Est minus sint rem minima illum aut molestias voluptatibus sit voluptas velit non iusto harum ab maxime quisquam. Qui galisum rerum ut animi galisum vel eligendi voluptates ad saepe unde hic voluptate ipsum est corporis doloremque aut officiis assumenda. Ut eveniet dolor id delectus optio qui fugiat totam qui vero harum eos labore modi. Aut consequuntur nihil aut excepturi tenetur ut quia impedit? Est minus sint rem minima illum aut molestias voluptatibus sit voluptas velit non iusto harum ab maxime quisquam. Qui galisum rerum ut animi galisum vel eligendi voluptates ad saepe unde hic voluptate ipsum est corporis doloremque aut officiis assumenda.</p>
</section>
<img alt="Imagem meramente ilustrativa" class="h-auto ml-12 mb-16" src="/src/images/image 1.png">
<div class="border-2 border-gray-300 mr-10 ml-8 mb-16"></div>

<section class="m-8 mr-52 ml-12 mt-16">
    <div class="border-r w-1 bg-emerald-600">
      <h4 class="ml-2 whitespace-nowrap">Dispensa Eletrônica</h4>
    </div>
    <p class="font-light mt-4">Lorem ipsum dolor sit amet. Ad culpa iusto id quibusdam inventore quo internos adipisci ut molestias iure est autem iusto qui soluta maiores. Ab quia internos est unde galisum rem quisquam consequatur nam facere libero aut voluptas maiores. In veniam dolores et nobis modi nam assumenda Quis ut modi quia quo facilis voluptas vel accusantium molestiae et velit architecto. Ut blanditiis itaque ut aliquam maxime aut autem dolorem et quia reprehenderit!</p>
  </section>

  <div class="overflow-x-auto rounded-lg">
    <table class="text-sm mb-20 ml-12 w-11/12">
      {#each cardDocs as card}
        <tbody>
          <tr class="bg-[#eee9e9] border-b border-zinc-300">
            <th scope="row" class="font-medium text-black whitespace-nowrap">
                {card.title}
            </th>
            <td>
              {card.description}
            </td>
            <td class="px-2 py-2 whitespace-no-wrap border-b text-sm text-right  border-zinc-300">
              <button class="px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none mr-2"><a href="#">{card.form}</a></button>
              <button class="px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none mr-2"><a href="#">{card.doc}</a></button>
              <button class="px-2 py-2 mr-4 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"><a href="#">{card.pdf}</a></button>
            </td>
          </tr>
        </tbody>
        {/each}
    </table>
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
