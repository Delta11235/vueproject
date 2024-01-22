<template>
  <div v-if="items">
    <table>
      <thead>
        <tr>
          <td>kod</td>
          <td>waluta</td>
          <td>kurs</td>
        </tr>
      </thead>
      <tr v-for="rate in items[0].rates" :key="rate.no">
        <td>{{ rate.code }}</td>
        <td>{{ rate.currency }}</td>
        <td>{{ rate.mid }}</td>
      </tr>
    </table>
    <br />
  </div>
  <div v-else>loading data...</div>
</template>
<script>
export default {
  name: "KursyComponent",
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
td {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 5px;
  border: 1px solid black;
}
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
td:hover {
  background-color: rgb(51, 44, 44);
  color: rgb(207, 192, 192);
}
table:hover {
  cursor: none;
}
</style>
