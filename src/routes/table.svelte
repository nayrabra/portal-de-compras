<script>
    import '../table.css';
    
    const cardData = [
      {
        title: "Eletronic bid(R$)",
        process: "Number of process",
        number: "86",
        estimated: "Estimated value",
        estimatedValue: "66,252,992.2500",
        trated: "Traded value",
        tratedValue: "R$54,637,834.4300",
        economy: "Economy",
        economyValue: "11,615,157.8200",
        economyPorCent: "Economy %",
        economyPorCentValue: "17.53",
      },
      {
        title: "Direct purchase(R$)",
        process: "Number of process",
        number: "1232",
        estimated: "Estimated value",
        estimatedValue: "10,112,163.7920",
        trated: "Traded value",
        tratedValue: "R$9,683,273.2970",
        economy: "Economy",
        economyValue: "428,890.4950",
        economyPorCent: "Economy %",
        economyPorCentValue: "4.24",
      },
      {
        title: "Presential modalities(R$)",
        process: "Number of process",
        number: "4",
        estimated: "Estimated value",
        estimatedValue: "22,555,827.2800",
        trated: "Traded value",
        tratedValue: "R$21,192,889.9300",
        economy: "Economy",
        economyValue: "1,362,937.3500",
        economyPorCent: "Economy %",
        economyPorCentValue: "6.04",
      },
    ];
    </script>
    
    <div class="m-10 flex items-center text-center">
      {#each cardData as card}
      <div class="m-8">
        <table>
          <th colspan="2"><h2 class="whitespace-no-wrap text-gray-600">{card.title}</h2></th>
          <tr>
            <th class="text-left">{card.process}</th>
            <td class="text-right">{card.number}</td>
          </tr>
          <tr>
            <th class="text-left">{card.estimated}</th>
            <td class="text-right">{card.estimatedValue}</td>
          </tr>
          <tr>
            <th class="text-left">{card.trated}</th>
            <td class="text-right">{card.tratedValue}</td>
          </tr>
          <tr>
            <th class="text-left">{card.economy}</th>
            <td class="text-right">{card.economyValue}</td>
          </tr>
          <tr>
            <th class="text-left">{card.economyPorCent}</th>
            <td class="text-right">{card.economyPorCentValue}</td>
          </tr>
        </table>
      </div>
      {/each}
    </div>
    