/* <script>
import "../table.css";
import { onMount } from "svelte";
import { createClient } from "@supabase/supabase-js";
import { writable } from 'svelte/store';

const supabaseUrl = "https://jjzaiufcivsiibblatdu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqemFpdWZjaXZzaWliYmxhdGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MjMzOTUsImV4cCI6MjAxMjA5OTM5NX0.hgDOyxjGaP9LaZ4mim4fX2KYZl-qc-Klo1258AC5bfg";
const supabase = createClient(supabaseUrl, supabaseKey);


let cardData = writable([]);

onMount(async () => {

  const { data, error } = await supabase
  .from('Eletronic_bid')
  .select('*');

  if (error) {
    console.error("Erro ao buscar dados: " + error.message);
  } else {
    cardData.set(data); // Atualize a variável observável com os dados obtidos
    console.log(cardData);
  }
});

</script>

 */