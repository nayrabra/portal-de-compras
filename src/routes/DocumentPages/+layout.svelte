<script lang="ts">
	import CardsDispensaEletronica from "./cards-DispensaEletronica.svelte";
    import CardsObrasEServicos from "./cards-ObrasEServicos.svelte";
    import CardsPregaoEletronico from "./cards-PregaoEletronico.svelte";
    import CardsRegistroDePrecos from "./cards-RegistroDePrecos.svelte";

	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<TabGroup justify="justify-center" class="text-lg font-mono">
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<svelte:fragment slot="lead"></svelte:fragment>
		<TabAnchor href="#">Dispensa Eletrônica</TabAnchor>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>
		<TabAnchor href="#">Obras e Seviços</TabAnchor>
	</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>	
		<TabAnchor href="#">Pregão Eletrônico</TabAnchor>
	</Tab>
    <Tab bind:group={tabSet} name="tab4" value={3}>	
		<TabAnchor href="#">Registro de Preços</TabAnchor>
	</Tab>
	
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<CardsDispensaEletronica></CardsDispensaEletronica>
		{:else if tabSet === 1}
			<CardsObrasEServicos></CardsObrasEServicos>
		{:else if tabSet === 2}
			<CardsPregaoEletronico></CardsPregaoEletronico>
        {:else if tabSet === 3}
			<CardsRegistroDePrecos></CardsRegistroDePrecos>
		{/if}
	</svelte:fragment>
</TabGroup>
			
	