<template>
    <div v-if="items">
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td v-for="i in items.rates" :key="i.no">{{ i.no }}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>data</td>
                    <td v-for="i in items.rates" :key="i.no">{{ i.effectiveDate }}</td>
                </tr>
                <tr>
                    <td>cena</td>
                    <td v-for="i in items.rates" :key="i.no">{{ i.mid }}</td>
                </tr>
            </tbody>
        </table>
        <br>
        {{ items.rates }}
    </div>
    <div v-else>loading data</div>
</template>
<script>
export default {
    name: 'FetchData',
    data() {
        return {
            items: null
        }
    },
    mounted() {
        fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json')
            .then(res => res.json())
            .then(data => this.items = data)
            .catch(err => console.log(err.message))
    }
}
</script>
<style scoped>
td {
    border: 1px solid black;
}
</style>