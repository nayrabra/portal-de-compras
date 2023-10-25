<script>
    const cardData = [
        {
        title: "Article Title 1",
        date: "11/1/19",
        author: "Author Name 1",
        imageUrl: "https://picsum.photos/600/400/?random",
        },
        {
        title: "Article Title 2",
        date: "11/1/19",
        author: "Author Name 2",
        imageUrl: "https://picsum.photos/600/400/?random",
        },
        {
        title: "Article Title 3",
        date: "11/1/19",
        author: "Author Name 3",
        imageUrl: "https://picsum.photos/600/400/?random",
        },
        {
        title: "Article Title 3",
        date: "11/1/19",
        author: "Author Name 3",
        imageUrl: "https://picsum.photos/600/400/?random",
        },
        {
        title: "Article Title 3",
        date: "11/1/19",
        author: "Author Name 3",
        imageUrl: "https://picsum.photos/600/400/?random",
        },
      // Adicione mais dados de cartão conforme necessário
    ];
  </script>
  
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      {#each cardData as card}
      <!-- Column -->
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <!-- Article -->
        <article class="overflow-hidden bg-gray-50 rounded-lg shadow-lg">
          <a href="#">
            <img alt="Placeholder" class="block h-auto w-full" src={card.imageUrl}>
          </a>
          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-black" href="#">
                {card.title}
              </a>
            </h1>
            <p class="text-grey-darker text-sm">
              {card.date}
            </p>
          </header>
          <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <a class="flex items-center no-underline hover:underline text-black" href="#">
              <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
              <p class="ml-2 text-sm">
                {card.author}
              </p>
            </a>
            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
              <span class="hidden">Like</span>
              <i class="fa fa-heart"></i>
            </a>
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
      {/each}
    </div>
  </div>
  