<template>
  <div v-if="items">
    <select v-model="code">
      <option disabled>waluta</option>
      <option v-for="rate in items[0].rates" :key="rate.no">
        {{ rate.code }}
      </option>
    </select>
    <select v-model="iloscDni">
      <option disabled>ilość dni</option>
      <option v-for="i in 14" :key="i">{{ i }}</option>
    </select>

    <!-- {{ iloscDni }} -->
    <div v-if="api">
      <!-- {{ api.rates }} -->
      <table>
        <tr>
          <td>data</td>
          <td v-for="rate in api.rates" :key="rate.no">
            {{ rate.effectiveDate }}
          </td>
        </tr>
        <tr>
          <td>id</td>
          <td v-for="rate in api.rates" :key="rate.no">{{ rate.no }}</td>
        </tr>
        <tr>
          <td>kurs</td>
          <td v-for="rate in api.rates" :key="rate.no">{{ rate.mid }}</td>
        </tr>
      </table>
    </div>
    <div v-else>wybierz by poznać kurs w ciągu ostatnich dniach</div>
  </div>
  <div v-else>loading data...</div>
</template>
<script>
export default {
  name: "PorównywarkaComponent",
  data() {
    return {
      items: null,
      code: null,
      api: null,
      iloscDni: null,
    };
  },
  mounted() {
    fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((err) => console.log(err.message));
  },
  updated() {
    fetch(
      "https://api.nbp.pl/api/exchangerates/rates/A/" +
        this.code +
        "/last/" +
        this.iloscDni +
        "/?format=json"
    )
      .then((res) => res.json())
      .then((data) => (this.api = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
select,
td {
  padding: 5px;
}
select {
  margin: 5px;
}
td {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 5px;
  border: 1px solid black;
}
td:hover {
  background-color: rgb(51, 44, 44);
  color: rgb(207, 192, 192);
}
table:hover {
  cursor: none;
}
table {
  margin: 20px;
}
</style>
